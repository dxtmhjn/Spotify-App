import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicComponent } from '../components/music/music.component';
import { LoginComponent } from '../components/login/login.component';

const appRoutes: Routes = [
  {
    path: "music",
    component: MusicComponent
  },
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "**",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
