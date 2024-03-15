
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import MainCard from './MainCard'
import { useState } from 'react'

function App() {
  const [card, setCard] = useState([])

  useEffect(() => {
    fetch('./fakeData.json')
      .then(res => res.json())
      .then(data => {
        setCard(data);
      })
  }

    , [])
  console.log(card);

  return (
    <>

      <Header></Header>

      <div className='container mx-auto'>
        <div className='mt-8'>
          <h3 className='text-3xl mt-8 text-center font-bold'>Our Recipes</h3>
          <p className='font-normal text-center'>From beginners to seasoned cooks, our classes cater to all skill levels. Join us for an unforgettable culinary experience. Embark on a flavorful journey <br /> and master the art of cooking with our interactive and engaging classes</p>
        </div>

        <div className='flex justify-between mt-8'>
          <div className='w-2/3 gap-4 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 '>
          {
          card.map(pd => <MainCard card={pd}
          ></MainCard>)
        }
          </div>
       


        <div className="border-2 rounded-2xl w-1/3">
          <h3 className='text-center text-2xl font-bold mt-6'>Want to Cook</h3>
          <hr />
          
        </div>
        </div>
       
      </div>







    </>
  )
}

export default App
