const redux = require('redux');



//State inicial
const initialState = {
    users:[]
}

// Accions
const ADD_USERS = {
    type: 'ADD_USERS',
    name: 'Bladi'
}

const SHOW_USERS = {
    type: 'SHOW_USERS'
}


//Reducer
const reducerPrincipal = (state = initialState,action) => {

    if(action.type === 'ADD_USERS'){
        return {
            ...state,
            users:action.name
        }
    }
    if(action.type === 'SHOW_USERS'){
        return{
            ...state
        }
    } 
    return state;
}


const createStore = redux.createStore;
// 3 parametros: reducer (debe ser una función),state inicial, applymiddleware
const store = createStore(reducerPrincipal);
console.log(store.getState())

// Subscribe 
store.subscribe(() => {
    console.log(' ... something changed',store.getState());
})

// Dispatch: forma para cambiar el state. Recibe un objeto
store.dispatch(ADD_USERS);
store.dispatch(ADD_USERS);
store.dispatch(SHOW_USERS);

