import classes from "./styles.module.css"

const Categories = ({ list, currentCategory, setCategory }) => {
    return (
        <ul className={classes.wrapper}>
            {list?.map((item) => {
                return (
                    <li key={item.slug} className={classes.item}>
                        <input 
                            type="radio" 
                            className={classes.input + " visually-hidden"}
                            value={item.slug}
                            name='category'
                            id={item.slug}
                            onChange={() => setCategory(item.slug)}
                            checked={currentCategory === item.slug}
                        />
                        <label 
                            htmlFor={item.slug} 
                            className={classes.label}
                        >
                            {item.name}
                        </label>
                    </li>
                )
            })}
        </ul>
    );
}

export default Categories;
