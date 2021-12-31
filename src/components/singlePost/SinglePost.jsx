import "./singlePost.css"

export default function SinglePost() {
    return (
			<div className="singlePost">
				<div className="singlePostWrapper">
					<img
						src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=480"
						className="singlePostImage"
						alt=""
					/>
					<h1 className="singlePostTitle">
						lorem ipsum dolor sit amet
						<div className="singlePostEdit">
							<i class="singlePostIcon far fa-edit"></i>
							<i class="singlePostIcon far fa-trash-alt"></i>
						</div>
					</h1>
					<div className="singlePostInfo">
						<span className="singlePostAuthor">
							Author: <b>Orent</b>
						</span>
						<span className="singlePostDate">1 hour ago</span>
					</div>
					<p className="singlePostDesc">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					</p>
				</div>
			</div>
		);
}
