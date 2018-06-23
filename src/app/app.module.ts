import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { DirectComponent } from './direct/direct.component';
import { EventComponent } from './event/event.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ 
    AppComponent, HomeComponent, ErrorComponent, DirectComponent, EventComponent, HeaderComponent, FooterComponent
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // new modules added here
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path: 'error',component: ErrorComponent},
      {path: 'direct',component: DirectComponent},
      {path: 'event',component: EventComponent},
      {path: '**', redirectTo: 'error'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }