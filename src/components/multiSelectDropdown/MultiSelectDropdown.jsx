import { useState } from "react";
import DownArrow from "../../icons/DownArrow";
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

  const handleUnselectAll = () => {
    setSelectedOptions([]);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.header} onClick={toggleDropdown}>
        <div className={styles.label}>
          <label>{label}</label>
          <DownArrow />
        </div>
        {selectedOptions.length !== options.length
          ? selectedOptions.join(", ")
          : "All"}
      </div>

      {isOpen && (
        <div className={styles.options}>
          <a className={styles.unselectAll} onClick={handleUnselectAll}>
            UnSelect all
          </a>
          {options.map((option, index) => (
            <label key={index} className={styles.option}>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionClick(option)}
                className="checkbox"
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
