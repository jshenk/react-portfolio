import React from 'react';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return  (
      <a className="text-blue-500 hover:text-blue-800" href={this.props.href} onClick={this.props.handler}>{this.props.title}</a>
    );
  }
}
export default MenuItem;
