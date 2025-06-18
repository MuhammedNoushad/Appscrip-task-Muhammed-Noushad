import LeftArrow from "../../icons/LeftArrow";
import Dropdown from "../dropdown/Dropdown";
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
      type: "dropdownCheckbox",
      label: "IDEAL FOR",
      options: ["Men", "Women", "Baby & Kids"],
    },
    {
      type: "dropdownCheckbox",
      label: "OCCASION",
      options: ["Casual", "Formal", "Party", "Sports"],
    },
    {
      type: "dropdownCheckbox",
      label: "WORK",
      options: ["Formal", "Business Casual", "Casual"],
    },
    {
      type: "dropdownCheckbox",
      label: "FABRIC",
      options: ["Cotton", "Polyester", "Wool", "Silk"],
    },
    {
      type: "dropdownCheckbox",
      label: "SEGMENT",
      options: ["Luxury", "Premium", "Affordable"],
    },
    {
      type: "dropdownCheckbox",
      label: "SUITABLE FOR",
      options: ["Summer", "Winter", "Rainy"],
    },
    {
      type: "dropdownCheckbox",
      label: "RAW MATERIAL",
      options: ["Organic", "Recycled", "Synthetic"],
    },
    {
      type: "dropdownCheckbox",
      label: "PATTERN",
      options: ["Solid", "Striped", "Checked", "Printed"],
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

        <div>product listing goes here</div>
      </div>
    </section>
  );
};

export default Shop;
