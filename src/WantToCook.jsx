import PropTypes from 'prop-types'
 import SingleCook from './SingleCook';
const WantToCook = ({ wantToCook }) => {
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

               
                
                
                 ></SingleCook>)
           } 

           {
          
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
    wantToCook: PropTypes.array
}