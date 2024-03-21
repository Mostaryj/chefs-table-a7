import PropTypes from 'prop-types'
 import Button from './Button'
 import SingleCook from './SingleCook'
import { useState } from 'react';



const WantToCook = ({ wantToCook, setWantToCook }) => {

    const [current, setCurrent] = useState([]);


    const handlePreparing = (i) =>{

        setCurrent([...current, i])
        const removeCook = wantToCook.filter((item) => item.id !== i.id);
        setWantToCook(removeCook);
    }
 

    return (
        <div>
             <h3 className='text-center text-2xl font-bold mt-6'>Want to Cook: {wantToCook.length}</h3>
            <hr className='mt-2'/>
            <div className='flex justify-around text-lg font-medium'>
            <p></p>
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
          <p></p>
          
         </div>
         <hr />

           {
            wantToCook.map((wantToCook, index)  => <SingleCook 
                key={wantToCook.id}
                 wantToCook={wantToCook}
                 index = {index}
               
                 handlePreparing={handlePreparing}
               
                 ></SingleCook>)
           } 



       <h3 className='text-center text-2xl font-bold mt-6'>Currently cooking: {current.length}</h3>
           <hr className='mt-2'/>
            <div className='flex justify-around text-lg font-medium'>

            {/* <p></p>    */}
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
          {/* <p></p>           */}
         </div> 

       
         {
                  current.map((removeCook, idx) => <Button
                    key={removeCook.id}
                    wantToCook={wantToCook}
                    removeCook={removeCook}
                    idx ={idx}
                    
                    > </Button>)

          }

        </div>


        
    );
};

export default WantToCook;

WantToCook.propTypes = {
    wantToCook: PropTypes.array,
    handlePreparing:PropTypes.func,
    setWantToCook:PropTypes.func
}
