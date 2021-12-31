import './footer.css'

export default function Footer() {
    return (
			<div className="footer">
				<div className="footerRow">
					<div className="footerCol">
						<h4 className="footerTitle">MOST VIEWED</h4>
						<ul className="footerList">
							<li className="footerListItem">Lorem Life</li>
							<li className="footerListItem">Lorem Life</li>
							<li className="footerListItem">Lorem Life</li>
						</ul>
					</div>
					<div className="footerCol">
						<h4 className="footerTitle">RECENT POSTS</h4>
						<ul className="footerList">
							<li className="footerListItem">Lorem Life</li>
							<li className="footerListItem">Lorem Life</li>
							<li className="footerListItem">Lorem Life</li>
						</ul>
					</div>
					<div className="footerCol">
						<h4 className="footerTitle">CONTACTS</h4>
						<ul className="footerList">
							<li className="footerListItem">55-25482</li>
							<li className="footerListItem">5558-554</li>
							<li className="footerListItem">bolg@blog.com</li>
						</ul>
					</div>
				</div>
			</div>
		);
}
