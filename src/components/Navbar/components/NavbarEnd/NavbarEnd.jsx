import NavbarButtonContainer from "../NavbarButtonContainer/NavbarButtonContainer";
import SearchBar from "../SearchBar/SearchBar";

const NavbarEnd = () => {
  return (
    <div className="flex items-center space-x-4">
      <SearchBar />
      <NavbarButtonContainer />
    </div>
  );
};

export default NavbarEnd;
