import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Logo classNames="mb-4 block" />
          <p className="text-gray-600 mb-4">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
