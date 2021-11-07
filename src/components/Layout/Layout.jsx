import React from 'react';
import ImgBackground from '../../assets/bg-desktop-dark.jpg';
import ImgLigthBackground from '../../assets/bg-desktop-light.jpg';
import classes from './Layout.module.scss';

import { useSelector } from 'react-redux';

const Layout = (props)=>{

const toggleState = useSelector(state => state.toggle.toggleStyle) 

    return (
        <div className={!toggleState ? classes.layout : classes.layout_light }>
            <div >
                <img className={classes.img} src={!toggleState ? ImgBackground : ImgLigthBackground} alt="Background" />
            </div>
            <main>{props.children}</main>
        </div>
    );
}

export default Layout;
