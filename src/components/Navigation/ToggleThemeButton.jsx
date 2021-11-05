import React from 'react';
import classes from './ToggleThemeButton.module.scss';

const ToggleThemeButton = (props)=>{

    return(
        <div className={classes.toggle}>
            <a href='/' className={classes['icon-button']} > 
                {props.icon}
            </a>
        </div>
    );
}

export default ToggleThemeButton;