import { ethers } from "ethers";
import { ChangeEvent, useContext, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { IUploadRes, upload } from "../../api";
import {
	GOODDOER_FACTORY_ABI,
	GOODDOER_FACTORY_CONTRACT_ADDRESS,
} from "../../constants";
import { EToastrContent } from "../../enum";
import { useActions } from "../../hooks";
import { EthersContext } from "../../providers";

import "./create-form.scss";
import { ICreateFormInput } from "./create-form.types";
import { Error } from "./error";

const CreateForm = () => {
	const [fileMetadata, setFileMetadata] = useState<null | IUploadRes>(null);
	const provider = useContext(EthersContext);
	const { addToastrToQueue } = useActions();
	const navigate = useNavigate();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<ICreateFormInput>();

	const contract = useMemo(
		() =>
			new ethers.Contract(
				GOODDOER_FACTORY_CONTRACT_ADDRESS as string,
				GOODDOER_FACTORY_ABI
			),
		[]
	);

	const signer = useMemo(() => provider?.getSigner(), [provider]);

	const onSubmit: SubmitHandler<ICreateFormInput> = async (data) => {
		if (signer) {
			const { amount, beneficiary, description } = data;
			const contractWithSigner = contract.connect(signer);
			const fundraisingAmount = ethers.utils.parseEther(amount.toString());

			const { name, ipfsUrl } = fileMetadata?.data || {};

			const nameBytes32 = ethers.utils.formatBytes32String(name as string);

			const hash = ethers.utils.keccak256(
				ethers.utils.toUtf8Bytes(description)
			);

			const tx = await contractWithSigner.createFundraiser(
				fundraisingAmount.toString(),
				beneficiary,
				{ name: nameBytes32, uri: ipfsUrl, hash: hash }
			);

			console.log(tx);

			addToastrToQueue({
				id: uuidv4(),
				content: EToastrContent.CreateFundraiser,
			});
			navigate("/");
		}
	};

	const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		console.log(files);

		if (!files?.length) return;
		try {
			const { data } = await upload.uploadFile({ file: files[0] });
			setFileMetadata({
				data: {
					...data,
				},
			});
		} catch (e) {
			addToastrToQueue({
				id: uuidv4(),
				content: EToastrContent.BackError,
			});
		}
	};

	return (
		<div className="create">
			<h1 className="create-title">Create a Project</h1>
			<form className="create-form" onSubmit={handleSubmit(onSubmit)}>
				<label>
					Project name <span>*</span>
				</label>
				<input
					className="create-form_input"
					placeholder="Project name"
					{...register("nameProject", {
						required: "The name must not be empty.",
						maxLength: { value: 20, message: "Must not exceed 20 characters." },
					})}
				/>
				{errors.nameProject && (
					<Error error={errors.nameProject.message as string} />
				)}
				<label>
					Tell us about your project...<span>*</span>
				</label>
				<textarea
					className="create-form_area"
					placeholder="Write description about your project"
					{...register("description", {
						required: "The description must not be empty.",
						minLength: {
							value: 50,
							message: "Must not be less than 50 characters.",
						},
					})}
				/>
				{errors.description && (
					<Error error={errors.description.message as string} />
				)}
				<label>
					File to upload <span>*</span>
				</label>
				<input
					type="file"
					className="create-form_input_file"
					{...register("file", { required: "The file should be." })}
					onChange={uploadFile}
				/>
				{errors.file && <Error error={errors.file.message as string} />}
				<label>
					Fundraising amount <span>*</span>
				</label>
				<input
					className="create-form_input"
					placeholder="Fundraising amount"
					{...register("amount", {
						required: "The amount must not be empty.",
						pattern: {
							value: /^-?\d+\.?\d*$/,
							message: "Invalid amount.",
						},
					})}
				/>
				{errors.amount && <Error error={errors.amount.message as string} />}
				<div className="create-form-funds">
					<div className="create-form-funds_title">
						Receiving funds. <span>*</span>
					</div>
					<div className="create-form-funds_description">
						You have to set a custom Ethereum address or ENS to receive
						donations
					</div>
				</div>
				<input
					className="create-form_input"
					placeholder="Write or insert your Ethereum address"
					{...register("beneficiary", {
						required: "The line should be ethereum address.",
						pattern: {
							value: /^0x[a-fA-F0-9]{40}$/g,
							message: "Invalid ethereum address.",
						},
					})}
				/>
				{errors.beneficiary && (
					<Error error={errors.beneficiary.message as string} />
				)}
				<input
					className="create-form_button"
					type="submit"
					value={"CREATE"}
					disabled={!fileMetadata}
				/>
			</form>
		</div>
	);
};

export { CreateForm };
