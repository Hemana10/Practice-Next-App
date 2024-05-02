'use client';
import Image from 'next/image'
import Link from 'next/link';
import ProductCart from './components/ProductCart/ProductCart';

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      {/* sends request to server */}
      {/* <a href='/users'>Users</a> */}
      <Link href='/users'>Users</Link>
      <ProductCart />
    </main>
  );
}
