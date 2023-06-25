import Modal from "./Modal";

/* eslint-disable react/prop-types */
export default function Card({ glass }) {
  const { productName, description, price, image } = glass || {};

  const productData = {
    productName,
    price,
  }

  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase">{productName}</h1>
        <p className="mt-1 text-sm text-gray-600">{`${description.slice(0, 100)}...`}</p>
      </div>
      <img className="object-cover w-full aspect-auto mt-2" src={image} alt="NIKE AIR" />
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">${price}</h1>
        <Modal productData={productData} />
      </div>
    </div>
  );
}