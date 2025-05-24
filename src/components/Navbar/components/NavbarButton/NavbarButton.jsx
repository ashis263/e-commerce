const NavbarButton = ({ buttonData }) => {
  const { link, content } = buttonData;
  return (
    <a href={link} className="hover:text-gray-500 transition-colors">
      {content}
    </a>
  );
};

export default NavbarButton;
