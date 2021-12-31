
import './header.css'

export default function Header() {
    return (
			<div className="header">
				<div className="headerTitles">
					<span className="headerTitleSm">React & Node</span>
					<span className="headerTitleLg">Blog</span>
				</div>
				<img
					className="headerImage"
					alt="Image"
					src="https://images.pexels.com/photos/8472969/pexels-photo-8472969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				/>
			</div>
		);
}
