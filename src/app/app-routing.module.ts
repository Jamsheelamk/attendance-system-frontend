import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
                         {path:'students',component:HomeComponent},
                         {path:'add',component:AddstudentComponent}
                        

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
