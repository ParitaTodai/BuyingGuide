import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';


const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'videos',component:VideoComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
