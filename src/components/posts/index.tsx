// import { ReactElement } from 'react'
import { FirstPost } from './firstPost'

export const posts
  // : { [key: string] : {
  //     title: string, subtitle: string, component: ReactElement 
  //   }
  // } 
  = {
  "first-post": {
    title: "First Post",
    subtitle: "This is the first post on the blog.",
    component: <FirstPost />
  }
}