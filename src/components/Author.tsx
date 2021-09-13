import React, { Component } from 'react'

interface IAuthorProps {
  link?: string
  image?: string
}

export class Author extends Component<IAuthorProps> {
  render() {
    return (
      <a href={this.props.link}>
        <img src={this.props.image} alt="" />
      </a>
    )
  }
}
