import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import ItensWrapper from '../UI/ItensWrapper';
import ListFooter from './ListFooter';
import classes from './List.module.scss';
import { useSelector } from 'react-redux';


const List = () =>{

const state = useSelector(state => state.list.list);
const filter = useSelector(state => state.filter.filter);


const [list, setList] = useState(state);

useEffect(()=>{
    switch(filter){
        case 'All':
            setList(state);
        break;
        case 'Active':
            setList(state.filter((element => element.checked === false)));
        break;
        case 'Completed':
            setList(state.filter(element => element.checked === true));
        break;
        default:
            setList(state);
        break;                    
    }
},[state,filter])

    return (
        <div className={classes.list} >
            <div >
                {list.map((item)=> {
                    return <ListItem key={item.id} id={item.id} text={item.text} />
                })}
            </div>
            <ItensWrapper>  
                <ListFooter data={state.filter((element => element.checked === false)).length}/>                    
            </ItensWrapper>
        </div>
    )

}



export default List;