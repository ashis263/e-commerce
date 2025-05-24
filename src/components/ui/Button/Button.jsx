const Button = ({ clickHander, variant, content, ...props }) => {
  //common classes for product buttons
  const commonClassnames =
    "w-full mt-2 py-1 text-gray-100 rounded flex items-center justify-center";

  //common classes for cart buttons
  const cartButtonClassNames = "bg-black text-white rounded-md";

  const FinalClassNames =
    (variant === "primary" &&
      `${commonClassnames} disabled:bg-gray-700 bg-gray-800 disabled:text-gray-400 disabled:cursor-not-allowed  active:translate-y-1 transition-all active:bg-gray-900`) ||
    (variant === "secondary" && `${commonClassnames} bg-red-800`) ||
    (variant === "newsletter" &&
      "bg-white text-black font-medium rounded-md px-6 py-3 hover:bg-gray-100 transition-colors") ||
    (variant === "checkout" &&
      `${cartButtonClassNames} w-full block text-center py-3 hover:bg-gray-800 transition-colors`) ||
    (variant === "coupon" && `${cartButtonClassNames} px-4 py-2 text-sm`) ||
    (variant === "cart-quantity" &&
      "w-6 h-6 bg-gray-100 rounded flex items-center justify-center");

  return (
    <button onClick={clickHander} className={`${FinalClassNames}`} {...props}>
      {content}
    </button>
  );
};

export default Button;
