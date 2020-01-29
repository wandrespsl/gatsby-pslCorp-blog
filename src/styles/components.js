import styled from "styled-components"

export const colors = {
  ligthBlue: "##21d4fd",
  purple: "#B720FF",
  darkPurple: "#2d2045",
  textGray: "#888888",
  red: "#e60023",
  ligthGray: "#f5f5f5",
  black: "#060606",
}

export const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 10px 0 10px 42px;
  z-index: 10000;
  transition: all 0.5s ease;
  height: auto !important;
`

export const StyledCard = styled.div`
  border-radius: 15px !important;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.1);
  padding: 0;
  border: none !important;
`
