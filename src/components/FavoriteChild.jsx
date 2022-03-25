const FavoriteChilde = ({ postImage, userName, postTag }) => {
	return (
		<div className="grid grid-rows-3 grid-flow-col bg-white rounded-md shadow ">
			<div className="row-span-3">
				<img
					src={postImage}
					alt=""
					className="rounded-lg h-20 w-20 object-cover px-1 py-1"
				/>
			</div>
			<div className="col-span-2 font-bold">By {userName}</div>
			<div className="row-span-2 col-span-2 text-sm text-gray-500">
				{postTag.map((val) => "#" + val + " ")}
			</div>
		</div>
	);
};

export default FavoriteChilde;
