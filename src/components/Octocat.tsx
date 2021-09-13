import React from 'react'
// import React, { Component } from 'react'
// import { Author } from './Author'

export function App() {
  return (
    <div>
      <p>Hello, Dom!</p>
      <footer>
        <img src="icons/footer/favicon.png" alt="Monk" />
      </footer>
    </div>
  )
}

// interface ICatProps {
//   author?: Author
//   link?: string
//   image?: string
//   number?: number
//   name?: string
// }

// export class Octocat extends Component<ICatProps> {
//   convertAuthorObjectToComponent(author: { link: string; image: string }) {
//     return <Author link={author.link} image={author.image} />
//   }
//   render() {
//     const authorsFromData = this.props.author.map(
//       this.convertAuthorObjectToComponent
//     )
//     return (
//       <div>
//         <figure>
//           <a href={this.props.link}>
//             <img src={this.props.image} alt="" />
//           </a>
//         </figure>

//         <div className="item-footer">
//           <div>
//             <span>#{this.props.number}</span>
//             <a href="#">{this.props.name}</a>
//           </div>

//           <div className="author-icon-list">{authorsFromData}</div>
//         </div>
//       </div>
//     )
//   }
// }
