import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from '@angular/common/http'

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DropComponent } from './pages/drop/drop.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';
import { AgencyComponent } from './pages/agency/agency.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DropComponent,
    UsersComponent,
    AgencyComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule, FormsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
