import './App.css'
import userReviewData from './data/userReviewData'
import Card from './components/Card'

function App() {
  return (
    <>
      <main className='container w-full h-full max-w-[25rem] grid grid-rows-[repeat(4,auto)] gap-8 md:max-w-screen-md md:grid-cols-2 md:grid-rows-[repeat(4,auto)] xl:max-w-[78rem] xl:grid-cols-[repeat(4,1fr)] xl:grid-rows-[repeat(2,1fr)]'>
        {userReviewData.map((review) => (
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
