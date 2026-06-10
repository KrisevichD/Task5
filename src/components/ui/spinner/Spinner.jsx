import classes from './styles.module.css';

const Spinner = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.loader}></div>
        </div>
    );
};

export default Spinner;
