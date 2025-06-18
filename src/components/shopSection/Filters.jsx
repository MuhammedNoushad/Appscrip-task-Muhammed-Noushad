import MultiSelectDropdown from "../multiSelectDropdown/MultiSelectDropdown";
import styles from "./Shop.module.css";

const Filters = ({ config }) => {
  return (
    <aside className={styles.filters}>
      {config.map((filter, index) => {
        switch (filter.type) {
          case "multiSelectDropdown":
            return (
              <MultiSelectDropdown
                label={filter.label}
                options={filter.options}
              />
            );
          case "checkbox":
            return (
              <div key={index} className={styles.checkboxContainer}>
                <input type="checkbox" className="checkbox" />
                <p className={styles.label}>{filter.label}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </aside>
  );
};

export default Filters;
