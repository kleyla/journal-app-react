import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal_entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/unsplash-Josh-Earl.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">New</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
          nostrum.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};
