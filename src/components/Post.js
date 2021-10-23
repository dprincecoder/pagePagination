import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import IsLoadingSkeleton from "./loading/IsLoadingSkeleton";

const Post = ({ posts, loading }) => {
	if (loading) {
		return <IsLoadingSkeleton />;
	}
	return (
		<ListGroup>
			{posts.map((post, index) => {
				return <ListGroupItem key={index}>{post.title}</ListGroupItem>;
			})}
		</ListGroup>
	);
};

export default Post;
