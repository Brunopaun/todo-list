import React from 'react';
import { useDispatch } from 'react-redux';

import classes from './ListFooter.module.scss';
import ListFooterItem from './ListFooterItem';
import { filterAction } from '../../store/index';
import { listAction } from '../../store/index';

const ListFooter = (props)=>{

    const dispatch = useDispatch();

    function onFilterSelected(text){

        switch(text){
            case 'Active':
                dispatch(filterAction.filter('Active'))  
            break;

            case 'Completed':
                dispatch(filterAction.filter('Completed'));
            break;
            
            case 'All':
                dispatch(filterAction.filter('All'));
            break
            default:
            break;    
        }    
}
 
    function removeAllHandler(event) {
        event.preventDefault();
        dispatch(listAction.removeall());
    }

    return (
        <div className={classes.footer}>
            <span>{props.data} items left</span>
                <ul className={classes.listfooter}>
                    <ListFooterItem text="All" filter={onFilterSelected} />
                    <ListFooterItem text="Active" filter={onFilterSelected}/>
                    <ListFooterItem text="Completed" filter={onFilterSelected}/>
                </ul> 
            <a href='/' onClick={removeAllHandler}>Clear Completed</a> 
        </div>
    )
}

export default ListFooter;