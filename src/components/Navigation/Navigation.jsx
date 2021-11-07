import React from 'react';
import classes from './Navigation.module.scss';
import ToggleThemeButton from './ToggleThemeButton';
import { useSelector } from 'react-redux';

import {ReactComponent as SunToggleIcon} from '../../assets/icon-sun.svg';
import {ReactComponent as MoonToggleIcon} from '../../assets/icon-moon.svg';

const Navigation = () =>{

const state = useSelector( state => state.toggle.toggleStyle);

    return (
        <div className={classes.navigation}>
            <a href='/'>T O D O</a>
            <ToggleThemeButton icon={!state ? <SunToggleIcon/> : <MoonToggleIcon/>}></ToggleThemeButton>
        </div>
    )
}

export default Navigation;