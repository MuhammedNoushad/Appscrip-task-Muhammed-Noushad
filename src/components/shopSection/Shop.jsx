import { use, useEffect, useState } from "react";
import LeftArrow from "../../icons/LeftArrow";
import Dropdown from "../dropdown/Dropdown";
import ProductCard from "../productCard/ProductCard";
import Filters from "./Filters";
import styles from "./Shop.module.css";
import axios from "axios";

const sortOptions = [
  "recommended",
  "newest first",
  "popular",
  "price:low to high",
  "price:high to low",
];

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sort, setSort] = useState("recommended");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await axios.get("/api/products");
        setProducts(products.data.products);
        setFilteredProducts(products.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    switch (sort) {
      case "recommended": {
        setFilteredProducts(products);
        break;
      }
      case "newest first":
        setFilteredProducts([...products].sort((a, b) => b.date - a.date));
        break;
      case "popular":
        setFilteredProducts(
          [...products].sort((a, b) => b.popularity - a.popularity)
        );
        break;
      case "price:low to high":
        setFilteredProducts([...products].sort((a, b) => a.price - b.price));
        break;
      case "price:high to low":
        setFilteredProducts([...products].sort((a, b) => b.price - a.price));
        break;
      default:
        setFilteredProducts([...products]);
    }
  }, [sort, products]);

  const handleWishlist = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          wishlisted: !product.wishlisted,
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleSortChange = (option) => {
    setSort(option);
  };

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

  const toggleFilters = () => {
    setShowFilter(!showFilter);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <strong>{filteredProducts?.length} ITEMS</strong>

          <a className={styles.hideFilters} onClick={toggleFilters}>
            <LeftArrow />
            {showFilter ? "HIDE FILTERS" : "SHOW FILTERS"}
          </a>
        </div>

        <div className={styles.mobileFilters}>
          <strong>FILTER</strong>
        </div>

        <Dropdown onSelect={handleSortChange} options={sortOptions} />
      </div>

      <div
        className={`${styles.content} ${!showFilter ? styles.contentFull : ""}`}
      >
        {showFilter && <Filters config={filterConfig} />}

        <div
          className={`${styles.products} ${
            !showFilter ? styles.productsFull : ""
          }`}
        >
          {filteredProducts?.map((product) => (
            <ProductCard product={product} handleWishlist={handleWishlist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
