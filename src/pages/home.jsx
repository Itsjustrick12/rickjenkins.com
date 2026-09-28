import freaky from '../assets/freaky.jpg'
import '../App.css'
import ListGroup from '../components/ListGroup'

export function Home(){
  return (
    <div className="page-container">
      <div>
      <h1 align="center" style={{paddingBottom:"1rem"}}>Welcome to <strong>rickjenkins.com</strong>!</h1>
      <div className="section-container">
        {/* Left Section */}
        <section className='content-box-square'>
          <h2>What is this for?</h2>
          <p>
            I am starting this site to have a fun way to update my friends on what I've been up to. Many people know that I'm 
            "anti social media" but the truth is I just have no self control when it comes to short form content. I've wanted 
            to make this since I first watched <a href='https://www.youtube.com/watch?v=r0RqucKwIcw'> this video by Lrnjulie</a> about
            a year and a half ago. In the video she talks about how nice it is to post out into the void without the 
            potential to be impacted by the reactions people have to your posts or getting sucked into other peoples content.
            I hope to have a well put together final-ish product of what I want for this site by the end of 2026 as it is one
            of my goals for the year to maintain and update a personal website for fun, not necessarily as a professional portfolio.
          </p>
        </section>
        {/* Tall Image Section */}

        <section className='content-box-tall-rect'>
          <h2>A Gift For You:</h2>
          <div className='image-container'>
            <img src={freaky} alt="freaky individual" width="60%"/>
          </div>
          <p>
            As a reward for you being early, you get to look at this picture of young me acting fruity.
          </p>
        </section>
        <section className='content-box-square'>
          <h2>The Purpose</h2>
          <p>
            I'm also committing myself to not using AI at all to learn how to build this website as I have mentally set myself back by using the tools
            extensively across my education and work life. It has gave me wicked imposter syndrome that I hope to shake as I stop sacrifing my own
            growth in the name of "efficiency." I went from being an easily rage baitable AI hater to someone who actively cognitively surrenders to it in favor
            of gaining back "free time" that quickly converts to some unproductive habit. This website is for me, but I hope you see the fruits of my labor as
            I fall back in love with teaching myself things again. Thanks for checking out the site!
          </p>
        </section>

      {/* Second Section */}
      </div>
        <div className="alert alert-primary" role="alert">
          Check out the new Blog Tab! The others are empty :)
        </div>
        <ListGroup align="center"></ListGroup>
      </div>
    </div> 
  )
}