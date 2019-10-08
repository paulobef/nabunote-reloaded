import React, { useState } from "react";
import Editor from "react-medium-editor";
import EmojiPicker from "./emojiPicker";
import "../css/medium/medium-editor.min.css";
import "../css/medium/themes/nabutool.css";
import "../css/nabunote.css";
import getSelectionRange from "../utils/getSelectionRange";
import { randomEmoji, randomTitle } from '../utils/random'


//------------------------------------------------------------------------
// random placeholders

const rdmTitle = randomTitle();
const rdmEmoji= randomEmoji();

//---------------------------------------------------------------------

const editor = () => {
  const [range, setRange] = useState(0);
  const [emoji, setEmoji] = useState(false)
  const [rect, setRect] = useState({
    top: '50px',
    left: '50px'
  })

  const handleCloseEmojiPicker = () => {
    setEmoji(false);
  };
  const handleOpenEmojiPicker = () => {
    setEmoji(true);
  };

  const handleChange = () => {
    setRange(getSelectionRange().cloneRange());
    setRect(range.getBoundingClientRect())
  };

  const addEmoji = emoji => {
    if (!range) {
      return;
    } else {
      const span = document.createElement("span");
      span.innerHTML = emoji.native;

      return range.insertNode(span);
    }
  };

  document.addEventListener('keydown', event => {
    if (event.metaKey && event.key.toLowerCase() == 'e') {
      if (!emoji) {
        handleOpenEmojiPicker();
      } else {
        handleCloseEmojiPicker();
      }
    }
  })



  return (
    <div className="editable" >
      <EmojiPicker style={{ position: 'absolute', top: (rect.top + 50) + 'px', left: rect.left, zIndex: 1, display: emoji ? 'block' : 'none' }} onSelect={addEmoji} />
      <Editor
        onChange={handleChange}
        onClick={handleCloseEmojiPicker}
        tag="h1"
        className="no-focus-outline medium-editor-h1"
        options={{
          placeholder: {
            text: 'Your '+ rdmTitle +' Title ' + rdmEmoji,
            hideOnClick: false
          }
        }}
      ></Editor>
      <Editor
        className="no-focus-outline"
        tag="div"
        onChange={handleChange}
        onClick={handleCloseEmojiPicker}
        text={null}
        options={{
          toolbar: {
            buttons: ["bold", "italic", "unorderedlist", "anchor", "h2", "h3", "emoji-button"]
          },
          placeholder: {
            text: 'Press ⌘+E for Emojis!',
            hideOnClick: false
          },


        }}
      ></Editor>
    </div>
  );
};

export default editor;
