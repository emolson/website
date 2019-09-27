import { configureStore } from 'redux-starter-kit';
import { counter } from './slices'

const store = configureStore({
    reducer: counter.reducer
});