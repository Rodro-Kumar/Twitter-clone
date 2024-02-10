import React from "react";
import { BsThreeDots } from "react-icons/bs";

import { FaRegComment } from "react-icons/fa";

const Post = ({ img, user_name, user_description, post_pic, comment }) => {
  return (
    <>
      <div className="post bg-red-600">
        <div className="user flex gap-x-3">
          <div className="top flex">
            <img src={img} alt={img} className="h-14 w-14 rounded-full" />
            <div className="user-name-description">
              <div className="name">
                <h3>
                  {user_name ? user_name : "NASA"} <BsThreeDots />
                </h3>
              </div>
            </div>

            <p>
              {user_description
                ? user_description
                : "We're targeting no earlier than Thursday, Feb. 22, for the launch of NASA's @SpaceX Crew-8 mission to the @Space_Station. Get the details on our #Crew8 blog: https://go.nasa.gov/3Oruudt"}
            </p>
          </div>
        </div>
        <div className="post-img">
          <picture>
            <img src={post_pic} />
          </picture>
        </div>
        <div className="reaction">
          <div className="comment">
            <FaRegComment />
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
