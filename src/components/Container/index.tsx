import React from "react";
import "./styles.css";

interface IProps {
	title: string;
	children: React.ReactNode;
	testid?: string;
}
function Container({ title, children, testid }: IProps) {
	return (
		<div className="container">
			<h1 data-testid={testid}>{title}</h1>
			<div className="container-content">{children}</div>
		</div>
	);
}

export default Container;
