import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Organization } from "../Organization";
import { OrganizationdataService } from "../organizationdata.service";
// import { ContextMenuComponent } from "ngx-contextmenu";

import { ToastrService } from "ngx-toastr";


// import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

// import { ConfirmationService, MessageService, Message } from "primeng/api";

@Component({
  selector: "app-organization",
  templateUrl: "./organization.component.html",
  styleUrls: ["./organization.component.css"]
})
export class OrganizationComponent implements OnInit {
  name: string;
  description: string;
  isactive: boolean;
  selectedOrganizationOption: string;
  id: number;
  arr: Organization[] = [];
  config: any;
  collection = [];
  searchstr: string;
  closeResult: string;

  // @ViewChild(ContextMenuComponent, { static: true })
  // public basicMenu: ContextMenuComponent;


  showMessage(message: any) {
    console.log(message);
  }

  constructor(
    private modalService: NgbModal,
    private _data: OrganizationdataService,
    private toastr: ToastrService

  ) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 2,
      totalItems: this.collection.length
    };
  }



  ngOnInit() {
    this.getOrganization();
  }

getOrganization() {
    this._data.getAllOrganizations().subscribe((data: Organization[]) => {
      this.arr = data;
     });
  }

  onFormSubmit(f) {
    if (this.selectedOrganizationOption == "Add") {
      console.log(this.id);
      this._data.addOrganization(f.value).subscribe((data: any) => {
        // console.log(f.value);
        // alert("Successfully added!!!");
        this.toastr.success('Successfully..', 'added new data!');

        this.getOrganization();
      });
    } else {
      console.log(f.value);
      console.log(f.value.Name);
      console.log(f.value.Isactive);
      var req = {
        id: this.id,
        description: f.value.Description,
        name: f.value.Name,
        isactive: f.value.Isactive
      };
      console.log(req);

      this._data.editOrganization(req).subscribe((data: any) => {
        // alert("updated");
        this.toastr.success('Successfully..', 'Updated!!!');
        this.getOrganization();
      });
    }

    this.modalService.dismissAll();
  }
  onOrgDelete(id: number) {
    console.log(this.id);
    this._data.deleteOrganization(id).subscribe((data: any) => {
      // alert('successfully deleted');

        this.toastr.success('Successfully..', 'Deleted!');

      this.ngOnInit();
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  openAdd(content, passedTitle) {
    this.selectedOrganizationOption = passedTitle;
    this.name = "";
    this.description = "";
    this.isactive = null;
    var req = {
      backdrop: false
    };
    this.modalService.open(content, req);
  }

  openEdit(content, passedTitle, i, arr) {
    this.selectedOrganizationOption = passedTitle;
    console.log(arr.id);
    this.id = arr.id;
    this.name = arr.name;
    this.description = arr.description;
    this.isactive = arr.isactive;

    // this.updatedItem = i;

    this.modalService.open(content);
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.arr, event.previousIndex, event.currentIndex);
  // }





  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
