import { useState } from "react";
import styles from "./Dropdown.module.css";
import DownArrow from "../../icons/DownArrow";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleChange = (option) => () => {
    setSelected(option);
    onSelect(option);
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
              onClick={handleChange(option)}
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
