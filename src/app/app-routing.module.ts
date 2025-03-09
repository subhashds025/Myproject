import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lazy loading the UserModule
const routes: Routes = [{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
