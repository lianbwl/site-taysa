import styled from "styled-components";

const sizeBase = 10;

const screensSizes = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};

export const device = {
	mobileS: `(min-width: ${screensSizes.mobileS})`,
	mobileM: `(min-width: ${screensSizes.mobileM})`,
	mobileL: `(min-width: ${screensSizes.mobileL})`,
	tablet: `(min-width: ${screensSizes.tablet})`,
	laptop: `(min-width: ${screensSizes.laptop})`,
	laptopL: `(min-width: ${screensSizes.laptopL})`,
	desktop: `(min-width: ${screensSizes.desktop})`,
	desktopL: `(min-width: ${screensSizes.desktop})`,
};

export const Grid = styled.div`
	display: flex;
	height: auto;
	width: ${(props) => props.width || "auto"};
	flex: ${(props) => props.flex || "0 1 auto"};
	flex-direction: ${(props) => props.direction || "row"};
	flex-flow: ${(props) => props.flexFlow || "initial"};
	padding: ${(props) => props.padX || "0"} ${(props) => props.padY || "0"};

	@media ${device.tablet} {
		flex-direction: column !important;
	}

	${(props) => (props.alignCenter ? "margin: 0 auto" : "none")};

	> *:not(:last-child) {
		margin-right: ${(props) => props.gapX || "none"};
	}

	> *:not(:last-child) {
		margin-bottom: ${(props) => props.gapY || "none"};
	}

	justify-content: ${(props) => props.alignX || "flex-start"};
	align-items: ${(props) => props.alignY || "flex-start"};

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

// DO THE SAME AS GRID BUT WITH A NAME THATS FIT BETTER THE ITENS INSIDE GRID
export const GridItem = styled(Grid)``;

export const HeaderBlock = styled.header`
	width: 100%;
	display: block;
	height: ${(props) => props.height || "auto"};
	background: ${(props) => props.theme.jailmailcolors.cinza1};

	.logo {
		width: auto;
		height: ${(props) => props.logoheight || "auto"};
		min-height: ${sizeBase * 4}px;
	}

	.header-title {
		font-size: ${sizeBase * 1.4}px;
		color: ${(props) => props.theme.vivocolors.white};
		font-weight: 500;
		line-height: 1;
	}

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const Wrapper = styled.section`
	width: ${(props) => props.width || "90%"};
	height: ${(props) => props.height || "auto"};
	margin: 0 auto;
	padding: ${(props) => (props.pad ? props.pad : sizeBase * 2)}px;

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const Block = styled.div`
	display: flex;
	height: auto;
	flex: ${(props) => props.flex || "0 1 auto"};
	flex-direction: ${(props) => props.direction || "row"};
	justify-content: ${(props) => props.alignX || "flex-start"};
	align-items: ${(props) => props.alignY || "flex-start"};

	> *:not(:last-child) {
		margin-right: ${(props) => props.gapX || "none"};
	}

	> *:not(:last-child) {
		margin-bottom: ${(props) => props.gapY || "none"};
	}

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const Title = styled.h1`
	display: block;
	font-weight: 400;
	text-align: ${(props) => props.alignText || "center"};
	font-family: ${(props) => props.font || "Helvetica"};
	font-size: ${(props) => props.size || sizeBase * 5};
	color: ${(props) => props.color || props.theme.taysacolors.red};
	margin: ${(props) => props.margin || "20px 0"}
		// EXTERNAL CSS TO BE INJECTED;
		${(props) => props.extStyles};
`;

export const Button = styled.button`
	background: ${(props) => (props.flatBt ? props.theme.main : "none")};
	border: ${(props) =>
		props.noBorder
			? "none"
			: "1px solid" +
			  (props.flatBt ? props.theme.white : props.theme.main)};
	color: ${(props) => (props.flatBt ? props.theme.white : props.theme.main)};
	
	cursor: pointer;
	border-radius: 2px;
	padding: ${(props) => props.padSize || sizeBase * 1.4 + "px"};
	text-transform: uppercase;
	font-size: ${(props) => props.fontSize || "14px"};
	font-weight: 700;
	flex: ${(props) => props.flexSize || "0 1 auto"};

	/* COLOR WARN */
	${(props) =>
		props.color === "warn" &&
		`
		background: ${props.flatBt ? props.theme.warn : "none"};
		border-color: ${props.theme.warn};
		color: ${props.flatBt ? "none" : props.theme.warn};
	`}

	&:hover {
		opacity: 0.6;
		text-decoration: underline;

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const List = styled.ul`
	list-style: ${(props) => props.style || "none"};
	width: ${(props) => props.width || "auto"};

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const ListItem = styled.li`
	display: list-item;
	margin-bottom: ${(props) => props.marginBotton || "20px"};

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const Picture = styled.picture`
	line-height: 0;
	border: solid ${(props) => props.borderWidth || sizeBase * 0.2 + `px`}
		${(props) => props.theme.main};

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const Chips = styled.span`
	padding: ${sizeBase * 0.6}px ${sizeBase * 1.2}px;
	border: 1px solid ${(props) => props.theme.main};
	border-radius: ${sizeBase * 1.4}px;
	margin-right: ${sizeBase * 0.6}px;
	display: ${(props) => props.display || "inline-block"};
	flex: ${(props) => props.width || "0 1 auto"};

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const SelectBox = styled.select`
	width: 100%;
	padding: ${sizeBase * 1.2}px ${sizeBase * 2}px;
	cursor: pointer;
	border: none;
	color: ${(props) => props.theme.main};
	background: ${(props) => props.theme.main};
	text-align: center;
	appearance: none;
	border: solid 1px ${(props) => props.theme.main};

	// EXTERNAL CSS TO BE INJECTED;
	${(props) => props.extStyles};
`;

export const UserLogged = styled.div`
	padding: ${sizeBase * 1.6}px;
	border-radius: ${sizeBase * 2.5}px;
	font-size: ${sizeBase * 1.6}px;
	font-weight: 500;
	color: ${(props) => props.theme.vivocolors.white};
	background: ${(props) => props.theme.jailmailcolors.azul4};
`;

export const MenuHeader = styled.ul`
	display: flex;
	list-style: none;
	width: ${(props) => props.width || "auto"};
	height: ${(props) => props.height || "auto"};
	padding: 0;
	margin: 0;
`;

export const MenuHeaderItem = styled.li`
	color: ${(props) => props.theme.vivocolors.white};
	display: flex;

	a {
		display: flex;
		justify-content: ${(props) => props.alignX || "flex-start"};
		align-items: ${(props) => props.alignY || "flex-start"};
		padding: ${(props) => props.padY || "0"} ${(props) => props.padX || "0"};
		width: ${(props) => props.width || "auto"};
		color: ${(props) => props.theme.vivocolors.white};
		text-decoration: none;
		height: ${(props) => props.height || "auto"};
		line-heigth: 1.4;

		&:hover {
			text-decoration: underline;
		}

		&.is-active {
			background: ${(props) => props.theme.jailmailcolors.cinza2};
		}
	}
`;
