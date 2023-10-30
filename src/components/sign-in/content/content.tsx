import { Buffer } from "buffer";
import { FC, useEffect } from "react";
import { MutatingDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button } from "../..";
import { useActions } from "../../../hooks";
import { getAccountState, getAuthState } from "../../../store";

import "./content.scss";
import { IContentProps } from "./content.types";

const Content: FC<IContentProps> = ({ svg: SVG, title, buttonTitle }) => {
	const { getNonce, authIn } = useActions();
	const { address } = useSelector(getAccountState);
	const { nonce, isLoading } = useSelector(getAuthState);

	useEffect(() => {
		nonce == null && buttonTitle.length > 0 && address && getNonce(address);
	}, [nonce, buttonTitle.length, address, getNonce]);

	const onSubmit = async () => {
		if (!nonce) {
			return;
		}
		const message = `I am signing my one-time nonce: ${nonce}`;
		const messageBufferHex = `0x${Buffer.from(message, "utf8").toString(
			"hex"
		)}`;

		const sign: string = await (window as any).ethereum.request({
			method: "personal_sign",
			params: [messageBufferHex, address],
		});

		address && authIn({ signature: sign, publicAddress: address });
	};

	const hasLoading = isLoading && (
		<MutatingDots
			height="100"
			width="100"
			color="#4e4f8b"
			secondaryColor="#6ca6c1"
			radius="15"
			ariaLabel="mutating-dots-loading"
			wrapperStyle={{}}
			wrapperClass=""
			visible={true}
		/>
	);

	const hasContent = !isLoading && (
		<>
			<div className="signature_warning">
				<SVG className="signature_warning-logo" />
			</div>
			<h2 className="signature_title">{title}</h2>
			{buttonTitle.length > 0 ? (
				<Button title={buttonTitle} isLoading={isLoading} onClick={onSubmit} />
			) : null}
			<Link to={"/"}>
				<h4 className="signature_back">OR GO BACK TO HOMEPAGE</h4>
			</Link>
		</>
	);

	return (
		<div className="signature">
			{hasLoading}
			{hasContent}
		</div>
	);
};

export { Content };
