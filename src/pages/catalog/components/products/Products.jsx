import ProductCard from '../../../../components/common/product-card/ProductCard';

import classes from './styles.module.css';

const Products = ({ products }) => {
    return (
        <div className={classes.wrapper}>
            {products?.map((item) => {
                return <ProductCard key={`products-list-${item.id}`} product={item} />;
            })}
        </div>
    );
};

export default Products;
