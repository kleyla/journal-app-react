import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className=""
          name=""
          className="notes__title-input"
        />
        <textarea
          name=""
          placeholder="What happend today"
          className="notes__textarea"
          cols="30"
          rows="10"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/unsplash-Josh-Earl.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
