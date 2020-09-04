import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Comment(props) {
  return (
    <>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </>
  );
}

const CompProps = () => {
  return (
    <div>
      <h1 className="title">Components and Props</h1>
      <Welcome name="Talmeez" />
      <Comment text="Test Comment" date={new Date().toLocaleDateString()} />
      <Comment text="Like Comment" date={new Date().toLocaleDateString()} />
    </div>
  );
};

export default CompProps;
