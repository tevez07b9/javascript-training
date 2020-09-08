import React from "react";

// This function takes a component...
function DataContainer(selectData, WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData,
      };
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

const PostsList = (props) => {
  console.log(props);
  return (
    <div className="container">
      {props.data.map((item) => (
        <li>
          <h3 className="subtitle is-5">{item.title}</h3>
          <p>Likes: {item.likes}</p>
        </li>
      ))}
    </div>
  );
};

const HigherOrderComponents = () => {
  const postData = [
    { title: "Test Post 1", likes: 30 },
    { title: "Test Post 2", likes: 10 },
    { title: "Test Post 3", likes: 13 },
    { title: "Test Post 4", likes: 25 },
    { title: "Test Post 5", likes: 33 },
  ];

  const PostListing = DataContainer(postData, PostsList);
  console.log("postlisting", <PostListing />);

  return (
    <div>
      <h1 className="title">Higher-Order Components</h1>
      <PostListing />
    </div>
  );
};

export default HigherOrderComponents;
