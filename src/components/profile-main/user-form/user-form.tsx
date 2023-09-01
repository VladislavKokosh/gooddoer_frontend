/* eslint-disable no-sequences */
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useActions } from "../../../hooks";

import "./user-form.scss";

const UserForm = () => {
	const { updateUserData, changeVisibleModal } = useActions();
	const {
		register,
		reset,
		handleSubmit,
		formState,
		formState: { errors },
	} = useForm({
		defaultValues: {
			username: "",
		},
	});

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset({ username: "" });
		}
	}, [formState, reset]);

	const saveData = (username: string) => {
		const token = localStorage.getItem("accessToken");
		token && updateUserData({ token, username });

		changeVisibleModal(null);
	};

	return (
		<div className="user-form">
			<form
				onSubmit={handleSubmit((data) => {
					saveData(data.username);
				})}
			>
				<input
					{...register("username", { required: true, minLength: 3 })}
					placeholder="Username"
				/>
				{errors.username && <p>This field is required</p>}
				<input className="user-form-button" type="submit" value={"Save"} />
			</form>
		</div>
	);
};

export { UserForm };
