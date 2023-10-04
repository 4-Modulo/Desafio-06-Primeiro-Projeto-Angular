import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaslistComponent } from './pessoas/pessoaslist/pessoaslist.component';

const routes: Routes = [
{path:"", component: PessoaslistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
