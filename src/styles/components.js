import styled from "styled-components"

export const colors = {
  ligthBlue: "#21d4fd",
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
export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ type }) =>
    type === "outline" ? "transparent" : colors.purple};
  color: ${({ type }) => (type === "outline" ? colors.darkPurple : "white")};
  font-size: 0.9rem;
  padding: 0.6rem 1rem;
  font-weight: 500;
  border: ${({ type }) =>
    type === "outline"
      ? `3px solid ${colors.darkPurple}`
      : `3px solid ${colors.purple}`};
  border-radius: 12px;
  a {
    text-decoration: none;
    color: ${({ type }) => (type === "outline" ? colors.darkBlue : "white")};
  }
  &:disabled {
    background-color: ${colors.gray};
    border-color: ${colors.gray};
    cursor: not-allowed;
  }
`
export const StyledSection = styled.div`
  background: ${colors.ligthBlue};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .custom-labs-case-studies {
    height: 100%;
    padding: 4.375rem 0;
    .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      span {
        font-size: 70px;
        line-height: 75px;
        margin: 100px 0 14px;
        color: white;
        padding: 0;
        font-weight: 800;
        letter-spacing: -0.04px;
      }
      h1 {
        font-size: 26px;
        line-height: 30px;
        font-weight: 400;
        margin: 0;
        padding: 0;
        margin: 15px 0 0 0;
        color: #ffffff;
        opacity: 0.9;
      }
      .dp-flex {
        display: flex;
      }
    }
  }
`
