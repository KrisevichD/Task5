import { useGetCategoriesQuery } from '@/app/api/productsApi';
import { useState } from 'react';
import Categories from './components/categories/Categories';
import Filters from './components/filters/Filters';
import Sort from './components/sort/Sort';
import Products from './components/products/Products';
import classes from "./styles.module.css"
import Spinner from '@/components/ui/spinner/Spinner';
import ErrorMessage from '@/components/ui/error-message/ErrorMessage';


const Catalog = () => {
    const { data, error, isLoading } = useGetCategoriesQuery();
    const [currentCategory, setCurrentCategory] = useState('beauty');
    const [sortType, setSortType] = useState('ascending');

    if (isLoading) return <Spinner />

    if (error) return <ErrorMessage message={'failed to load data'} />

    console.log(data);
    

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Catalog</h1>
            <div className={classes.inner}>
                <div className={classes.sidebar}>
                    <h2 className={classes.sidebarTitle}>Categories</h2>
                    {isLoading
                        ? <Spinner /> 
                        : <Categories 
                            list={data} 
                            currentCategory={currentCategory} 
                            setCategory={setCurrentCategory} 
                        />
                    }
                </div>
                <div className={classes.main}>
                    <Filters />
                    <Sort sortType={sortType} setSortType={setSortType}/>
                    <Products category={currentCategory} isAscending={sortType === 'ascending'}/>
                </div>
            </div>
        </div>
    );
}

export default Catalog;
