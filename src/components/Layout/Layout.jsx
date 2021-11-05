import React from 'react';
import ImgBackground from '../../assets/bg-desktop-dark.jpg';
import classes from './Layout.module.scss';

const Layout = (props)=>{

    return (
        <div className={classes.layout}>
            <div >
                <img className={classes.img} src={ImgBackground} alt="Background" />
            </div>
            <main>{props.children}</main>
        </div>
    );
}

export default Layout;
