import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const onAddCategory = (newCategory) => {
    const findCategory = categories.find(
      (cat) => cat.toUpperCase() === newCategory.toUpperCase()
    );

    if (!findCategory) {
      setCategories((cat) => [newCategory, ...cat]);
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
