import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/app';

const store = createStore(reducer);
// const {dispatch} = store;

// const bindActionCreator = (creator, dispatch) => (...args) => { // () => { return () => {} }
//     dispatch(creator(...args));
// } Так выглядит встроеная в redux функция

// const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);



    // Удалили, потому что используем JSX
// document.querySelector('.btn_inc').addEventListener('click', inc); //Теперь обработчики событий ничего не знают об action reducer redux. они просто принимают какую-то функцию. Теперь View абсолютно независим от логики

// document.querySelector('.btn_dec').addEventListener('click', dec);

// document.querySelector('.btn_rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10);
//     rnd(value);
// });