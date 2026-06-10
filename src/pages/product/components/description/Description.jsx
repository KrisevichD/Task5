import classes from './styles.module.css';

import HeartSvg from '@/assets/icons/heart.svg';

const Description = ({ data }) => {
    return (
        <div className={classes.wrapper}>
            <table className={classes.table}>
                <tbody className={classes.tableBody}>
                    <tr className={classes.tr}>
                        <th className={classes.th}>Brand</th>
                        <td className={classes.td}>{data.brand}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <th className={classes.th}>Description</th>
                        <td className={classes.td}>{data.description}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <th className={classes.th}>Price</th>
                        <td className={classes.td}>{data.price} €</td>
                    </tr>
                    <tr className={classes.tr}>
                        <th className={classes.th}>Warranty</th>
                        <td className={classes.td}>{data.warrantyInformation}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <th className={classes.th}>Availability</th>
                        <td className={classes.td}>{data.availabilityStatus}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <th className={classes.th}>Stock</th>
                        <td className={classes.td}>{data.stock}</td>
                    </tr>
                    <tr className={classes.tr}>
                        <th className={classes.th}>Rating</th>
                        <td className={classes.td}>
                            <HeartSvg className={classes.heart} />
                            {data.rating}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Description;
