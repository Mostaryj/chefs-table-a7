import PropTypes from 'prop-types'


const Button = ({removeCook, idx}) => {

   const {name, preparing_time, calories} = removeCook;

    return (
        <div>
               <div className="">
        <table className="table rounded-none space-x-4 bg-gray-200">

          <div className='flex justify-between'>

            <tr >
            <td>{idx +1}</td> 
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
 idx:PropTypes.number,  
removeCook:PropTypes.object,
  
}