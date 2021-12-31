import './account.css'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Account() {
    return (
			<div className="account">
				<div className="accountWrapper">
					<div className="accoutnTitle">
						<span className="accountUpdateTitle">Update Your Account</span>
						<span className="accountDeleteTitle">Delete Account</span>
					</div>
					<form className="accountForm">
						<label htmlFor="">Profile Picture</label>
						<div className="accountPP">
							<img
								className="accountPPImage"
								src="https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"
								alt="profile image"
							/>
							<label htmlFor="fileInput">
								<i className="accountPPIcon far fa-user-circle"></i>
							</label>
							<input type="file" id="fileInput" style={{ display: "none" }} />
						</div>
						<label>Username</label>
						<input type="text" placeholder="Owaini" />
						<label>Email</label>
						<input type="email" placeholder="Owaini@gmail.com" />
						<label>Password</label>
						<input type="texpasswordt" />
                        <button className="accountSubmit">Update</button>
					</form>
				</div>
				<Sidebar />
			</div>
		);
}
