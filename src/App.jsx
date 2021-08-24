import React from "react";

import "./App.css";
export default function App() {
  return (
    <div className="first">
      <div className="second">
        <div className="third">
          <div className="ifourth">Curated</div>
          <div>
            <div className="ififth">
              A social reading app for articles, blogs, and newsletters.
            </div>
            <div className="isixth">
              <span className="iseventh">Click here for early access.</span>
            </div>
          </div>

          <form classname="ieighth">
            <input
              placeholder="Nickname"
              type="text"
              autocomplete="on"
              className="ininth"
            />
            <input
              placeholder="Email"
              type="text"
              autocomplete="on"
              className="ininth"
            />
            <input type="submit" className="isixth" />
            <button className="isixth">
              <span className="iseventh">Join waitlist</span>
            </button>
            <div className="isixth">
              <span className="iseventh">Join waitlist</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
