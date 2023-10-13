import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './c/usuario/home/home.component';
import { LoginSignUpComponent } from './c/usuario/login-sign-up/login-sign-up.component';

const routes: Routes = [
  {path: 'home/page', component: HomeComponent},
  {path: 'login', component: LoginSignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
