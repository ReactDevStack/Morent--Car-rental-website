import { AiFillSetting } from "react-icons/ai";

import Link from "next/link";

interface ISettingProps extends React.PropsWithChildren {
  url: string;
}

const SettingIcon: React.FunctionComponent<ISettingProps> = ({
  url,
}): JSX.Element => {
  return (
    <div className="p-1 border border-light-details rounded-3xl relative cursor-pointer text-2xl text-light-content hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
      <Link href={"/"}>
        <AiFillSetting />
      </Link>
    </div>
  );
};

export default SettingIcon;
