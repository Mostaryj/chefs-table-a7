import PropTypes from 'prop-types'
 import SingleCook from './SingleCook';
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
            wantToCook.map((wantToCook)  => <SingleCook 
                key={wantToCook.id}
                 wantToCook={wantToCook}
                 handlePreparing={handlePreparing}
               
                 ></SingleCook>)
           } 



       <h3 className='text-center text-2xl font-bold mt-6'>Currently cooking: </h3>
           <hr className='mt-2'/>
            <div className='flex justify-around text-lg font-medium'>

           <p></p>    
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
          <p></p>
          
         </div>       
        </div>


        
    );
};

export default WantToCook;

WantToCook.propTypes = {
    wantToCook: PropTypes.array,
    handlePreparing:PropTypes.func,
    setWantToCook:PropTypes.func
}