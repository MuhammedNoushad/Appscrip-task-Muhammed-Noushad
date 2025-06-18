import { useState } from "react";
import styles from "./Dropdown.module.css";
import DownArrow from "../../icons/DownArrow";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={styles["dropdown-header"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || options[0] || "Select an option"}
        <DownArrow />
      </div>

      {isOpen && (
        <div className={styles["dropdown-options"]}>
          {options.map((option, index) => (
            <div
              className={styles["dropdown-option"]}
              key={index}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
