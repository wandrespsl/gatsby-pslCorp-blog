import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      position: `fixed`,
      left: 0,
      top: 0,
      width: `100%`,
      padding: `0.625rem 0 0.625rem 2.625rem`,
      zIndex: 10000,
      transition: `all 0.5s ease`,
      height: `auto`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Image />
      <Link to="/" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
