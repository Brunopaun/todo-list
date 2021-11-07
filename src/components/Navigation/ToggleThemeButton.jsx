import React from 'react';
import classes from './ToggleThemeButton.module.scss';
import { useDispatch } from 'react-redux';
import { toggleAction } from '../../store';


const ToggleThemeButton = (props)=>{

const dispatch = useDispatch();

function toggleButtonHandler(event){
    event.preventDefault();
    dispatch(toggleAction.toggle());
}

    return(
        <div className={classes.toggle}>
            <a href='/' className={classes['icon-button']} onClick={toggleButtonHandler}> 
                {props.icon}
            </a>
        </div>
    );
}

export default ToggleThemeButton;