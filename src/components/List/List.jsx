import React, { useState } from 'react';
import ListItem from './ListItem';
import ItensWrapper from '../UI/ItensWrapper';
import ListFooter from './ListFooter';
import classes from './List.module.scss';
import { useSelector } from 'react-redux';

const List = () =>{

const state = useSelector(state => state.list.list);

const [list, setList] = useState(state);

function onFilteredData(filteredData) {
    setList(filteredData);
}

function drop(event){
    event.preventDefault();
    const data = event.dataTransfer.getData('item_id');
    const item = document.getElementById(data);
    console.log(data);
    event.target.appendChild(item);
}

function allowDrop(event) {
    event.preventDefault();
}

    return (
        <div className={classes.list}>
            <div className={classes.droplist} onDrop={drop} onDragOver={allowDrop}>
                {list.map((item)=> {
                    return <ListItem key={item.id} id={item.id} text={item.text} draggable={'true'}/>
                })}
            </div>
            <ItensWrapper>  
                <ListFooter data={onFilteredData}/>                    
            </ItensWrapper>
        </div>
    )

}



export default List;