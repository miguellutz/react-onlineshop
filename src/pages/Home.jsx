import CategorySlider from "../components/categoryslider/CategorySlider";
import ItemsPreview from "../components/itemsPreview/ItemsPreview";

export default function Home({ categories, category, handleCategoryClick, categoryClicked, items }) {


  return (
    <>
      <CategorySlider categories={categories} handleClick={handleCategoryClick} categoryClicked={categoryClicked} category={category} />
      <ItemsPreview items={items} />
    </>
  );
}
