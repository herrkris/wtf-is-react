class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  increment() {
    this.setState({ value: this.state.value + 1});
  }

  render() {
    const { value } = this.state;

    return (
      <div className="counter">
        <Digit value={this.state.value} />
        <button onClick={() => this.increment()}>+</button>
      </div>
    )
  }
}
