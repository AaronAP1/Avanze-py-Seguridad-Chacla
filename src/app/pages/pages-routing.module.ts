import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminPanelComponent } from '../shared/admin-panel/admin-panel.component';
import { ListarCategoriasComponent } from './administrar-categorias/listar-categorias/listar-categorias.component';
import { ListarProductosComponent } from './administrar-productos/listar-productos/listar-productos.component';
import { LoginComponent } from '../auth/login/login.component';
import { AdminPanelGuard } from '../guards/admin-panel.guard';
import { LoginGuard } from '../guards/login.guard';
import { navbardosGuard } from '../guards/navbar-dos.guard';
import { NavbarlogedComponent } from '../shared/navbarloged/navbarloged.component';

const routes: Routes = [
    { path: 'login', canActivate: [LoginGuard], component: LoginComponent },
    {
        path: 'admin-panel',
        canActivate: [AdminPanelGuard],
        component: AdminPanelComponent,
        
        children: [
            { path: 'administrar-categorias', component: ListarCategoriasComponent,  },
            { path: 'administrar-productos', component: ListarProductosComponent, },            
        ],
    },
    {path: 'navbar-dos', canActivate: [navbardosGuard], component: NavbarlogedComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
