import Link from "next/link";

interface IUserIconProps extends React.PropsWithChildren {
  url: string;
}

const UserIcon: React.FunctionComponent<IUserIconProps> = ({
  url,
}): JSX.Element => {
  return (
    <div className="relative cursor-pointer  text-light-details hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
      <Link href={"/"}>
        <img className="" src="./user/userIcon.png" />
      </Link>
    </div>
  );
};

export default UserIcon;
