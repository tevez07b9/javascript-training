import React from "react";

class UsernameInput extends React.Component {
  state = {
    username: "",
    isCheckingAvailability: false,
    isTaken: undefined,
  };

  isNameAvailable = async (name) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isAvailable = name.length > 5;
        resolve(isAvailable);
      }, 3000);
    });
  };

  handleInputChange = async (event) => {
    const name = event.target.value;
    this.setState({
      isCheckingAvailability: true,
      username: event.target.value,
    });
    const isAvailable = await this.isNameAvailable(name);
    this.setState({ isCheckingAvailability: false, isTaken: !isAvailable });
  };

  render() {
    const { isTaken } = this.state;
    const nameIsTaken = isTaken === true;
    const nameIsAvailable = isTaken === false;

    return (
      <div className="control">
        <input
          className="input"
          style={{ maxWidth: "200px", display: "inline-block" }}
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        {this.state.isCheckingAvailability && "Checking availability ..."}
        {!this.state.isCheckingAvailability && nameIsAvailable && (
          <img
            src="https://image.flaticon.com/icons/png/512/189/189677.png"
            width="15"
            style={{ marginLeft: 10, position: "relative", top: 3 }}
          />
        )}
        {!this.state.isCheckingAvailability && nameIsTaken && (
          <img
            src="https://image.flaticon.com/icons/png/512/753/753345.png"
            width="15"
            style={{ marginLeft: 10, position: "relative", top: 3 }}
          />
        )}
      </div>
    );
  }
}

const SyntheticEvents = () => {
  return (
    <div>
      <h1 className="title">SyntheticEvent</h1>
      <div className="container">
        <UsernameInput />
      </div>
    </div>
  );
};

export default SyntheticEvents;
