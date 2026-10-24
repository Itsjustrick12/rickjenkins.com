import freaky from '../assets/freaky.jpg'
import '../App.css'
import ListGroup from '../components/ListGroup'

export function Home(){
  return (
    <div className="page-container">
      <h1 align="center" style={{paddingBottom:"1rem"}}>Welcome to <strong>rickjenkins.com</strong>!</h1>
      {/* Large homepage cover image */}
      <section className="home-hero">
        <img
          src="/WebsiteCoverImage.jpg"
          alt="Website cover image"
          className="home-hero-image"
        />
      </section>
      {/* Primary Content divider */}
      <div> 
      
      <div className="section-container">
        {/* Left Section */}
        <section className='content-box-square'>
          <h2>Why Not Just Use Social Media?</h2>
          <p>
            I am starting this site to have a fun way to update my friends on what I've been up to. Many people might think that I'm 
            "anti social media," but the truth is I just have no self control when it comes to short form content. 
          </p>
          <p>
            I've wanted to make this since I first watched <a href='https://www.youtube.com/watch?v=r0RqucKwIcw'> this video by Lrnjulie</a> about
            a year and a half ago. In the video, she talks about how nice it is to post out into the void without the 
            potential to be impacted by the reactions people have to your posts or getting sucked into other peoples content.
            I know I'm not the only one gets a blow to my self confidence when an Instagram post doesn't get the engagement I expect it to. I bet you have probably feel that too at some point, that shit hurts!
          </p>
          <p>
            I hope to have a well put together final-ish product of what I want for this site by the end of 2026 as it is one
            of my goals for the year to maintain and update a personal website for fun, not necessarily as a professional portfolio.
          </p>
        </section>
        {/* Tall Image Section */}

        <section className='content-box-square'>
          <h2>The Purpose</h2>
          <p>
            I'm also committing myself to restricting AI use for this project as I have mentally set myself back by using the tools
            extensively across my education and work life. The consequences of my AI use has left me with wicked imposter syndrome that I hope to shake as I stop sacrifing my own
            growth in the name of "efficiency."
          </p>
          <p>
            I went from being an easily rage baitable AI hater to someone who actively cognitively surrenders to it in favor
            of gaining back "free time" that quickly converts to some unproductive habit.
          </p>
          <p>
            This website is for me, but I hope you see the fruits of my labor as
            I fall back in love with teaching myself things again. The website is being built with Vite's flavor of React. Thanks for checking out the site!
          </p>
        </section>
      </div>
      </div>
    </div> 
  )
}