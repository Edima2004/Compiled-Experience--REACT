import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import ErrorMsg from "./ErrorMsg";

const ErrorPage = () => {
	const { openErrorMsg, openErrMsg } = useGlobalContext();
	return (
		<div className="error">
			{openErrorMsg && <ErrorMsg />}
			<h2>Page Not Found</h2>
			<div className="error-text">
				Looks like you've followed a broken link or entered a URL that doesn't
				exist on this site
				<p>
					<Link to="/">
						<button className="btn-back-home">Back Home</button>
					</Link>
				</p>
			</div>
			<hr />
			if this is your site, and you weren't expecting a 404 for this path,
			please visit our{" "}
			<div className="error-msg" onClick={openErrMsg}>
				"page not found" support guide{" "}
			</div>{" "}
			for troubleshooting tips
		</div>
	);
};

export default ErrorPage;
