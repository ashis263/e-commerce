import Logo from "../Logo/Logo";
import NavbarEnd from "./components/NavbarEnd/NavbarEnd";
import NavLinksContainer from "./components/NavLinksContainer/NavLinksContainer";

const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between">
      <Logo />
      <NavLinksContainer />
      <NavbarEnd />
    </div>
  );
};

export default Navbar;
