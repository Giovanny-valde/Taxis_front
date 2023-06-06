// import { DashBoardComponent } from './pages/administrador/dash-board/dash-board.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'login'
  // },
  {
    path: "",
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), 
    // canActivate: [AuthGuard]
  },
  // {
  //   path: 'login',
  //   component: PedidoPasajeroComponent,
  //   // canActivate: [GuestGuard]
  // },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
