import ItemsPreview from '../components/itemsPreview/ItemsPreview'

export default function Home({ items }) {
  return (
    <>
      <ItemsPreview items={items} />
    </>
  );
}
