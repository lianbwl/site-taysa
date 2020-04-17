import { theme } from "./theme";

export const header = {
	padding: "60px 0",
	backgroundColor: "rgba(255, 255, 255, 0.5)",
	position: "absolute",
	left: "0",
	top: "calc(50% - 160px)",
	width: "100%",
};

export const viewLayoutBox = {
	padding: "10px 20px",
	width: "100%",
	boxSizing: "border-box",
	background: theme.vivocolors.cinza1,
};

export const miscStyles = {
	header,
	viewLayoutBox,
};
