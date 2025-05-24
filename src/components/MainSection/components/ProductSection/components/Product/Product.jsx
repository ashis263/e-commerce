import ProductPrice from "../../../../../ui/ProductPrice/ProductPrice";
import ProductTitle from "../../../../../ui/SectionHeading/ProductTitle/ProductTitle";

const Product = ({ product }) => {
  const { title, image, rating, price, totalStock } = product;
  const ratingArr = [];
  for (let i = 0; i < rating; i++) {
    ratingArr.push({ id: i + 1, isRated: true });
  }
  for (let i = 0; i < 5 - rating; i++) {
    ratingArr.push({ id: ratingArr.length + 1, isRated: false });
  }
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img src={image} alt={title} className="h-full w-auto object-cover" />
      </div>
      <div className="p-4">
        <ProductTitle text={title} />
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex text-yellow-400">
              {ratingArr.map((r) => (
                <span
                  key={r.id}
                  className={`${r.isRated ? "" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">{rating}/5</span>
          </div>
          <span className="text-xs text-gray-700">{`(${totalStock} pcs left)`}</span>
        </div>
        <ProductPrice price={price} />
        <button className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">
          Remove from Cart
        </button>
        {/* <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
          Add to Cart
        </button>
        <button
          disabled=""
          className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900 active:translate-y-1 transition-all active:bg-gray-900"
        >
          Add to Cart
        </button> */}
      </div>
    </div>
  );
};

export default Product;
