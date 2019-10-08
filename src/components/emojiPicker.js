import React from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const emojiPicker = props => (
  <Picker set="emojione" title='Nabunote' emoji="unicorn_face" native={true} {...props} />
);

export default emojiPicker;
