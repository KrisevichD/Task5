import { useState } from "react";
import classes from "./styles.module.css"
import ArrowSvg from "@/assets/icons/arrow.svg"

const Images = ({ list, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextIndex = () => {
        setCurrentIndex((prev) => prev === list.length - 1 ? 0 : prev + 1);
    }

    const prevIndex = () => {
        setCurrentIndex((prev) => prev === 0 ? list.length - 1 : prev - 1);
    }

    const isCurrentClass = (index) => " " + (index === currentIndex && classes.current);

    return (
        <figure className={classes.wrapper}>
            <img src={list[currentIndex]} className={classes.image} alt={alt} />
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
            <div className={classes.buttons}>
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
            <figcaption className={"visually-hidden"}>{alt}</figcaption>
        </figure>
    );
}

export default Images;
