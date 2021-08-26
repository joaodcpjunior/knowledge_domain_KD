import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { InicioComponent } from './inicio/inicio.component';
import { ContatoComponent } from './contato/contato.component';
=======
import { SobreComponent } from './sobre/sobre.component';
>>>>>>> 960e27b7c81128ec78dde6e21adeee4df41aa861

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    InicioComponent,
    ContatoComponent
=======
    SobreComponent
>>>>>>> 960e27b7c81128ec78dde6e21adeee4df41aa861
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
