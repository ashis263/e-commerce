import NavLink from "../NavLink/NavLink";

const NavLinksContainer = () => {
  const navLinks = [
    { id: 1, link: "#", label: "Shop" },
    { id: 2, link: "#", label: "On Sale" },
    { id: 3, link: "#", label: "New Arrivals" },
    { id: 4, link: "#", label: "Brands" },
  ];
  return (
    <nav className="hidden md:flex space-x-6">
      {navLinks.map((n) => (
        <NavLink key={n.id} linkData={n} />
      ))}
    </nav>
  );
};

export default NavLinksContainer;
