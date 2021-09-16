import React from 'react'
import { Octocat } from './components/Octocat'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Reactocats from './reactodex.json'

// interface IOctocatProps {
//   authors?: Author
//   link?: string
//   image?: string
//   number?: number
//   name?: string
// }

export function App() {
  // convertOctocatObjectToComponent(octocat: {
  //   number: number
  //   name: string
  //   image: string
  //   link: string
  //   authors: Author
  // }) {
  //   return (
  //     <Octocat
  //       number={octocat.number}
  //       name={octocat.name}
  //       image={octocat.image}
  //       link={octocat.link}
  //       authors={octocat.authors}
  //     />
  //   )
  // }

  // render() {
  //   const octocatsFromData = reactocats.data.map(
  //     this.convertOctocatObjectToComponent
  //   )

  const ReactocatsFromData = Reactocats.data.map((reactocat) => (
    <Octocat
      key={reactocat.number}
      number={reactocat.number}
      name={reactocat.name}
      image={reactocat.image}
      link={reactocat.link}
      authors={reactocat.authors}
    />
  ))

  return (
    <div>
      <Header />
      <main>
        <div className="octocat-container">{ReactocatsFromData}</div>
      </main>
      <Footer />
    </div>
  )
}
