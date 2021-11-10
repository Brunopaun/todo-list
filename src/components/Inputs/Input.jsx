import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ItensWrapper from '../UI/ItensWrapper';
import classes from './Input.module.scss';
import { listAction } from '../../store/index';

const Input = ()=>{


const toggleState = useSelector(state => state.toggle.toggleStyle);


const text = useRef();
const dispatch = useDispatch();

function addNewTaskHandler(event){
    event.preventDefault();

    const newTask = {id: Math.floor(Math.random()*(100000-1)+1), text: text.current.value, checked: false};

    if(newTask.text !== ""){
        dispatch(listAction.add(newTask));
    }
    
    text.current.value = "";
}

    return (
        <ItensWrapper className={!toggleState ? classes.inputmodule : classes.inputmodule_light}>
            <form action="" className={classes.form} onSubmit={addNewTaskHandler}>
                <div>
                    <button></button>
                </div>
                <input ref={text} className={toggleState ? classes.light : ""}  type='text' id='input' placeholder='Insert your task here'></input>
                <label htmlFor="input"></label>
            </form>
        </ItensWrapper>
    )
}

export default Input