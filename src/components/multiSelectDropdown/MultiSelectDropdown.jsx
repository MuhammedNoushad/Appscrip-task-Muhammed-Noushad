import { useState } from "react";
import styles from "./MultiSelectDropdown.module.css";

const MultiSelectDropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prev) => prev.filter((o) => o !== option));
    } else {
      setSelectedOptions((prev) => [...prev, option]);
    }
  };

  return (
    <div className={styles.dropdown}>
      <label>{label}</label>
      <div className={styles.header} onClick={toggleDropdown}>
        {selectedOptions.length > 0
          ? selectedOptions.join(", ")
          : "Select options"}
      </div>

      {isOpen && (
        <div className={styles.options}>
          {options.map((option, index) => (
            <label key={index} className={styles.option}>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionClick(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
