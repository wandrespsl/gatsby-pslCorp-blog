import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Image from "./image"
import { StyledHeader } from "../styles/components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <Image name="logo-psl-2019.png" />
    </Link>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
