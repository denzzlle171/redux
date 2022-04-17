export const ADD_PRODUCT = 'ADD/PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE/PRODUCT';

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const deleteUser = (Id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: Id,
  };
};


// addProduct({ id: 76, name: 'milk' });
