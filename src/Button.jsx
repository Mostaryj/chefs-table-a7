import PropTypes from 'prop-types'


const Button = ({removeCook}) => {

   const {name, preparing_time, calories} = removeCook;

    return (
        <div>
               <div className="">
        <table className="table rounded-none space-x-4 bg-gray-200">

          <div className='flex justify-between'>

            <tr >
            <td></td> 
              <td>{name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
            </tr>
          
         
          </div>        

        </table>
      </div> 

            
        </div>
    );
};

export default Button;

Button.propTypes = {
   
removeCook:PropTypes.object,
  
}