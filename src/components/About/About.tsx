import React from 'react'
import { Layout } from '../../shared/layout/Layout'

export const About = () => {
  return (
    <Layout phrase='About me...'>
      <div className="p-4">
        <div className="flex items-center justify-center flex-col bg-slate-200 rounded-lg">
          <h1>About me...</h1>
          <p>A little talk about the note hero's dev</p>
        </div>
        <div className="flex items-center justify-center flex-col bg-slate-200 rounded-lg mt-4">
            <h1 className="mt-4 mb-2">Who am i?</h1>
            <p className="w-72 mb-4">
              Hello there! my name is Guilherme surica, but my username which i always use are "Gsurica". 
              This small project, was made for a hiring test. And while i was doing it, my mind just exploded with every line of code made. I really learned a lot making this project, that's not perfect as all, but, for me, this project change my mind about whats is coding and how to do it? In other words, i'm really grateful for the oportunity and i thanks for everyone which trust me and helped me to get me in that test! 

              That's all folks!
            </p>
        </div>
      </div>
    </Layout>
  )
}
