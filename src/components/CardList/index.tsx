import React from "react";
import "./styles.css";

interface IProps {
	children: React.ReactNode;
}
function CardList({ children }: IProps) {
	return <div className="card-list">{children}</div>;
}

export default CardList;
