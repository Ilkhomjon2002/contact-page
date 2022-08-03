import styled from "styled-components";
const Window = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	min-height: 90%;
	width: 680px;
	background-color: #ffffff;
	overflow: hidden;
	border-radius: 12px;
	transition: 0.3s;
	&:hover {
		cursor: pointer;
		box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
	}
`;
Window.ImgContainer = styled.div`
	position: relative;
	height: 200px;
	width: 100%;
	overflow: hidden;
`;
Window.Img = styled.img`
	object-fit: cover;
	height: 200px;
	width: 100%;
`;
Window.Title = styled.div`
	position: absolute;
	top: 50%;
	text-align: center;
	left: 50%;
	transform: translate(-50%, -50%);
`;
Window.H1 = styled.h1`
	font-size: 22px;
	color: #ffffff;
	font-weight: 700;
	margin: 0;
	padding-bottom: 7px;
	letter-spacing: 2px;
`;
Window.P = styled.p`
	font-size: 20px;
	color: #ffffff;
	font-weight: 400;
	margin: 0;
	padding-bottom: 7px;
`;

export { Window };
