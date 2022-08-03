import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Window } from "./style";
import img1 from "../assets/pexels-eduardo-dutra-2115217.jpg";
import Login from "./form";
const Contact = () => {
	return (
		<>
			<LoadScript googleMapsApiKey="AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4">
				<GoogleMap
					mapContainerStyle={{ width: "100%", height: "100vh" }}
					zoom={10}
					center={{ lat: 33, lng: 133 }}
					options={{
						styles: [
							{ elementType: "geometry", stylers: [{ color: "#242f3e" }] },
							{
								elementType: "labels.text.stroke",
								stylers: [{ color: "#242f3e" }],
							},
							{
								elementType: "labels.text.fill",
								stylers: [{ color: "#746855" }],
							},
							{
								featureType: "administrative.locality",
								elementType: "labels.text.fill",
								stylers: [{ color: "#d59563" }],
							},
							{
								featureType: "poi",
								elementType: "labels.text.fill",
								stylers: [{ color: "#d59563" }],
							},
							{
								featureType: "poi.park",
								elementType: "geometry",
								stylers: [{ color: "#263c3f" }],
							},
							{
								featureType: "poi.park",
								elementType: "labels.text.fill",
								stylers: [{ color: "#6b9a76" }],
							},
							{
								featureType: "road",
								elementType: "geometry",
								stylers: [{ color: "#38414e" }],
							},
							{
								featureType: "road",
								elementType: "geometry.stroke",
								stylers: [{ color: "#212a37" }],
							},
							{
								featureType: "road",
								elementType: "labels.text.fill",
								stylers: [{ color: "#9ca5b3" }],
							},
							{
								featureType: "road.highway",
								elementType: "geometry",
								stylers: [{ color: "#746855" }],
							},
							{
								featureType: "road.highway",
								elementType: "geometry.stroke",
								stylers: [{ color: "#1f2835" }],
							},
							{
								featureType: "road.highway",
								elementType: "labels.text.fill",
								stylers: [{ color: "#f3d19c" }],
							},
							{
								featureType: "transit",
								elementType: "geometry",
								stylers: [{ color: "#2f3948" }],
							},
							{
								featureType: "transit.station",
								elementType: "labels.text.fill",
								stylers: [{ color: "#d59563" }],
							},
							{
								featureType: "water",
								elementType: "geometry",
								stylers: [{ color: "#17263c" }],
							},
							{
								featureType: "water",
								elementType: "labels.text.fill",
								stylers: [{ color: "#515c6d" }],
							},
							{
								featureType: "water",
								elementType: "labels.text.stroke",
								stylers: [{ color: "#17263c" }],
							},
						],
					}}
				>
					<Marker position={{ lat: 33, lng: 133 }}></Marker>
				</GoogleMap>
			</LoadScript>
			<Window>
				<Window.ImgContainer>
					<Window.Img src={img1}></Window.Img>
					<Window.Title>
						<Window.H1>Contact Us</Window.H1>
						<Window.P>Feel free to drop us a line below!</Window.P>
					</Window.Title>
				</Window.ImgContainer>
				<Login></Login>
			</Window>
		</>
	);
};

export default Contact;
