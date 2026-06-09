import Review from "../review/Review";
import classes from "./styles.module.css"

const Reviews = ({ list }) => {
    return (
        <div className={classes.wrapper}>
            {list?.map((review, index) => {
                return (
                    <Review
                        key={index}
                        data={review}
                    />
                )
            })}
        </div>
    );
}

export default Reviews;
