import { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './styles.module.css';

import { useSearchProductsQuery } from '@/app/api/productsApi';
import ArrowSvg from '@/assets/icons/arrow.svg';
import SearchSvg from '@/assets/icons/search.svg';
import Spinner from '@/components/ui/spinner/Spinner';
import useDebounce from '@/hooks/useDebounce';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isResultsVisible, setIsResultsVisible] = useState(false);
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    const { data, isFetching } = useSearchProductsQuery(debouncedSearchQuery, {
        skip: debouncedSearchQuery.trim() === '',
    });

    const handleInput = (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value.trim() === '') {
            setIsResultsVisible(false);
        } else {
            setIsResultsVisible(true);
        }
    };

    const handleFocus = (e) => {
        if (e.currentTarget.contains(e.relatedTarget)) {
            return;
        }
        setIsResultsVisible(false);
    };

    return (
        <div className={classes.wrapper} onBlur={handleFocus}>
            <input
                className={classes.searchInput}
                type="text"
                value={searchQuery}
                onChange={handleInput}
                aria-label="search"
                onFocus={() => setIsResultsVisible(true)}
            />
            <SearchSvg className={classes.searchIcon} />
            <div className={classes.results}>
                {isResultsVisible && isFetching && (
                    <div className={classes.spinner}>
                        <Spinner />
                    </div>
                )}
                {isResultsVisible &&
                    data?.products.map((item) => {
                        return (
                            <Link
                                key={`search-result-${item.id}`}
                                to={`/catalog/${item.id}`}
                                className={classes.result}
                                onClick={() => setIsResultsVisible(false)}
                            >
                                <img
                                    className={classes.resultImage}
                                    src={item.thumbnail}
                                    width={20}
                                    height={20}
                                    alt={item.title}
                                />
                                {item.title}
                                <ArrowSvg className={classes.resultArrow} />
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
};

export default Search;
