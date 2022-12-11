import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavbarprinComponent } from './navbarprin/navbarprin.component';
import { NavbarlogedComponent } from './navbarloged/navbarloged.component';
import { RegistroUserComponent } from './registro-user/registro-user.component';



@NgModule({
  declarations: [
    AdminPanelComponent,
    PageNotFoundComponent,
    PrincipalComponent,
    NavbarprinComponent,
    NavbarlogedComponent,
    RegistroUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    AdminPanelComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
