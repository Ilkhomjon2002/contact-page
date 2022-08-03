import React from "react";
import {
	ErrorWindow,
	Input,
	Label,
	ContactForm,
	Submit,
	Arrow,
	InputContainer,
} from "./form-style";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
	const Formik = useFormik({
		initialValues: {
			fullname: "",
			email: "",
			phone: "",
			message: "",
		},
		onSubmit: () => {},
		validationSchema: Yup.object({
			email: Yup.string().email().required("Valid email is required"),
			fullname: Yup.string().required("Name is required"),
			phone: Yup.string().required("Phone is required"),
			message: Yup.string().required("Message is required"),
		}),
	});
	console.log(Formik);

	return (
		<ContactForm onSubmit={Formik.handleSubmit}>
			<InputContainer>
				<Label for="fullname">Full Name:</Label>
				<Input
					id="fullname"
					name="fullname"
					type={"text"}
					value={Formik.values.fullname}
					placeholder="Enter full name"
					onChange={Formik.handleChange}
				></Input>
				{Formik.errors.fullname && Formik.touched.fullname && (
					<ErrorWindow>
						{Formik.errors.fullname}{" "}
						<FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
					</ErrorWindow>
				)}
			</InputContainer>
			<InputContainer>
				<Label for="email">Email:</Label>
				<Input
					className="contact-input"
					id="email"
					name="email"
					type={"email"}
					value={Formik.values.email}
					placeholder="Enter email address"
					onChange={Formik.handleChange}
				></Input>
				{Formik.errors.email && Formik.touched.email && (
					<ErrorWindow>
						{Formik.errors.email}{" "}
						<FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
					</ErrorWindow>
				)}
			</InputContainer>
			<InputContainer>
				<Label for="phone">Phone:</Label>
				<Input
					id="phone"
					name="phone"
					type={"text"}
					value={Formik.values.phone}
					placeholder="Enter phone number"
					onChange={Formik.handleChange}
				></Input>
				{Formik.errors.phone && Formik.touched.phone && (
					<ErrorWindow>
						{Formik.errors.phone}{" "}
						<FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
					</ErrorWindow>
				)}
			</InputContainer>
			<InputContainer>
				<Label for="message">Message:</Label>
				<Input
					id="message"
					name="message"
					type={"message"}
					value={Formik.values.message}
					placeholder="Your Comment..."
					onChange={Formik.handleChange}
				></Input>
				{Formik.errors.message && Formik.touched.message && (
					<ErrorWindow>
						{Formik.errors.message}{" "}
						<FontAwesomeIcon icon={faCircleExclamation}></FontAwesomeIcon>
					</ErrorWindow>
				)}
			</InputContainer>
			<Submit type={"submit"}>
				Submit <Arrow>→</Arrow>
			</Submit>
		</ContactForm>
	);
};

export default Login;
