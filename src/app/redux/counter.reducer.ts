import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export const InitialState = 0;

const _counterReducer = createReducer(
  InitialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export const counterReducer = (state, action) => {
  return _counterReducer(state, action);
};
