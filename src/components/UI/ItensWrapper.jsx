import classes from './ItensWrapper.module.scss';

const ItensWrapper = (props)=>{

    return (
        <div className={`${classes.itenswrapper} ${props.className}`}>{props.children}</div>
    )
}

export default ItensWrapper;