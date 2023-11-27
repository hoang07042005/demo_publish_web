import './App.css';
import { FaStar } from 'react-icons/fa';

const product = ({ name, price, discount, image, rating, sale }) => {
     const stars = Array. from ({ length: 5 }, (_, index) => ( 
        <FaStar key={index} color={rating > index ? '#ffc107' : '#e4e5e9'} /> 
        ));

    return (
        <div>
            {/* Render other product details here */}
            <h1>{stars}</h1>
        </div>
    );
}
    export default function MyApp() {
        const stars = Array.from({ length: 5 }, (_, index) => ( 
            <FaStar key={index} color={index < 3 ? 'orange': 'grey'} /> 
        ));

        return (  
            <div>
                {stars}
                <div className='App'>
                    <ProductList />
                </div>
            </div>
        );
    }
      