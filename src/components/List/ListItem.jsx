import ItensWrapper from "../UI/ItensWrapper";
import classes from './ListItem.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { listAction } from "../../store";

import { ReactComponent as CrossIcon } from "../../assets/icon-cross.svg"; 
import { useDrag } from "react-dnd";

const ListItem = (props)=> {

    const [{isDragging}, drag] = useDrag({
        type: "BOX",
        item:{
            id: props.id,
        },
        collect: monitor  => ({
            isDragging: monitor.isDragging(),
        })
    });

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

    return (
        <div ref={drag} style={{opacity : isDragging ? 0.5 : 1}} onMouseOver={activeCrossIconHandler} onMouseLeave={desactiveCrossIconHandler} >
            <ItensWrapper className={!toggleState ? classes.listitem : classes.listitem_light }>
                    <input className={classes.input} type='checkbox' id={props.id} />
                    <label className={classes.label} htmlFor={props.id}  onClick={onCheckItemHandler}>{props.text}</label>
                    {crossIconActive && <a id={props.id} href="/" onClick={onRemoveItemHandler}> <CrossIcon/> </a>}
            </ItensWrapper>
        </div>
    )
}

export default ListItem;