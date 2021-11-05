import React from 'react';
import classes from './Navigation.module.scss';
import ToggleThemeButton from './ToggleThemeButton';

import {ReactComponent as SunToggleIcon} from '../../assets/icon-sun.svg';
import {ReactComponent as MoonToggleIcon} from '../../assets/icon-sun.svg';

const Navigation = () =>{

    return (
        <div className={classes.navigation}>
            <a href='/'>T O D O</a>
            <ToggleThemeButton icon={<SunToggleIcon/>}></ToggleThemeButton>
        </div>
    )
}

export default Navigation;