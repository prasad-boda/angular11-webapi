import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Errors/not-found/not-found.component';
import { TestErrorsComponent } from './Errors/test-errors/test-errors.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MembersDetailsComponent } from './members/members-details/members-details.component';
import { MembersListsComponent } from './members/members-lists/members-lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:"",
    runGuardsAndResolvers:"always",
    canActivate:[AuthGuard],
    children:[
      {path:'members',component:MembersListsComponent},
      {path:'members/:id',component:MembersDetailsComponent},
      {path:'lists',component:ListsComponent},
      {path:'messages',component:MessagesComponent},
    ]
  },
  {path:'not-found',component:NotFoundComponent},

  {path:'Errors',component:TestErrorsComponent},
  {path:'**',component:HomeComponent,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
