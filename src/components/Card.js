import React from "react"

import { StyledCard } from "../styles/components"

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
              <a href="/resources/blog/blogger/pslcorp" rel="author">
                PSL Corp
              </a>
            </span>
          </div>
          <div className="eb-post-date text-muted">
            <time className="eb-meta-date" content="2020-01-09">
              Thursday, 09 January 2020{" "}
            </time>
          </div>
        </div>
      </div>
    </StyledCard>
  )
}
