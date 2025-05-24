const NavLink = ({ linkData }) => {
  const { link, label } = linkData;
  return (
    <a href={link} className="hover:text-gray-500 transition-colors">
      {label}
    </a>
  );
};

export default NavLink;
