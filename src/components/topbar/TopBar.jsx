
import './topbar.css'
import { Link } from 'react-router-dom'


export default function TopBar() {
	const user = false; 
    return (
			<div className="top">
				<div className="topLeft">
					<i className="topIcon fab fa-facebook-square"></i>
					<i className="topIcon fab fa-twitter-square"></i>
					<i className="topIcon fab fa-pinterest-square"></i>
					<i className="topIcon fab fa-instagram-square"></i>
				</div>
				<div className="topCenter">
					<ul className="topList">
						<li className="topListItem">
							<Link to="/" className="link">
								HOME
							</Link>
						</li>
						<li className="topListItem">
							<Link to="/" className="link">
								ABOUT
							</Link>
						</li>
						<li className="topListItem">
							<Link to="/" className="link">
								CONTACT
							</Link>
						</li>
						<li className="topListItem">
							<Link to="write" className="link">
								WRITE
							</Link>
						</li>
						<li className="topListItem">{user && "LOGOUT"}</li>
					</ul>
				</div>
				<div className="topRight">
					{user ? (
						<img
							className="topImage"
							src="https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
						/>
					) : (
						<>
							<Link to="login" className="link lr">
								LOGIN
							</Link>
							<Link to="register" className="link lr">
								REGISTER
							</Link>
						</>
					)}
					<i className="topSearchIcon fas fa-search"></i>
				</div>
			</div>
		);
}