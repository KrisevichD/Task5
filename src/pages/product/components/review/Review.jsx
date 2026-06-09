import classes from "./styles.module.css"
import ProfileSvg from "@/assets/icons/profile.svg"
import HeartSvg from "@/assets/icons/heart.svg"

const Review = ({ data }) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    const dateString = new Date(data.date).toLocaleDateString('en-EN', options);

    return (
        <article className={classes.wrapper}>
            <header className={classes.header}>
                <ProfileSvg className={classes.profile}/>
                <h3 className={classes.name}>{data.reviewerName}</h3>
                <p className={classes.email}>{data.reviewerEmail}</p>
                <p className={classes.rating}><HeartSvg className={classes.heart}/>{data.rating}</p>
                <p className={classes.date} dateTime={dateString}>{dateString}</p>
            </header>
            <p className={classes.comment}>{data.comment}</p>
        </article>
    );
}

export default Review;
