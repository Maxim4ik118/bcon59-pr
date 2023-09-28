import { Component } from "react";

export class PostForm extends Component {
  state = {
    title: '',
    content: '',
  }

  onInputChange = (event) => {
    
  }




  render() {
    return <form>
      <h2 > {this.props.title}</h2>
      <label>
        <span > Title: </span>
        <input type="text" name="title" value={this.state.title} />
      </label>
      <label>
        <span > Content: </span>
        <input type="text" name="content" value={this.state.content} />
      </label>
      <button type="submit" >add post</button>
    </form>
  }



}