import React from "react";

const FancyForm = React.forwardRef((props, ref) => (
  <form action="">
    <div className="container">
      <div className="field has-addons" style={{ justifyContent: "center" }}>
        <div className="control">
          <input
            className="input"
            ref={ref}
            type="text"
            placeholder="Text Input..."
          />
        </div>
        <div className="control">
          <input
            type="button"
            value="Focus the text input"
            class="button is-link"
            onClick={props.focusTextInput}
          />
        </div>
      </div>
    </div>
  </form>
));

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    return (
      <div className="container">
        <FancyForm ref={this.textInput} focusTextInput={this.focusTextInput} />
      </div>
    );
  }
}

const forwardRefs = () => {
  return (
    <div>
      <h1 className="title">Forwarding Refs</h1>
      <PostContainer />
      <p>Here the PostContainer is passing refs to childs of FancyForm</p>
    </div>
  );
};

export default forwardRefs;
