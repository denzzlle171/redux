import store from './store';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions';

store.subscribe(() => console.log(store.getState()));

// store.dispatch(addProduct({ id: 76, name: 'milk' }));

// store.dispatch(addProduct({ id: 74, name: 'bread' }));

// store.dispatch(decrement());


store.dispatch(setUser({ name: 'Tom' }));




store.dispatch(setLanguage("jp"));

store.dispatch(removeUser());




