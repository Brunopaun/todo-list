import React from 'react';
import { useSelector } from 'react-redux';

import classes from './ItensWrapper.module.scss';

const ItensWrapper = (props)=>{

const toggleState = useSelector(state => state.toggle.toggleStyle);

    return (
        <div className={`${!toggleState ? classes.itenswrapper : classes.itenswrapper_light} ${props.className}`}>{props.children}</div>
    )
}

export default ItensWrapper;