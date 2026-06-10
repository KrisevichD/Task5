import classes from './styles.module.css';

const Categories = ({ categories, currentCategory, setCategory }) => {
    return (
        <div className={classes.wrapper}>
            {categories?.map((item) => {
                return (
                    <div key={`category-${item.slug}`} className={classes.item}>
                        <input
                            type="radio"
                            className={classes.input + ' visually-hidden'}
                            value={item.slug}
                            name="category"
                            id={item.slug}
                            onChange={() => setCategory(item.slug)}
                            checked={currentCategory === item.slug}
                        />
                        <label htmlFor={item.slug} className={classes.label}>
                            {item.name}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

export default Categories;
