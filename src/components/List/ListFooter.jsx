import React from 'react';
import { Fragment } from 'react';
import classes from './ListFooter.module.scss';

const ListFooter = ()=>{

    return (
        <div className={classes.footer}>
            <span>5 itens left</span>
                <ul className={classes.listfooter}>
                    <li>
                        <a href='/'>All</a>
                    </li>
                    <li>
                        <a href='/'>Active</a>
                    </li>
                    <li>
                        <a href='/'>Completed</a>
                    </li>
                </ul> 
            <a href='/'>Clear Completed</a> 
        </div>
    )
}

export default ListFooter;