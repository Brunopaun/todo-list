import React, { useState } from 'react';
import ListItem from './ListItem';
import ItensWrapper from '../UI/ItensWrapper';
import ListFooter from './ListFooter';
import classes from './List.module.scss';
import { useSelector } from 'react-redux';

const List = () =>{

const initialState = useSelector(state => state.list.list);

const [list, setList] = useState(initialState); 

function onfilteredData(filteredData){
    console.log(filteredData);
    setList(filteredData);
}

    return (
        <div className={classes.list}> 
            <div>
                {list.map((item)=>{
                    return <ListItem id={item.id} text={item.text}/>
                })}
            </div>
            <ItensWrapper>  
                <ListFooter data={onfilteredData}/>                    
            </ItensWrapper>
        </div>
    )
}

export default List;