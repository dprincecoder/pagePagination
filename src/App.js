import React from "react";
import axios from 'axios'
import PaginationItem from "./components/pagination/Pagination";
import Posts from "./components/Post";
const App = () => {
	const [posts, setPosts] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [postsPerPage] = React.useState(10);

	React.useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await axios.get(
				"https://jsonplaceholder.typicode.com/posts");
			setPosts(res.data);
			setLoading(false);
		};

		fetchPosts();
		return () => {
			fetchPosts({});
		};
	}, []);

	//get current post
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	//change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="App">
			<h1>BlogHub</h1>
			<Posts posts={currentPosts} loading={loading} />
			<PaginationItem
				postsPerPage={postsPerPage}
				totalPosts={posts.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default App;
