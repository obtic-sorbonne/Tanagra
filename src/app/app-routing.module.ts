import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  // {path:'login', component:LoginComponent},
  // {path:'map', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'map', component:HomeComponent},
  {path:'home', component:AboutComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  route = []
  constructor(){

  }
 }
