import { NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:"footer", component:FooterComponent},
  {path:"child", component:ChildComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
