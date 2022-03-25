import { useContext, useEffect, useState } from "react";
import { FavoriteContext } from "./FavoriteContext";
import FavoriteChild from "./FavoriteChild";
import { v4 as uuidv4 } from "uuid";

const Favorite = () => {
	const { favorite, setFavorite } = useContext(FavoriteContext);
	const [favoriteList, setFavoriteList] = useState();

	useEffect(() => {
		if (favorite.length > 0) {
			setFavoriteList(
				favorite.map((val) => {
					return (
						<FavoriteChild
							key={uuidv4()}
							postImage={val.postImage}
							postTag={val.postTag}
							userName={val.userName}
						></FavoriteChild>
					);
				})
			);
		} else {
			setFavoriteList(
				<div className="text-center font-gray-500 col-span-2">
					You don't like any post yet
				</div>
			);
		}
	}, [favorite]);

	return (
		<div className="group relative col-start-2 col-span-3 bg-inherit  px-4 py-4">
			<div className="relative w-full h-auto overflow-hidden  sm:aspect-w-2 sm:aspect-h-1 sm:h-fit lg:aspect-w-1 lg:aspect-h-1">
				<div className="font-semibold text-center text-lg mb-6">
					Favorite Post
				</div>
				<div className="grid grid-cols-2 gap-4">{favoriteList}</div>
			</div>
		</div>
	);
};

export default Favorite;
