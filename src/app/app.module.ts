import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustumerComponent } from 'app/custumer/custumer.component';
import { CustumersComponent } from 'app/custumer/custumers.component';
import { CustumersService } from 'app/custumer/custumers.service';


@NgModule({
  declarations: [
    AppComponent,
    CustumerComponent,
    CustumersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CustumersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
