import { useState } from 'react'
import freaky from './assets/freaky.jpg'
import './App.css'
import ListGroup from './components/ListGroup'

function App() {
  return (
    <>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', marginTop: 125,  marginRight: 250, marginLeft: 250}}>

      <section id="center">
        <h1 align="center">Welcome to <strong>rickjenkins.com</strong>!</h1>
        
        <div class="horicenter">
          <p>
            I am starting this site to have a fun way to update my friends on what I've been up to. Many people know that I'm 
            "anti social media" but the truth is I just have no self control when it comes to short form content. I've wanted 
            to make this since I first watched <a href='https://www.youtube.com/watch?v=r0RqucKwIcw'> this video by Lrnjulie</a> about
            a year and a half ago. In the video she talks about how nice it is to post out into the void without the 
            potential to be impacted by the reactions people have to your posts or getting sucked into other peoples content.
            I hope to have a well put together final-ish product of what I want for this site by the end of 2026 as it is one
            of my goals for the year to maintain and update a personal website for fun, not necessarily as a professional portfolio.
          </p>
          <p>
            I'm also committing myself to not using AI at all to learn how to build this website as I have mentally set myself back by using the tools
            extensively across my education and work life. It has gave me wicked imposter syndrome that I hope to shake as I stop sacrifing my own
            growth in the name of "efficiency." I went from being an easily rage baitable AI hater to someone who actively cognitively surrenders to it in favor
            of gaining back "free time" that quickly converts to some unproductive habit. This website is for me, but I hope you see the fruits of my labor as
            I fall back in love with teaching myself things again. Thanks for checking out the site!
          </p>
        
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:25,  marginRight: 500, marginLeft: 250}}></div>
            <h2 align="center">A Gift For You:</h2>
            <div class="image-container">
              <img src={freaky} alt="freaky individual" width={500} height={500} align="center"/>
            </div>
            <p align="center" >
              As a reward for you being early, you get to look at this picture of young me posing like a little 🏳️‍🌈 boy.
            </p>
          </div>
        <div class="alert alert-primary" role="alert">
          This site is NOT done yet! Stay tuned for further updates :)
        </div>

        <ListGroup align="center"></ListGroup>

      </section>
      </div>

    </>
  )
}

export default App
