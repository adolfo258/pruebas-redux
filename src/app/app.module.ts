import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { NietoComponent } from './components/nieto/nieto.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './redux/counter.reducer';

@NgModule({
  declarations: [AppComponent, HijoComponent, NietoComponent],
  imports: [BrowserModule, StoreModule.forRoot({ counter: counterReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
