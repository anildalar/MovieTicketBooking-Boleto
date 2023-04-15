import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { map } from "lodash"

const Reviews = ({ comments }) => {
  return (
    <div>
      {map(comments, (comment, k) => (
        <div
          className="d-flex align-items-start border-bottom py-4"
          key={"__media__" + k}
        >
          <div className="flex-shrink-0 me-2">
            <img
              src={comment.img}
              className="rounded-circle avatar-xs"
              alt="img"
            />
          </div>
          
          <div className="flex-grow-1">
            <h5 className="font-size-15 mb-1">{comment.name} <small className="text-muted float-end">{comment.date}</small></h5>
            <p className="text-muted">{comment.description}</p>

            <Link to="#" className="text-muted font-13 d-inline-block"><i
              className="mdi mdi-reply"></i> Reply</Link>


            {comment.childComment
              ? comment.childComment.map((child, key) => (
                <div className="d-flex align-items-start mt-4" key={"_media_" + key}>
                  <div className="flex-shrink-0 me-2">
                    <img
                      src={child.img}
                      className="rounded-circle avatar-xs"
                      alt="img"
                    />
                  </div>
                  
                  <div className="flex-grow-1">
                    <h5 className="font-size-15 mt-0 mb-1">{child.name} <small className="text-muted float-end">{child.date}</small></h5>
                    <p className="text-muted">{child.description}</p>

                    <Link to="#" className="text-muted font-13 d-inline-block"><i
                      className="mdi mdi-reply"></i> Reply</Link>
                  </div>
                </div>
              ))
              : null}
          </div>
        </div>
      ))}
    </div>
  )
}

Reviews.propTypes = {
  comments: PropTypes.array,
}

export default Reviews
