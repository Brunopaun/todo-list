import ItensWrapper from "../UI/ItensWrapper";
import classes from './ListItem.module.scss';

const ListItem = (props)=> {

    return (
        <ItensWrapper className={classes.listitem}>
            {props.text}
            <label htmlFor={props.id} className={classes.checkbox}>
                <input className={classes.input} type='checkbox' id={props.id}/>
                <span className={classes.checkmark}></span>
            </label>
        </ItensWrapper>
    )
}

export default ListItem;