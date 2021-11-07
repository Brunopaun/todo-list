import React from 'react';
import classes from './ListFooter.module.scss';
import { useSelector } from 'react-redux';
import ListFooterItem from './ListFooterItem';

const ListFooter = ()=>{

const toggleState = useSelector(state => state.toggle.toggleStyle);

    return (
        <div className={classes.footer}>
            <span>5 itens left</span>
                <ul className={classes.listfooter}>
                    <ListFooterItem text="All"/>
                    <ListFooterItem text="Active"/>
                    <ListFooterItem text="Completed"/>
                </ul> 
            <a href='/'>Clear Completed</a> 
        </div>
    )
}

export default ListFooter;