import React from "react";
import PropTypes from "prop-types";

class PropsWrapperComponent extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return <div>{children}</div>;
  }
}

PropsWrapperComponent.propTypes = {
  children: PropTypes.element.isRequired,
};

const PropTypesPage = () => {
  return (
    <div>
      <h1 className="title">PropTypes</h1>
      <PropsWrapperComponent>
        <h3>Inside Props Type Component</h3>
      </PropsWrapperComponent>
    </div>
  );
};

export default PropTypesPage;
