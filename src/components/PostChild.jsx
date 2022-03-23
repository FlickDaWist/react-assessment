const PostChild = ({
	userImage,
	userName,
	postDate,
	postImage,
	postDescription,
	postTag,
}) => {
	return (
		<div className="group relative col-start-2 col-span-3 bg-white rounded-md px-4 py-4 shadow">
			<div className="grid grid-rows-3 grid-flow-col grid-cols-9 pb-2">
				<div className="row-span-3">
					<img src={userImage} alt="" className="rounded-full h-16 w-auto" />
				</div>
				<div className="col-span-2">
					<p className="text-base font-semibold text-gray-900">{userName}</p>
				</div>
				<div className="row-span-2 col-span-2">
					<h3 className="text-sm text-gray-500">
						<div>
							<span className="absolute inset-0"></span>
							{new Date(new Date().valueOf(postDate)).toUTCString()}
						</div>
					</h3>
				</div>
				<div className="row-span-3 col-start-9">
					<button className="absolute text-4xl h-16 fill-transparent hover:text-5xl transition-all">
						❤️
						<p className="text-sm">Like</p>
					</button>
				</div>
			</div>
			<div className="relative w-full h-auto bg-white rounded-lg overflow-hidden  sm:aspect-w-2 sm:aspect-h-1 sm:h-fit lg:aspect-w-1 lg:aspect-h-1">
				<img
					src={postImage}
					alt=""
					className="w-full h-full object-center object-cover"
				/>
			</div>
			<p className="mt-6 text-sm text-gray-500">
				{postTag.map((val) => "#" + val + " ")}
			</p>
			<p className="text-base font-semibold text-gray-900">{postDescription}</p>
		</div>
	);
};

export default PostChild;
