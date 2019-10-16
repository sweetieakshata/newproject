import { Component, OnInit, ViewChild } from '@angular/core';

import { MatMenuTrigger } from '@angular/material/menu';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Organization } from '../Organization';
import { OrganizationdataService } from '../organizationdata.service';

@Component({
selector: 'app-list',
templateUrl: './list.component.html',
styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
id: number;
name: string;
description: string;
list: Organization[] = [];
displayedColumns: string[] = ['id','name','description'];
dataSource = new MatTableDataSource<Organization>();
tableForm: FormGroup;
constructor(private _data: OrganizationdataService,private fb: FormBuilder) { }

ngOnInit() {
this.tableForm = this.fb.group({
id: new FormControl(null),
name: new FormControl(null),
description: new FormControl(null)

});
this.getDesig();
}
getDesig() {
this._data.getAllOrganizations().subscribe(
(data: Organization[]) => {
this.list = data;
this.dataSource = new MatTableDataSource<Organization>(this.list);
},
function (error) {
alert(error);
},
function () { }

);
}


items = [
{id: 1, name: 'Item 1'},
{id: 2, name: 'Item 2'},
{id: 3, name: 'Item 3'}
];

// tslint:disable-next-line: member-ordering
// @ViewChild(MatMenuTrigger)
@ViewChild(MatMenuTrigger, {static: false})
contextMenu: MatMenuTrigger;

contextMenuPosition = { x: '0px', y: '0px' };

onContextMenu(event: MouseEvent, item: Item) {
event.preventDefault();
this.contextMenuPosition.x = event.clientX + 'px';
this.contextMenuPosition.y = event.clientY + 'px';
this.contextMenu.menuData = { 'item': item };
this.contextMenu.openMenu();
}

openedit(item){
console.log(item.id);
this.tableForm.patchValue({
id: item.id,
name: item.name,
description: item.description

});
}
onFormUpdate(tableForm) {
console.log(tableForm);
this._data.editOrganization(tableForm).subscribe(
(data: Organization[]) => {

this.getDesig();
this.tableForm.reset();
}
);
}

// onUpdate(f1) {
// var req = {
// id: f1.value.id,
// name: f1.value.name,
// description: f1.value.description
// }
// this._data.addDesignations(req).subscribe((data: any) => {
// this._data.getAllDesignations().subscribe(
// ( data: Designation[]) => {
// this.list = data;
// }
// );
// alert('record edited');
// this.ngOnInit();
// });
// }
close(){
this.tableForm.reset();
}




  onContextMenuDelete(item: Organization) {
  console.log('id:', item.id)
  this._data.deleteOrganization(item.id).subscribe (
  (data: any) => {
  this._data.getAllOrganizations().subscribe (
  (data: Organization[]) => {
  this.list = data;
  }
  );

  confirm('Are you sure do you want to delete?');
  this.ngOnInit();
  }
  );

  }

}

export interface Item {
id: number;
name: string;
}
