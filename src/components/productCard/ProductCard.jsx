import WishList from "../../icons/WishList";
import styles from "./ProductCard.module.css";

const ProductCard = ({ key, product }) => {
  const userSignedIn = false;

  const handleWishlist = () => {
    console.log("Wishlisted");
  };

  return (
    <div key={key} className={styles.productCard}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.productImage}
      />
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
          <WishList active={product.wishlisted} onClick={handleWishlist} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
