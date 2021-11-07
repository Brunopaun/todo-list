import ItensWrapper from "../UI/ItensWrapper";
import classes from './ListItem.module.scss';
import { useSelector } from "react-redux";
import { useState } from "react";

import { ReactComponent as CrossIcon } from "../../assets/icon-cross.svg"; 

const ListItem = (props)=> {

const toggleState = useSelector(state => state.toggle.toggleStyle);

const [crossIconActive, setCrossIconActive] = useState(false);

 function activeCrossIconHandler() {
    setCrossIconActive(true);
 };

 function desactiveCrossIconHandler(){
     setCrossIconActive(false);
 }

    return (
        <ItensWrapper className={!toggleState ? classes.listitem : classes.listitem_light }>
            <input className={classes.input} type='checkbox' id={props.id}/>
            <label className={classes.label} htmlFor={props.id} onmou onMouseEnter={activeCrossIconHandler} onMouseLeave={desactiveCrossIconHandler}> {props.text}
                {crossIconActive && <a href="/"><CrossIcon/></a>}            
            </label>
        </ItensWrapper>
    )
}

export default ListItem;