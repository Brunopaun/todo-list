import ItensWrapper from "../UI/ItensWrapper";
import classes from './ListItem.module.scss';
import { useSelector, useDispatch } from "react-redux";
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

 function onCheckItemHandler(){
     dispatch(listAction.check(props.id));
 }

 function onRemoveItemHandler(event){
     event.preventDefault();
     dispatch(listAction.remove(event.currentTarget.id));
 }

 function drag(event){
     event.dataTransfer.setData('item_id',event.target.id)
 }

 function dragOver(event){
    event.stopPropagation();
 }

    return (
        <div id={props.id} onMouseEnter={activeCrossIconHandler} onMouseLeave={desactiveCrossIconHandler} draggable={props.draggable} onDragStart={drag} onDragOver={dragOver}>
            <ItensWrapper className={!toggleState ? classes.listitem : classes.listitem_light }>
                    <input className={classes.input} type='checkbox' id={props.id} />
                    <label className={classes.label} htmlFor={props.id}  onClick={onCheckItemHandler}>{props.text}</label>
                    {crossIconActive && <a id={props.id} href="/" onClick={onRemoveItemHandler}> <CrossIcon/> </a>}
            </ItensWrapper>
        </div>
    )
}

export default ListItem;