// Block.js
import React from "react";
import styles from "./category.module.css";

const Block = ({ data, value, setCategories, categories }) => {
  const isSelected = categories.includes(data.id);

  const handleClick = () => {
    if (isSelected) {
      setCategories(categories.filter((category) => category !== data.id));
    } else {
      setCategories([...categories, data.id]);
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    setCategories(categories.filter((category) => category !== data.id));
  };

  return (
    <div
      onClick={(e) => handleClick(e)}
      key={value}
      style={{
        background: data.color,
        color: "white",
        padding: "16px",
        borderRadius: "12px",
        border: `${isSelected ? "4px solid green" : "4px solid white"}`,
      }}
    >
      <h1 style={{ marginBottom: "4px", fontSize: "18px" }}>{data.id}</h1>
      {data.image}
      {isSelected && (
        <button className={styles.removeButton} onClick={handleRemove}>
          X
        </button>
      )}
    </div>
  );
};

export default Block;
