import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { 
    path: 'admin', component: AdminComponent, 

    children: [
        { path: 'bimestre', loadChildren: () => import('./modules/cadastros/bimestre/bimestre.module').then(m => m.BimestreModule)},
        { path: 'boletim', loadChildren: () => import('./modules/cadastros/boletim/boletim.module').then(m => m.BoletimModule)},
        { path: 'notas', loadChildren: () => import('./modules/cadastros/notas/notas.module').then(m => m.NotasModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
