import React, { useState, useEffect } from "react";
import "./Feed.css";
import InputOptions from "./InputOptions";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import TodayIcon from "@material-ui/icons/Today";
import Posts from "./Posts";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move"
function Feed() {
    const user= useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const sendPost = (event) => {
    event.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <form>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Write a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
          <CreateIcon />
        </div>
        <div className="feed_inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" colour="#70B5F9" />
          <InputOptions
            Icon={VideoLibraryIcon}
            title="Video"
            colour="#E7A33E"
          />
          <InputOptions Icon={TodayIcon} title="Event" colour="#C0CBCD" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Article"
            colour="#7FC15E"
          />
        </div>
      </div>
      {/* Posts */}
      
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoURL } }) => (
          <Posts
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
