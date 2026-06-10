import Categories from './components/categories/Categories';
import Products from './components/products/Products';
import Sort from './components/sort/Sort';
import classes from './styles.module.css';

import ErrorMessage from '@/components/ui/error-message/ErrorMessage';
import Spinner from '@/components/ui/spinner/Spinner';
import useProductList from '@/hooks/useProductList';
import useSortedProducts from '@/hooks/useSortedProducts';

const Catalog = () => {
    const {
        categories,
        products,
        selectedCategory,
        setSelectedCategory,
        isError,
        isCategoriesLoading,
        isProductsLoading,
    } = useProductList();
    const { sortedProducts, sortType, setSortType } = useSortedProducts(products);

    if (isError) return <ErrorMessage message="Unable to load data!" />;

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Catalog</h1>
            <div className={classes.inner}>
                <div className={classes.sidebar}>
                    <h2 className={classes.sidebarTitle}>Categories</h2>
                    {isCategoriesLoading ? (
                        <Spinner />
                    ) : (
                        <Categories
                            categories={categories}
                            currentCategory={selectedCategory}
                            setCategory={setSelectedCategory}
                        />
                    )}
                </div>
                <div className={classes.main}>
                    <Sort sortType={sortType} setSortType={setSortType} />
                    {isProductsLoading ? <Spinner /> : <Products products={sortedProducts} />}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
