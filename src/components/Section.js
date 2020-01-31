import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { StyledSection } from "../styles/components"

export default function Section() {
  return (
    <StyledSection>
      <div className="custom-labs-case-studies">
        <div className="container">
          <span>Our passion is coding the future</span>
          <h1
            style={{
              fontSize: `4.375rem`,
              lineHeight: `4.688rem`,
              margin: `6.25rem 0 0.875rem`,
              color: `white`,
              padding: 0,
              fontWeight: 800,
            }}
          >
            Nearshore Software Development
            <strong>Offshore Outsourcing Center</strong>
          </h1>
          <div className="dp-flex">
            <a className="btn btn-primary"> Contact us today! </a>
            <a
              className="btn btn-primary dp-flex"
              href="https://youtu.be/UxLy8BkSl1E"
              target="_blank"
            >
              Watch our video
              <div className="btn-video">
                <i className="caret-2"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}
