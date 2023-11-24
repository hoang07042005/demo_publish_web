import './CSS/style.css';
import { FaStar } from 'react-icons/fa';
import ProductList from './component/ProductList';

    export default function MyApp() {
        // const stars = Array.from({ length: 5 }, (_, index) => ( 
        //     <FaStar key={index} color={index < 3 ? 'orange': 'grey'} /> 
        // ));

        return (  
            <div>
                {/* {stars} */}
                <div className='App'>
                    <ProductList />
                </div> 
            </div>
        );
    }
      