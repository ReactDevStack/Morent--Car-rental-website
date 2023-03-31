import UserIcon from "./UserIcon";
import DarkModeToggle from "./DarkModeToggle";

import FavoriteIcon from "./Favorite";
import AlarmIcon from "./Alarm";
import SettingIcon from "./Setting";

interface INavbarRightProps extends React.PropsWithChildren {}
const NavbarRight: React.FunctionComponent<
  INavbarRightProps
> = (): JSX.Element => {
  return (
    <nav className="sticky top-0 z-50 flex   dark:bg-dark-secondary">
      <div className=" flex w-full max-w-7xl items-center justify-between px-4">
        <div className="flex items-center justify-evenly gap-10">
          <FavoriteIcon url={"/"} />
          <AlarmIcon url={"/"} />
          <SettingIcon url={"/"} />
          <UserIcon url={"/"} />
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavbarRight;
