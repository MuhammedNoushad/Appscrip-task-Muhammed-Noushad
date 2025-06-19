import LeftArrow from "../../icons/LeftArrow";
import Dropdown from "../dropdown/Dropdown";
import ProductCard from "../productCard/ProductCard";
import Filters from "./Filters";
import styles from "./Shop.module.css";

const sortOptions = [
  "recommended",
  "newest first",
  "popular",
  "price:low to high",
  "price:high to low",
];

const Shop = () => {
  const filterConfig = [
    {
      type: "checkbox",
      label: "CUSTOMIZABLE",
    },
    {
      type: "multiSelectDropdown",
      label: "IDEAL FOR",
      options: ["Men", "Women", "Baby & Kids"],
    },
    {
      type: "multiSelectDropdown",
      label: "OCCASION",
      options: ["Casual", "Formal", "Party", "Sports"],
    },
    {
      type: "multiSelectDropdown",
      label: "WORK",
      options: ["Formal", "Business Casual", "Casual"],
    },
    {
      type: "multiSelectDropdown",
      label: "FABRIC",
      options: ["Cotton", "Polyester", "Wool", "Silk"],
    },
    {
      type: "multiSelectDropdown",
      label: "SEGMENT",
      options: ["Luxury", "Premium", "Affordable"],
    },
    {
      type: "multiSelectDropdown",
      label: "SUITABLE FOR",
      options: ["Summer", "Winter", "Rainy"],
    },
    {
      type: "multiSelectDropdown",
      label: "RAW MATERIAL",
      options: ["Organic", "Recycled", "Synthetic"],
    },
    {
      type: "multiSelectDropdown",
      label: "PATTERN",
      options: ["Solid", "Striped", "Checked", "Printed"],
    },
  ];

  const productsDummy = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "/img1.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "/img1.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "/img1.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "/img1.jpg",
      wishlisted: true,
    },
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "/img1.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "/img1.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "/img1.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "/img1.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "/img1.jpg",
    },
  ];

  const toggleFilters = () => {
    console.log("Toggle filters clicked");
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <strong>3224 ITEMS</strong>

          <a className={styles.hideFilters} onClick={toggleFilters}>
            <LeftArrow />
            HIDE FILTERS
          </a>
        </div>

        <Dropdown options={sortOptions} />
      </div>

      <div className={styles.content}>
        <Filters config={filterConfig} />

        <div className={styles.products}>
          {productsDummy.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
