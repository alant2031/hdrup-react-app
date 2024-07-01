import React, { useEffect, useState } from "react";
import "./styles.css";

interface IProps {
	children: React.ReactNode;
	target: React.ReactNode;
	updateViews(): void;
}
function Modal({ children, target, updateViews }: IProps) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		isOpen && updateViews();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);
	return (
		<>
			{isOpen && (
				<div className="modal">
					<div
						style={{
							cursor: "pointer",
							fontSize: "45px",
							alignSelf: "flex-end",
						}}
						onClick={() => setIsOpen(false)}
					>
						✖
					</div>
					<div className="modal-content">{children}</div>
				</div>
			)}
			<div className="modal-target" onClick={() => setIsOpen(true)}>
				{target}
			</div>
		</>
	);
}

export default Modal;
