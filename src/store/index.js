import {configureStore} from '@reduxjs/toolkit';
import overlay from '../components/Overlay/overlaySlice';
import menu from '../components/Promo/Menu/menuSlise';
import modalForm from '../components/ModalForm/modalFormSlice';
import worry from '../components/Worry/worrySlice';
import politic from '../components/Politic/politicSlice';


const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: {overlay, menu, modalForm,worry,politic},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;