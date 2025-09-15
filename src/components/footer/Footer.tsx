import { memo } from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">E-commerce</h2>
          <p className="text-gray-400 max-w-[250px] text-sm leading-relaxed">
            Get all furniture you need for your home.
            Best quality at the best price.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <a href="/" className="hover:text-indigo-400 transition">Home</a>
          <a href="/products" className="hover:text-indigo-400 transition">Products</a>
          <a href="/about" className="hover:text-indigo-400 transition">About</a>
          <a href="/contact" className="hover:text-indigo-400 transition">Contact</a>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
          <p className="text-gray-400">Email: ecommerce@gmail.com</p>
          <p className="text-gray-400">Phone: +998 90 123 45 67</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} E-commerce.
      </div>
    </footer>
  );
};

export default memo(Footer);
