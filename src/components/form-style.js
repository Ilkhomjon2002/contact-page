import styled from "styled-components";
const ContactForm = styled.form`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	margin: 0 auto;
	height: 100%;
	align-items: center;
	padding: 60px 0;
`;
const Input = styled.input`
	border: none;
	outline: none;
	border-bottom: 2px solid #cecece !important;
	margin: 0 0 35px 20px;
	padding: 15px 0;
	width: 400px;
	position: relative;
	font-size: 15px;
	color: #555555;
`;

const InputContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	position: relative;
`;
const Label = styled.label`
	color: #8f8f8f;
	padding: 0;
	margin: 0;
	text-align: right;
	font-size: 16px;
	margin: 0 0 40px 0;
	width: 20%;
`;

const Submit = styled.button`
	display: flex;
	font-size: 16px;
	justify-content: center;
	align-items: center;
	border-radius: 25px;
	cursor: pointer;
	color: #ffffff;
	padding: 0 20px;
	border: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;

	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	gap: 10px;
	height: 50px;
	background-color: #57b846;
	min-width: 160px;
	transition: all 0.4s ease;
	:active {
		transform: scale(0.98);
		opacity: 0.7;
	}
	&:hover {
		gap: 20px;
		background-color: #333333;
	}
`;
const ErrorWindow = styled.div`
	margin-top: 15px;
	padding: 4px;
	border-radius: 2px;
	border: 1px solid #c80000;
	color: #c80000;
	position: absolute;
	right: 0;
	top: 0;
	font-size: 12px;
`;
const Arrow = styled.span`
	font-size: 16px;
`;
export {
	ContactForm,
	Input,
	Submit,
	Label,
	ErrorWindow,
	Arrow,
	InputContainer,
};
