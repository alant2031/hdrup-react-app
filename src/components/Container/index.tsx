import React from "react";
import "./styles.css";

interface IProps {
	title: string;
	children: React.ReactNode;
}
function Container({ title, children }: IProps) {
	return (
		<div className="container">
			<h1>{title}</h1>
			<div className="container-content">{children}</div>
		</div>
	);
}

export default Container;
