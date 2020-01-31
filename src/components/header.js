import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Image from "./image"
import { StyledHeader } from "../styles/components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Image />
    <Link to="/" />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
