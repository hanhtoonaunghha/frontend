import Head from 'next/head';
import Counter from './counter';
import ItemList from './ItemList';
import CustomButton from './CustomButton';
import Clock from './Clock';

export default function Home() {
  const items = ['one', 'two', 'three'];
  return (
    <main>
      {/* <Clock /> */}
      <Counter />
      <CustomButton />
      <ItemList items={items} />
    </main>
  );
}
