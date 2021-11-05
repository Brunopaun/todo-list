import React from 'react';
import ListItem from './ListItem';
import ItensWrapper from '../UI/ItensWrapper';
import ListFooter from './ListFooter';
import classes from './List.module.scss';

const List = () =>{

    return (
        <div className={classes.list}> 
            <div>
                <ListItem text={'Finish this project in a week'}></ListItem>
            </div>
            <ItensWrapper>  
                <ListFooter/>                    
            </ItensWrapper>
        </div>
    )
}

export default List;