import { useState } from "react";
import classes from "./styles.module.css"
import ArrowSvg from "@/assets/icons/arrow.svg"
import Spinner from "@/components/ui/spinner/Spinner";

const Images = ({ list, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const nextIndex = () => {
        setCurrentIndex((prev) => prev === list.length - 1 ? 0 : prev + 1);
        setIsLoaded(false);
    }

    const prevIndex = () => {
        setCurrentIndex((prev) => prev === 0 ? list.length - 1 : prev - 1);
        setIsLoaded(false);
    }

    const isMoreThanOne = list.length > 1;
    const isCurrentClass = (index) => " " + (index === currentIndex && classes.current);

    return (
        <figure className={classes.wrapper}>
            {!isLoaded && 
                <div className={classes.spinner}>
                    <Spinner />
                </div>
            }
            <img 
                src={list[currentIndex]} 
                className={classes.image} 
                alt={alt} 
                onLoad={() => setIsLoaded(true)}
            />
            {isMoreThanOne &&
                <>
                    <button
                        className={classes.buttonPrev}
                        onClick={() => prevIndex()}
                        aria-label="previous image"
                    >
                        <ArrowSvg className={classes.arrowLeft} />
                    </button>
                    <button
                        className={classes.buttonNext}
                        onClick={() => nextIndex()}
                        aria-label="next image"
                    >
                        <ArrowSvg className={classes.arrowRight} />
                    </button>
                    <div className={classes.imageButtons}>
                        {list?.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    className={classes.imageButton + isCurrentClass(index)}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    <img src={item} alt={alt} />
                                </button>
                            )
                        })}
                    </div>
                </>
            }
            <figcaption className={"visually-hidden"}>{alt}</figcaption>
        </figure>
    );
}

export default Images;
