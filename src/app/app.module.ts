import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OrganizationComponent } from './organization/organization.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { GrdFilterPipe } from './search-filter.pipe';
import { ContextMenuModule } from 'ngx-contextmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './about/about.component';
import { MatMenuModule } from '@angular/material/menu';

import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';

import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatCheckboxModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { CheckboxtableComponent } from './checkboxtable/checkboxtable.component';
import { StaticmultipledeleteComponent } from './staticmultipledelete/staticmultipledelete.component';
//  import { TreetableComponent } from './treetable/treetable.component';
// import {TreeTableModule} from 'primeng/treetable';
// import { HttpModule } from '@angular/http';
// import {ContextMenuModule} from 'primeng/contextmenu';
// import { ToastModule } from 'primeng/toast';
// import { MessageService } from 'primeng/api';
import { AmexioWidgetModule } from 'amexio-ng-extensions'; // Import Amexio library





@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    OrganizationComponent,
    HomeComponent,
    MenuComponent,
    GrdFilterPipe,
    AboutComponent,

    ListComponent,

    LoginComponent,

    CheckboxtableComponent,

    StaticmultipledeleteComponent,

    // TreetableComponent



  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    ContextMenuModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatMenuModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,
    FormsModule,
    MatCheckboxModule,AmexioWidgetModule
    // TreeTableModule,
    // HttpModule,
    // ContextMenuModule,
    //  ToastModule



  ],

  providers: [ ],     //MessageService
  bootstrap: [AppComponent]
})
export class AppModule { }
