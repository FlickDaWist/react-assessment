import PostChild from "./PostChild";
import { v4 as uuidv4 } from "uuid";
const Post = ({ postData }) => {
	let posts = postData.data.map((val) => {
		return (
			<PostChild
				postDate={val.publishDate}
				postDescription={val.text}
				postImage={val.image}
				postTag={val.tags}
				userImage={val.owner.picture}
				userName={val.owner.firstName.concat(" ".concat(val.owner.lastName))}
				key={uuidv4()}
			></PostChild>
		);
	});

	return (
		<div className="">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto py-8 sm:py-12 lg:py-16 lg:max-w-none">
					<div className="mt-6 space-y-12 lg:space-y-6 lg:grid lg:grid-cols-5 lg:gap-x-6">
						{posts}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
