import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

interface INavbarLeftProps extends React.PropsWithChildren {}

const NavbarLeft: React.FunctionComponent<INavbarLeftProps> = (
  props
): JSX.Element => {
  const [status, setStatus] = useState(false);

  const handleSearch = () => {
    setStatus(!status);
  };

  return (
    <>
      <h1 className=" flex content-center flex-wrap font-display text-light-accent text-3xl font-bold uppercase ">
        morent
      </h1>
      <div className=" p-1 flex flex-wrap content-center border border-light-details rounded-2xl">
        <div
          className=" cursor-pointer text-2xl  text-light-details hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover"
          onClick={handleSearch}
        >
          <BsSearch />
        </div>
        <div className="flex pr-20 pl-3 ">
          <input
            type="text"
            placeholder="Search something here"
            className="bg-light-secondary"
          />
        </div>
        <div className=" cursor-pointer text-2xl  text-light-details hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
          <TbAdjustmentsHorizontal />
        </div>
      </div>
    </>
  );
};

export default NavbarLeft;
