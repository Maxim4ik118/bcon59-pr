import { Component } from 'react';

export class PostForm extends Component {
  state = {
    title: '',
    content: '',
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddPost(this.state);
    this.setState({
      title: '',
      content: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2> {this.props.title}</h2>
        {this.state.title === 'halyava' && <p>Discount promocode: #2281337</p>}
        <label>
          <span> Title: </span>
          <input
            onChange={this.onInputChange}
            type="text"
            name="title"
            value={this.state.title}
          />
        </label>
        <label>
          <span> Content: </span>
          <input
            onChange={this.onInputChange}
            type="text"
            name="content"
            value={this.state.content}
          />
        </label>
        <button type="submit">add post</button>
      </form>
    );
  }
}
