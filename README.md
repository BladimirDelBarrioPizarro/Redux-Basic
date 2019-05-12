REDUX

1. Solo existe un store con todo el state de la aplicación.
2. Los componentes/vistas no modifican el state directamente.
3. El state se modifica por medio de funciones.

STORE : Contiene el state 1 por aplicación.
DISPATCH : Ejecuta una acción que actualizará el state.
ACTION : Objetos js, tienen un tipo y payload (datos).
SUBSCRIBE : Similar a un event listener para el state.
REDUCERS : Funciones, saben que hacer con las acciones y el payload.

Start!

1. Crear carpeta.
   npm install

2. Instalamos REDUX
   npm install --save-dev redux

3. Creamos un archivo y requerimos redux (Node.js)
   const redux = require('redux');

4. Creamos un store. El store requiere 3 parámetros:  reducer,state inicial, applymiddleware

   const createStore = redux.createStore;
   const store = createStore(); 

5. Creamos un reducer.   

  const reducerPrincipal = (state,action) => {
    return state;
  } 

6. Creamos un state

  const initialState = {
    users:[]
}

7. El store recibe el reducer 

   const store = createStore(reducerPrincipal);

8. Para ir conectandolo incorporamos el state inicial al parámetro de entrada la función del reducer principal.   

   const reducerPrincipal = (state = initialState,action) => {
    return state;
}

9. Creamos una acción

   const ADD_USERS = {
    type: 'ADD_USERS',
    name: 'Bladi'
}

10. Creamos un dispatch y la añadimos

store.dispatch(ADD_USERS);

11. Introducimos la lógica del type al reducer. Debe retornar el state y modificar el state.

const reducerPrincipal = (state = initialState,action) => {

    if(action.type === 'ADD_USERS'){
        return {
            ...state,
            users:action.name
        }
    } 
    return state;
}


12. Creamos un Subscribe o Subscription. Es una función que se ejecuta cada vez que se ejecuta el dispatch.
    Lo usaremos para verificar los cambios en el state.

    store.subscribe(() => {
    console.log(' ... something changed',store.getState())
})
