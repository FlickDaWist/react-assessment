import { useEffect, useState } from "react";
import Post from "./Post";
const Home = () => {
	const [posts, setPosts] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://dummyapi.io/data/v1/post?limit=10", {
			headers: {
				"app-id": "62394f054347593126d4e595",
			},
		})
			.then((x) => x.json())
			.then((y) => {
				setPosts(y);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<div>
				<p className="text-sm text-center text-gray-600">Loading...</p>
			</div>
		);
	}

	return <Post postData={posts}></Post>;
};

export default Home;
