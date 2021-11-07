import ItensWrapper from "../UI/ItensWrapper";
import classes from './ListItem.module.scss';
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { listAction } from "../../store";


import { ReactComponent as CrossIcon } from "../../assets/icon-cross.svg"; 

const ListItem = (props)=> {

const toggleState = useSelector(state => state.toggle.toggleStyle);
const dispatch = useDispatch();

const [crossIconActive, setCrossIconActive] = useState(false);

 function activeCrossIconHandler() {
    setCrossIconActive(true);
 };

 function desactiveCrossIconHandler(){
     setCrossIconActive(false);
 }

 function onCheckItemHandler(event){
     event.preventDefault();
     dispatch(listAction.check(props.id));
 }


    return (
        <ItensWrapper className={!toggleState ? classes.listitem : classes.listitem_light }>
            <input className={classes.input} type='checkbox' id={props.id} on/>
            <label className={classes.label} htmlFor={props.id} onMouseEnter={activeCrossIconHandler} onMouseLeave={desactiveCrossIconHandler} onClick={onCheckItemHandler}> {props.text}
                {crossIconActive && <a href="/"><CrossIcon/></a>}            
            </label>
        </ItensWrapper>
    )
}

export default ListItem;