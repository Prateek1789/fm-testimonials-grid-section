import './App.css'

import danielImage from './assets/images/image-daniel.jpg'
import jonathanImage from './assets/images/image-jonathan.jpg'
import kiraImage from './assets/images/image-kira.jpg'
import jeanetteImage from './assets/images/image-jeanette.jpg'
import patrickImage from './assets/images/image-patrick.jpg'
import bgQuote from './assets/images/bg-pattern-quotation.svg'
import Card from './components/Card'


function App() {
  const userReviews = [
    {
      name: 'Daniel Clifford',
      title: 'Verified Graduate',
      intro: 'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
      testimonial: '"I was an EMT for many years before I joined the bootcamp. I ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup."',
      color: 'bg-Purple-500',
      image: danielImage,
      backgroundImage: bgQuote,
    },
    {
      name: 'Jonathan Walters',
      title: 'Verified Graduate',
      intro: 'The team was very supportive and kept me motivated',
      testimonial: '"I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself."',
      color: 'bg-Grey-500',
      image: jonathanImage, 
      backgroundImage: "",
    },
    {
      name: 'Jeanette Harmon',
      title: 'Verified Graduate',
      intro: 'An overall wonderful and rewarding experience',
      testimonial: '"Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."',
      color: 'bg-White',
      image: jeanetteImage,
      backgroundImage: "",
    },
    {
      name: 'Patrick Abrams',
      title: 'Verified Graduate',
      intro: 'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
      testimonial: '"The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."',
      color: 'bg-Dark-blue',
      image: patrickImage,  
      backgroundImage: "",
    },
    {
      name: 'Kira Whittle',
      title: 'Verified Graduate',
      intro: 'Such a life-changing experience. Highly recommended!',
      testimonial: '"Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"',
      color: 'bg-White',
      image: kiraImage,
      backgroundImage: "",
    },
  ];

  return (
    <>
      <main className='container w-full h-full max-w-[25rem] grid grid-rows-[repeat(4,auto)] gap-8 md:max-w-screen-md md:grid-cols-2 md:grid-rows-[repeat(4,auto)] xl:max-w-[78rem] xl:grid-cols-[repeat(4,1fr)] xl:grid-rows-[repeat(2,1fr)]'>
        {userReviews.map((review) => (
          <Card 
            key={review.name} 
            name={review.name} 
            title={review.title} 
            intro={review.intro} 
            testimonial={review.testimonial}
            color={review.color}
            image={review.image} 
            backgroundImage={review.backgroundImage}
          />
        ))}
      </main>
    </>
  )
}

export default App
