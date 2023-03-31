import { AiFillHeart } from "react-icons/ai";

import Link from "next/link";

interface IFavoriteProps extends React.PropsWithChildren {
  url: string;
}

const FavoriteIcon: React.FunctionComponent<IFavoriteProps> = ({
  url,
}): JSX.Element => {
  return (
    <div className="p-1 border border-light-details rounded-3xl relative cursor-pointer text-2xl text-light-content hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
      <Link href={"/"}>
        <AiFillHeart />
      </Link>
    </div>
  );
};

export default FavoriteIcon;
