import WishList from "../../icons/WishList";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, handleWishlist }) => {
  const userSignedIn = false;

  return (
    <div
      key={product.id}
      className={`${styles.productCard} ${
        product.outOfStock ? styles.outOfStock : ""
      }`}
    >
      <div className={styles.productImageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
        />
        {product.outOfStock && (
          <div className={styles.outOfStockOverlay}>Out of Stock</div>
        )}
      </div>
      <div>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.productDetails}>
          <p className={styles.productPrice}>
            {userSignedIn ? (
              product.price.toFixed(2)
            ) : (
              <span>"Sign in or Create an account to see pricing"</span>
            )}
          </p>
          <WishList
            active={product.wishlisted}
            onClick={() => handleWishlist(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
