import React from "react";
import { Comment, Tooltip, Avatar } from "antd";

function ChatCard(props) {
  return (
    <div style={{ width: '100%' }}>
      <Comment
        author={props.sender.name}
        avatar={
          <Avatar
            src={props.sender.image} alt={props.sender.name}
          />
        }
        content={
          props.message.substring(0, 8) === "uploads\\" ?
            props.message.substring(props.message.length - 3, props.message.length) === 'mp4' ?
              <video
                style={{ maxWidth: '300px' }}
                src={`http://localhost:5000/${props.message}`} alt="video"
                type="video/mp4" controls />
              :
              <img
                style={{ maxWidth: '300px' }}
                src={`http://localhost:5000/${props.message}`}
                alt="img" />
            :
            <p>
              {props.message}
            </p>
        }
        datetime={
          <Tooltip>
            <span>{props.time}</span>
          </Tooltip>
        }
      />
    </div>
  )
}

export default ChatCard;
/*return (
    <div style={{ width: "100%" }}>
      <Comment
        author={props.sender.name}
        avatar={<Avatar src={props.sender.image} />}
        content={<p>{props.message}</p>}
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    </div>
  );*/
