import MultiSelectDropdown from "../multiSelectDropdown/MultiSelectDropdown";
import styles from "./Shop.module.css";

const Filters = ({ config }) => {
  return (
    <aside className={styles.filters}>
      {config.map((filter, index) => {
        switch (filter.type) {
          case "dropdownCheckbox":
            return (
              <MultiSelectDropdown
                label={filter.label}
                options={filter.options}
              />
            );
          case "checkbox":
            return (
              <div key={index}>
                <label>
                  <input type="checkbox" />
                  {filter.label}
                </label>
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
