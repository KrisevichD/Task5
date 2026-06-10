import classes from './styles.module.css';

const ErrorMessage = ({ message = 'Something went wrong' }) => {
    const handleReload = () => window.location.reload();
    return (
        <div className={classes.wrapper}>
            <p className={classes.message}>{message}</p>
            <button className={classes.reloadButton} onClick={handleReload}>
                Reload page
            </button>
        </div>
    );
};

export default ErrorMessage;
