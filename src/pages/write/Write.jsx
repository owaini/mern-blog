import './write.css'

export default function Write() {
    return (
			<div className="write">
				<img
					className="writeImage"
					src="https://images.pexels.com/photos/5709036/pexels-photo-5709036.jpeg?cs=srgb&dl=pexels-monstera-5709036.jpg&fm=jpg"
					alt=""
				/>
				<form className="writeForm">
					<div className="writeFormGroup">
						<label htmlFor="fileInput">
							<i className="writeIcon fas fa-folder-plus"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: "none" }} />
						<input
							type="text"
							placeholder="Title"
							className="writeInput"
							autoFocus={true}
						/>
					</div>
					<div className="writeFormGroup">
						<textarea
							className="writeInput writeText"
							placeholder="Tell your story..."
							type="text"
						></textarea>
					</div>
					<button className="writeSubmit">Publish</button>
				</form>
			</div>
		);
}
