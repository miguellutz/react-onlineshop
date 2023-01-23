import CategorySlider from '../components/categoryslider/CategorySlider';
import ItemsPreview from '../components/itemsPreview/ItemsPreview'

export default function Home({ items }) {
  return (
    <>
      <CategorySlider />
      <ItemsPreview items={items} />
    </>
  );
}
