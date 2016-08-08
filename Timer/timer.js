class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  tick() {
    this.setState({ value: this.state.value + 1 });
  }

  componentDidMount() {
    this.internval = setInterval(
      this.tick.bind(this),
      this.props.interval
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}

Timer.defaultProps = {
  interval: 1000
};
