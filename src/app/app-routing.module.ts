import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PrincipalComponent } from './shared/principal/principal.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  /*{ path: '', redirectTo: 'login', pathMatch: 'full' },*/
  {path: 'login', component: LoginComponent},
  { path: '**',  component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
