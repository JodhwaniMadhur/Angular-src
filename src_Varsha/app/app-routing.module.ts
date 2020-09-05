import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'feedback',component:FeedbackComponent },
  
  {path:'register',component:RegisterComponent },
  {path:'', redirectTo:'AppComponent',pathMatch:"full" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
