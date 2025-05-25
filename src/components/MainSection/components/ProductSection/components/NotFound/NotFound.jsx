const NotFound = () => {
  return (
    <div className="flex h-[65vh] justify-center items-center text-center">
      <div>
        <h2 className="text-3xl md:text-4xl text-red-400 font-bold">
          No Products Found
        </h2>
        <p>Your search did not match any product!</p>
        <p>Please try again.</p>
      </div>
    </div>
  );
};

export default NotFound;
