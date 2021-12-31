import './sidebar.css'

export default function Sidebar() {
    return (
			<div className="sidebar">
				<div className="sidebarItem">
					<span className="sidebarTitle">ABOUT ME</span>
					<img
						src="http://pngimg.com/uploads/man/man_PNG6502.png"
						alt=""
						className="sidebarAboutImage"
					/>
					<p>
						lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim ven{" "}
					</p>
				</div>
				<div className="sidebarItem">
					<span className="sidebarTitle">CATEGORIES</span>
					<ul className="sidebarList">
						<li className="sidebarListItem">Life</li>
						<li className="sidebarListItem">Tech</li>
						<li className="sidebarListItem">Style</li>
						<li className="sidebarListItem">Sport</li>
						<li className="sidebarListItem">Cinma</li>
						<li className="sidebarListItem">Music</li>
					</ul>
				</div>
				<div className="sidebarItem">
					<span className="sidebarTitle">FOLLOW US</span>
					<div className="sidebarSocial">
						<i className="sidebarIcon fab fa-facebook-square"></i>
						<i className="sidebarIcon fab fa-twitter-square"></i>
						<i className="sidebarIcon fab fa-pinterest-square"></i>
						<i className="sidebarIcon fab fa-instagram-square"></i>
					</div>
				</div>
			</div>
		);
}
