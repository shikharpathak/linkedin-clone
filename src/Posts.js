import React , {forwardRef} from 'react'
import { Avatar } from '@material-ui/core';
import './Posts.css'
import InputOptions from './InputOptions';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
const Posts = forwardRef(({name , description , message, photoURL}, ref) => {
    return (
      <div ref={ref} className="posts">
        <div className="post_header">
          <Avatar src={photoURL}>{name[0]}</Avatar>
          <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post_body">
          <p>
          {message}
          </p>
        </div>
        <div className="post_buttons">
          <InputOptions Icon={ThumbUpIcon} title="Like" colour="gray" />
          <InputOptions Icon={ChatIcon} title="Comment" colour="gray" />
          <InputOptions Icon={ShareIcon} title="Share" colour="gray" />
          <InputOptions Icon={SendIcon} title="Send" colour="gray" />
        </div>
      </div>
    );
})

export default Posts
