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
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from 'ngx-pagination';
import { GrdFilterPipe } from './search-filter.pipe';
import { ContextMenuModule } from 'ngx-contextmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './about/about.component';
import { MatMenuModule } from '@angular/material/menu';

import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    OrganizationComponent,
    HomeComponent,
    MenuComponent,
    GrdFilterPipe,
    AboutComponent,

    ListComponent


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
    ReactiveFormsModule


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
