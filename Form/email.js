class EmailField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      valid: true
    }
  }

  validate(value) {
    let isValid = false;

    if (value !== '') {
      if (value.search('@') !== -1) {
        isValid = true;
      }
    } else {
      isValid = true;
    }

    this.setState({
      valid: isValid,
      value: value
    });
  }

  render() {
    const { valid, value } = this.state;

    return (
      <div className={`formfield email${!valid ? ' invalid' : ''}`}>
        <label for="email">Email: </label>

        <input
          type="email"
          id="email"
          value={value}
          placeholder={this.props.placeholder}
          onChange={(ev) => this.validate(ev.target.value) }
        />

        {!valid ? <span><br />Please enter a corret email address</span> : null}
      </div>
    );
  }
}
