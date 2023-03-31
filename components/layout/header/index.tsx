import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

interface IHeaderProps extends React.PropsWithChildren {}

const Header: React.FunctionComponent<IHeaderProps> = (props): JSX.Element => {
  return (
    <div>
      <header className="py-4 flex flex-wrap justify-between h-16 w-screen  bg-light-secondary  ">
        <NavbarLeft />
        <NavbarRight />
      </header>
    </div>
  );
};

export default Header;
