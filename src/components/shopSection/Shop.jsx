import LeftArrow from "../../icons/LeftArrow";
import Dropdown from "../dropdown/Dropdown";
import styles from "./Shop.module.css";

const Shop = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <strong>3224 ITEMS</strong>

          <a className={styles.hideFilters} href="#">
            <LeftArrow />
            HIDE FILTERS
          </a>
        </div>

        <Dropdown
          options={[
            "recommended",
            "newest first",
            "popular",
            "price:low to high",
            "price:high to low",
          ]}
        />
      </div>

      <div>
        <div>filters goes here</div>

        <div>product listing goes here</div>
      </div>
    </section>
  );
};

export default Shop;
