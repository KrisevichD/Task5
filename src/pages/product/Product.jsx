import { useGetProductByIdQuery } from '@/api/productsApi';
import { useParams } from 'react-router-dom';
import classes from "./styles.module.css"
import ErrorMessage from '@/components/ui/error/ErrorMessage';
import Spinner from '@/components/ui/spinner/Spinner';
import Reviews from './components/reviews/Reviews';
import Description from './components/description/Description';
import Images from './components/images/Images';

const Product = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetProductByIdQuery(id);

    if (error) return <ErrorMessage message={'Failed to load data!'}/>
    if (isLoading) return <Spinner />

    console.log(data);
    
    return (
        <article className={classes.wrapper}>
            <h1>{data.title}</h1>
            <section className={classes.imageSection}>
                <Images list={data.images} alt={data.title}/>
            </section>
            <section className={classes.infoSection}>
                <h2>Description</h2>
                <Description data={data}/>
            </section>
            <section className={classes.reviewSection}>
                <h2>Reviews</h2>
                <Reviews list={data.reviews}/>
            </section>
        </article>
    );
}

export default Product;
