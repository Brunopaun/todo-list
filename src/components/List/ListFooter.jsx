import React from 'react';
import classes from './ListFooter.module.scss';
import ListFooterItem from './ListFooterItem';
import { useSelector } from 'react-redux';

const ListFooter = (props)=>{

const list = useSelector(state => state.list.list);

    function onFilterSelected(text){
        
        switch(text){
            case 'Active':
                props.data(list.filter(element => element.checked === false));  
            break;

            case 'Completed':
                props.data(list.filter(element => element.checked === true));
            break;
            
            default:
                return props.data(list);
        }
    }

    return (
        <div className={classes.footer}>
            <span>5 itens left</span>
                <ul className={classes.listfooter}>
                    <ListFooterItem text="All" filter={onFilterSelected}/>
                    <ListFooterItem text="Active" filter={onFilterSelected}/>
                    <ListFooterItem text="Completed" filter={onFilterSelected}/>
                </ul> 
            <a href='/'>Clear Completed</a> 
        </div>
    )
}

export default ListFooter;