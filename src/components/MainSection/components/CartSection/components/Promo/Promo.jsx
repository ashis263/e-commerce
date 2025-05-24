import Button from "../../../../../ui/Button/Button";
import CouponIcon from "../CouponIcon/CouponIcon";

const Promo = () => {
  return (
    <div className="flex items-center space-x-2 mb-6">
      <div className="flex-grow relative">
        <input
          type="text"
          placeholder="Add promo code"
          className="w-full border border-gray-300 rounded-md py-2 px-3 pl-7 text-sm"
        />
        <span className="absolute left-3 top-[10.5px]">
          <CouponIcon />
        </span>
      </div>
      <Button variant="coupon" content="Apply" />
    </div>
  );
};

export default Promo;
