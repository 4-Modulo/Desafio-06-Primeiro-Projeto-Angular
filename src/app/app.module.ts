import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './sistema/login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CarrosListarComponent } from './carros/carros-listar/carros-listar.component';
import { CarrosDetailsComponent } from './carros/carros-details/carros-details.component';
import { LivrosDetailsComponent } from './livros/livros-details/livros-details.component';
import { LivrosListarComponent } from './livros/livros-listar/livros-listar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PessoasListarComponent } from './pessoas/pessoas-listar/pessoas-listar.component';
import { PessoasdetailsComponent } from './pessoas/pessoas-details/pessoas-details.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    PessoasdetailsComponent,
    HeaderComponent,
    LoginComponent,
    AdminHomeComponent,
    CarrosListarComponent,
    CarrosDetailsComponent,
    LivrosDetailsComponent,
    LivrosListarComponent,
    PessoasListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
