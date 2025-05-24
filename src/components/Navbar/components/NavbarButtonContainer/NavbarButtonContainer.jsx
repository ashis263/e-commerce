import CartIcon from "../CartIcon/CartIcon";
import NavbarButton from "../NavbarButton/NavbarButton";
import PersonIcon from "../PersonIcon/PersonIcon";

const NavbarButtonContainer = () => {
    const buttons = [
        {id: 1, link: "#", content: <CartIcon/>},
        {id: 2, link: "#", content: <PersonIcon/>},
    ]
  return (
    buttons.map((b) => <NavbarButton key={b.id} buttonData={b} />)
  );
};

export default NavbarButtonContainer;
