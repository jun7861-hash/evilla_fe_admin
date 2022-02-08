import styled, { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
};

export const StyledApp = styled.div`
  color: ${(props: any) => props.theme.fontColor};
`;

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props: any) => props.theme.body};
	}
`;
