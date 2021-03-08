import React from "react";
import ViewSection from "./component/bugViewSection";
import BugModel from "../../../Models/bugModel";
import "./bugView.css";
import { useDispatch } from "react-redux";
import { markComplete } from "../../../Controllers/Redux/bugSlice";

export default (props) => {
  const dispatch = useDispatch();
  const bug = new BugModel(props.bug);
  return (
    <div className="bug-view">
      <h1>{bug.name}</h1>
      <button onClick={props.clicked} className="close-btn">
        Close
      </button>
      <ViewSection title="Details" info={bug.details}></ViewSection>
      <ViewSection title="Steps" info={bug.steps}></ViewSection>
      <ViewSection title="Priority" info={bug.priority}></ViewSection>
      <ViewSection title="Creator" info={bug.creator}></ViewSection>
      <ViewSection title="App Version" info={bug.version}></ViewSection>
      <ViewSection title="Time Created" info={bug.time}></ViewSection>
      <button
        onClick={() => {
          dispatch(markComplete);
        }}
      >
        Mark Complete
      </button>
    </div>
  );
};
