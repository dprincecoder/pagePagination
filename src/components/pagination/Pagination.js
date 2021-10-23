import React from "react";
import { Navbar, NavLink, PageItem, Pagination } from "react-bootstrap";

const PaginationItem = ({ postsPerPage, totalPosts, paginate }) => {
	let pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<Navbar>
			<Pagination>
				{pageNumbers.map((number) => (
					<PageItem key={number}>
						<NavLink onClick={() => paginate(number)} href="!#">{number}
                        </NavLink>
					</PageItem>
				))}
			</Pagination>
		</Navbar>
	);
};

export default PaginationItem;
