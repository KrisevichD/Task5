import { useParams } from 'react-router-dom';

import Description from './components/description/Description';
import Images from './components/images/Images';
import Reviews from './components/reviews/Reviews';
import classes from './styles.module.css';

import { useGetProductByIdQuery } from '@/app/api/productsApi';
import ErrorMessage from '@/components/ui/error-message/ErrorMessage';
import Spinner from '@/components/ui/spinner/Spinner';
import useProductCard from '@/hooks/useProductCard';

const Product = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetProductByIdQuery(id);
    const { isInCart, handleCartToggle } = useProductCard(data);

    if (error) return <ErrorMessage message={'Failed to load data!'} />;

    if (isLoading) return <Spinner />;

    return (
        <article className={classes.wrapper}>
            <h1>{data.title}</h1>
            <section className={classes.imageSection}>
                <Images list={data.images} alt={data.title} />
            </section>
            <section className={classes.infoSection}>
                <h2>Description</h2>
                <Description data={data} />
            </section>
            <button className={classes.cartButton} onClick={() => handleCartToggle(data)}>
                {isInCart ? 'Remove from cart' : 'Add to cart'}
            </button>
            <section className={classes.reviewSection}>
                <h2>Reviews</h2>
                <Reviews list={data.reviews} />
            </section>
        </article>
    );
};

export default Product;
