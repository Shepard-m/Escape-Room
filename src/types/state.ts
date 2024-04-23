import { store } from '../store';
import { rootReducer } from '../store/rootReducer';

export type TState = ReturnType<typeof rootReducer>;
export type TAppDispatch = typeof store.dispatch;

