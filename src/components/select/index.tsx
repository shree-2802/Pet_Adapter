import React, { useState } from "react";
import styles from "./index.module.scss";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { toPascalCase } from "../../utils/text";

export type selectType = {
  dataSet: string[],
  petSet: {
    pet: string,
    setPet: React.Dispatch<React.SetStateAction<string>>
  }
  state?: "active" | "inactive",
  onClickFuntion?:()=>void;
}
const Select = ({ dataSet, state, petSet,onClickFuntion }: selectType) => {
  const [value, setValue] = useState(dataSet[0]);
  const [showDropDown, setShowDropDown] = useState(false);
  const handleClick = (filter: string) => {
    setValue(filter);
    petSet.setPet(filter)
    setShowDropDown(!showDropDown);
  }
  return (
    <div className={`${styles.select_component} flex-align-center`} onClick={onClickFuntion}>
      <div className={state !== 'inactive' ? `${styles.select_component_box}` : `${styles.select_component_box} ${styles.inactive}`}>
        <p>{toPascalCase(value)}</p>
        <p className={styles.click} onClick={state !== 'inactive' ? () => setShowDropDown(!showDropDown) : () => { }}>
          {showDropDown ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </p>
      </div>
      {showDropDown && (
        <div className={`${styles.options} flex-column`}>
          {dataSet.map((filter) => (
            <div
              key={filter}
              className={filter === value ? `${styles.selected}` : ``}
              onClick={() => handleClick(filter)}
            >
              {toPascalCase(filter)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
