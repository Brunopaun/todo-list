import React from 'react';
import ItensWrapper from '../UI/ItensWrapper';
import classes from './Input.module.scss';

const Input = ()=>{

    return (
        <ItensWrapper className={classes.inputmodule}>
            <form action="" className={classes.form}>
                <div>
                    <button></button>
                </div>
                <input type='text' id='input' placeholder='Insert your task here'></input>
                <label htmlFor="input"></label>
            </form>
        </ItensWrapper>
    )
}

export default Input