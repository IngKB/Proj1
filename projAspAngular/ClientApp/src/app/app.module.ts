import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { FetchDataComponent } from './pages/fetch-data/fetch-data.component';
import { JugadorBasicComponentComponent } from './pages/Jugador-pages/jugador-basic-component/jugador-basic-component.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RegisterDialogComponent } from './pages/Jugador-pages/register-dialog/register-dialog.component';
import { HomeJugadorComponent } from './pages/Jugador-pages/home-jugador/home-jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    JugadorBasicComponentComponent,
    ToolbarComponent,
    RegisterDialogComponent,
    HomeJugadorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [RegisterDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
