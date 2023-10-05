import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaslistComponent } from './pessoas/pessoaslist/pessoaslist.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './carros/carrosdetails/carrosdetails.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { LivrosdatailsComponent } from './livros/livrosdatails/livrosdatails.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaslistComponent,
    HeaderComponent,
    FooterComponent,
    CarroslistComponent,
    CarrosdetailsComponent,
    LivroslistComponent,
    LivrosdatailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
