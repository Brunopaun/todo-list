import React from 'react';
import classes from './ListFooterItem.module.scss';
import { useSelector } from 'react-redux';

const ListFooterItem = (props) => {

const toggleState = useSelector(state => state.toggle.toggleStyle);

    return (
        <li>
            <a className={!toggleState ? classes.footeritem : classes.light} href='/'>{props.text}</a>
        </li>
    )
}

export default ListFooterItem;