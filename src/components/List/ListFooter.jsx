import React from 'react';
import { useSelector } from 'react-redux';

import classes from './ListFooter.module.scss';
import ListFooterItem from './ListFooterItem';

const ListFooter = (props)=>{
    

    const list = useSelector(state => state.list.list);


    function onFilterSelected(text){

        switch(text){
            case 'Active':
                props.data(list.filter(element => element.checked === "false"));  
            break;

            case 'Completed':
                props.data(list.filter(element => element.checked === "true"));
            break;
            
            case 'All':
                props.data(list);
            break
            default:
            break;    
        }    
}
 
    function removeAllHandler(event) {
        event.preventDefault();
    }

    return (
        <div className={classes.footer}>
            <span>{list.filter(element=>element.checked === "false").length}</span>
                <ul className={classes.listfooter}>
                    <ListFooterItem text="All" filter={onFilterSelected}/>
                    <ListFooterItem text="Active" filter={onFilterSelected}/>
                    <ListFooterItem text="Completed" filter={onFilterSelected}/>
                </ul> 
            <a href='/' onClick={removeAllHandler}>Clear Completed</a> 
        </div>
    )
}

export default ListFooter;