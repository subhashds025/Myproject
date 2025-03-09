import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lazy loading the UserModule
const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
