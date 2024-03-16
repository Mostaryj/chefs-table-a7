import PropTypes from 'prop-types'
import SingleCook from './SingleCook';
const WantToCook = ({ wantToCook }) => {
    return (
        <div>
             <h3 className='text-center text-2xl font-bold mt-6'>Want to Cook: {wantToCook.length}</h3>
            <hr className='mt-2'/>

           {
            wantToCook.map(wantToCook  => <SingleCook 
                key={wantToCook.id}
                 wantToCook={wantToCook}></SingleCook>)
           }
           
        </div>

        
    );
};

export default WantToCook;

WantToCook.propTypes = {
    wantToCook: PropTypes.array
}