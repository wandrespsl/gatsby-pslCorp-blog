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
  background: transparent;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0.625rem 0 0.625rem 2.625rem;
  z-index: 10000;
  transition: all 0.5s ease;
  height: auto;
`

export const StyledCard = styled.div`
  border-radius: 1rem;
  box-shadow: 0px 0px 0.25rem 0 rgba(0, 0, 0, 0.1);
  padding: 0;
  border: none;
`
export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ type }) =>
    type === "outline" ? "transparent" : colors.purple};
  color: ${({ type }) => (type === "outline" ? colors.ligthBlue : "white")};
  font-size: 0.9rem;
  padding: 0.4rem 1rem;
  font-weight: 500;
  border: ${({ type }) =>
    type === "outline"
      ? `0.125rem solid ${colors.ligthBlue}`
      : `0.125rem solid ${colors.purple}`};
  border-radius: 1.313rem;
  .btn-primary {
    text-decoration: none;
    color: ${({ type }) => (type === "outline" ? colors.ligthBlue : "white")};
  }
  &:disabled {
    background-color: ${colors.gray};
    border-color: ${colors.gray};
    cursor: not-allowed;
  }
  + button {
    margin: 0 0 0 1rem;
  }
`
export const StyledSection = styled.div`
  background: ${colors.darkPurple};
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
      align-items: center;
      max-width: 60rem;
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
        font-size: 1.625rem;
        line-height: 30px;
        font-weight: 400;
        padding: 0;
        margin: 1rem 0 5rem 0;
        color: #ffffff;
        opacity: 0.9;
        strong {
          display: block;
        }
      }
      .dp-flex {
        display: flex;
      }
      .column-3 {
        width: 60%;
      }
    }
  }
`
