import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './index/register/register.component';
import { MainComponent } from './profile/main/main.component';

const routes: Routes = [
	{ path: '', component: IndexComponent },
	{ path: 'registrar', component: RegisterComponent },
	{path: 'perfil', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
