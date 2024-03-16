import PropTypes from 'prop-types'
const SingleCook = ({wantToCook}) => {
    const {name, preparing_time, calories} = wantToCook;
    return (
        <div>
         <td className='flex justify-around mt-4 bg-gray-200'>
         <th className='text-lg font-normal'>Name: {name}</th>
         <th className='text-lg font-normal'>Time: {preparing_time}</th>
         <th className='text-lg font-normal'>Calories: {calories}</th>
         <button className='btn bg-green-500 my-auto'>Preparing</button>
     </td>
        </div>
    );
};

export default SingleCook;
SingleCook.propTypes ={
          wantToCook:PropTypes.object,
          name:PropTypes.object,
          preparing_time:PropTypes.object,
          calories:PropTypes.object
}