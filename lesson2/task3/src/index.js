import store from './store';
import { addUser, deleteUser } from './users.actions';

console.log(store.getState());

store.dispatch(addUser({ id: 76, name: 'Sarah' }));//
store.dispatch(addUser({ id: 74, name: 'Ray' }));//
store.dispatch(deleteUser(76));//

console.log(store.getState());

