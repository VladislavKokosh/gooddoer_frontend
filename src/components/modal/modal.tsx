import CloseIcon from "@mui/icons-material/Close";
import { useClickAway } from "ahooks";
import { FC, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

import { useActions } from "../../hooks";
import { getModalState } from "../../store";

import "./modal.scss";
import { IModalProps } from "./modal.types";

const Modal: FC<IModalProps> = ({ type, children }) => {
	const ref = useRef(null);
	const { type: typeSelector } = useSelector(getModalState);
	const { changeVisible } = useActions();

	const hasModalHTMLElement = useMemo(
		() => document.getElementById("modal"),
		[]
	);

	useClickAway(
		() => {
			changeVisible(null);
		},
		ref,
		"mousedown"
	);

	return typeSelector && typeSelector === type && hasModalHTMLElement
		? createPortal(
				<div className="modal">
					<div className="modal-window" ref={ref}>
						<div className="modal-window-header">
							<div>{type}</div>
							<CloseIcon
								className="modal-window_button"
								onClick={(e) => {
									e.stopPropagation();
									changeVisible(null);
								}}
							/>
						</div>

						{children}
					</div>
				</div>,
				hasModalHTMLElement
		  )
		: null;
};

export { Modal };
