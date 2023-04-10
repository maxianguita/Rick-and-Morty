import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "./reducer"
import ThunkMiddleware from "redux-thunk";



const composeEnhancer = window.__REDUX_DEVTOLLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar con la extension del navegador: REDUX DEVTOOLS

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware)) // ESTA LINEA ES PARA PODES HACER PETICIONES AL SERVER
);

export default store;
