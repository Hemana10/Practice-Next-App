import AddToCart from "../AddToCart";
import styles from './ProductCard.module.css';

const ProductCart = () => {
    return (
        <div className={styles.cardContainer}>
            <AddToCart />
        </div>
    );
}

export default ProductCart;