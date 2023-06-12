import "./footer.scss";

const Footer = () => {
	return (
		<div className="footer">
			<div>{`@${new Date().getFullYear()}`} Gooddoer</div>
			<span>Privacy Policy</span>
			<span>Terms of Use</span>
		</div>
	);
};

export { Footer };
