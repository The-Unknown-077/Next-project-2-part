import Image from "next/image";
import { useRouter } from "next/navigation";
import { memo } from "react";
import Button from "../components/Button";

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(`https://api.errorchi.uz/product/${id}`);
  const data = await response.json();
  const product = data?.data;

  return (
    <div className="min-h-screen bg-gradient-to-br relative from-gray-900 to-black text-gray-100 p-10 flex items-center justify-center">
      <Button />
      <div className="max-w-5xl w-full bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-900">
          <Image
            src={`https://api.errorchi.uz/product/image/${product?.images[0]}`}
            alt={product?.title}
            width={500}
            height={500}
            className="rounded-lg object-contain w-full h-full max-h-[500px] p-6"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-3">{product?.title}</h1>
            <p className="text-gray-300 text-lg mb-4">{product?.description}</p>

            <div className="mb-4">
              <span className="text-gray-400">Category: </span>
              <span className="font-semibold text-indigo-400">{product?.category?.name}</span>
            </div>

            <div className="mb-4">
              <span className="text-gray-400">Brand: </span>
              <span className="font-semibold">{product?.brand}</span>
            </div>

            <div className="mb-4">
              <span className="text-gray-400">Stock: </span>
              <span className="font-semibold">{product?.stock}</span>
            </div>

            <div className="mb-4">
              <span className="text-gray-400">Seller: </span>
              <span className="font-semibold">{product?.user?.fname}</span>
            </div>

            <div className="mb-4">
              <span className="text-gray-400">Email: </span>
              <span className="font-semibold">{product?.user?.email}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <p className="text-3xl font-bold text-green-400">${product?.price}</p>
            <button className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition font-semibold">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Detail);
