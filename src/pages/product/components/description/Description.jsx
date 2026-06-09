import classes from "./styles.module.css"
import HeartSvg from "@/assets/icons/heart.svg"

const Description = ({ data }) => {
    return (
        <div className={classes.wrapper}>
            <tbody className={classes.table}>
                <tr>
                    <th>Brand</th>
                    <td>{data.brand}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>{data.description}</td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td>{data.price} €</td>
                </tr>
                <tr>
                    <th>Warranty</th>
                    <td>{data.warrantyInformation}</td>
                </tr>
                <tr>
                    <th>Availability</th>
                    <td>{data.availabilityStatus}</td>
                </tr>
                <tr>
                    <th>Stock</th>
                    <td>{data.stock}</td>
                </tr>
                <tr>
                    <th>Rating</th>
                    <td><HeartSvg className={classes.heart}/>{data.rating}</td>
                </tr>
            </tbody>
        </div>
    );
}

export default Description;
