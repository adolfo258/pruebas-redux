import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from './redux/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter: number;
  constructor(private store: Store<{ counter: number }>) {
    store.select('counter').subscribe((res) => {
      this.counter = res;
    });
  }

  incrementar() {
    this.store.dispatch(increment());
  }

  decrementar() {
    this.store.dispatch(decrement());
  }
}
