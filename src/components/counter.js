import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div>
            <div className="counter-block">{counter}</div>
            <div className="btns-block">
                <button
                    onClick={inc}
                    className="btn btn_inc"></button>
                <button
                    onClick={dec}
                    className="btn btn_dec"></button>
                <button
                    onClick={rnd}
                    className="btn btn_rnd">
                        <img src="./img/shuffle.svg" alt="random"></img>
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

    // Удалили, поскольку если передать обьект вторым аргументов в функцию connect, то она сама сделает bindActionCreators с теми элементами, что есть в передаваемом обьекте
// const mapDispatchToProps = (dispatch) => {
//     // const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
//     return bindActionCreators(actions, dispatch);

//         // Поскольку bindActionCreators возвращает точно такой же обьект, поэтому удалили
//     // return {
//     //     inc, // Тоже самое, что inc: inc
//     //     dec,
//     //     rnd
//     // }
// }

export default connect(mapStateToProps, actions)(Counter);