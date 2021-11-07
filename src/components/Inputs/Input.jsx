import React from 'react';
import ItensWrapper from '../UI/ItensWrapper';
import classes from './Input.module.scss';
import { useSelector } from 'react-redux';

const Input = ()=>{

const toggleState = useSelector(state => state.toggle.toggleStyle);


    return (
        <ItensWrapper className={!toggleState ? classes.inputmodule : classes.inputmodule_light}>
            <form action="" className={classes.form}>
                <div>
                    <button></button>
                </div>
                <input className={toggleState ? classes.light : ""}  type='text' id='input' placeholder='Insert your task here'></input>
                <label htmlFor="input"></label>
            </form>
        </ItensWrapper>
    )
}

export default Input