import ItensWrapper from "../UI/ItensWrapper";
import classes from './ListItem.module.scss';

const ListItem = (props)=> {

    return (
        <ItensWrapper className={classes.listitem}>
            <input className={classes.input} type='checkbox' id={props.id}/>
            <label className={classes.label} htmlFor={props.id}>{props.text}</label>
        </ItensWrapper>
    )
}

export default ListItem;