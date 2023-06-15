import { FC, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

import { EToastrContent, EToastrType } from "../../enum";
import { useActions } from "../../hooks";
import { getToastrState } from "../../store";

import { MemoItem } from "./item";
import "./toastr.scss";
import { IToastrConfig } from "./toastr.types";

const Toastr: FC<{ autoCloseTime: number }> = ({ autoCloseTime }) => {
	const ref = useRef(null);
	const { queue } = useSelector(getToastrState);
	const { deleteToastrFromQueue } = useActions();

	const toastrs: IToastrConfig = useMemo(
		() => ({
			[EToastrContent.Copy]: {
				type: EToastrType.Success,
				title: "Success",
				description: "Copied to clipboard",
			},
		}),
		[]
	);

	const hasToastrHTMLElement = useMemo(
		() => document.getElementById("toastr"),
		[]
	);

	const [removing, setRemoving] = useState("");

	useEffect(() => {
		if (removing) {
			deleteToastrFromQueue();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [removing]);

	useEffect(() => {
		if (queue.length) {
			const id = queue[queue.length - 1].id;
			setTimeout(() => setRemoving(id), autoCloseTime);
		}
	}, [queue, autoCloseTime]);

	return queue.length && hasToastrHTMLElement
		? createPortal(
				<div className="toastr-container" ref={ref}>
					{queue.map((toastr) => (
						<MemoItem
							key={toastr.id}
							{...toastrs[toastr.content]}
							id={toastr.id}
							autoCloseTime={autoCloseTime}
						/>
					))}
				</div>,
				hasToastrHTMLElement
		  )
		: null;
};

export { Toastr };
