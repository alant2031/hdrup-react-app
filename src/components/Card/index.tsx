import React from "react";
import "./styles.css";

interface IProps {
	children: React.ReactNode;
	onClickHandle?(): unknown;
}
function Card({ children, onClickHandle = () => {} }: IProps) {
	return (
		<div className="card" onClick={onClickHandle}>
			{children}
		</div>
	);
}

export default Card;
