import React from "react"

import { StyledCard } from "../styles/components"
// import { Link } from "gatsby"

export default function Card() {
  return (
    <StyledCard>
      <div>
        <div className="col-cell cell-tight">
          <div className="eb-post-avatar"></div>
        </div>
        <div className="col-cell">
          <div className="eb-post-author">
            <span>
              <a href="https://www.pslcorp.com">PSL Corp</a>
            </span>
          </div>
          <div className="eb-post-date text-muted">
            <time className="eb-meta-date">Thursday, 09 January 2020 </time>
          </div>
        </div>
      </div>
    </StyledCard>
  )
}
