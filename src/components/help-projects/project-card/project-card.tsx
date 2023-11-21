import { Buffer } from "buffer";
import { formatEther } from "ethers/lib/utils";
import { FC } from "react";

import { cutAddress } from "../../../utils";

import "./project-card.scss";
import { IProjectCardProps } from "./project-card.types";

const ProjectCard: FC<IProjectCardProps> = ({
	name,
	description,
	fundraiserAddress,
	fundraisingAmount,
	beneficiary,
	image,
}) => {
	const dataURL = `data:${image.contentType};base64,${Buffer.from(
		image.data
	).toString("base64")}`;

	return (
		<div
			className="project-card"
			style={{
				backgroundImage: `url(${dataURL})`,
			}}
		>
			<div className="project-card-content">
				<div className="project-card-content_name">{name}</div>
				<div className="project-card-content_beneficiary">
					{cutAddress(beneficiary)}
				</div>
				<div className="project-card-content_description">{description}</div>
				<div className="project-card-content_amount">
					{formatEther(fundraisingAmount).toString()} ETH
				</div>
				<div className="project-card-content_address">
					Smart contract for fundraising:
					<span
						onClick={() => {
							window.open(
								`https://goerli.etherscan.io/address/${fundraiserAddress}`,
								"_blank"
							);
						}}
					>
						{` ${cutAddress(fundraiserAddress)}`}
					</span>
				</div>
				<hr />
				<div className="project-card-content_button">Donate</div>
			</div>
		</div>
	);
};

export { ProjectCard };
