
import ProductList from '../components/ProductList';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_CURRENT_TAG } from '../utils/actions';
import { Link } from 'react-router-dom';


const Men = () => {

    const [state, dispatch] = useStoreContext();
    const tag = state.currentTag || 'Clothing';

    
    return (
        <div className="container row">
            <h1 className="text-center">Men's {tag}</h1>
            <hr />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link onClick={()=>dispatch({
                    type: UPDATE_CURRENT_TAG,
                    currentTag: 'Hoodies'
                })}>Hoodies</Link>
                <Link onClick={()=>dispatch({
                    type: UPDATE_CURRENT_TAG,
                    currentTag: 'Pants'
                })}>Pants</Link>
                <Link onClick={()=>dispatch({
                    type: UPDATE_CURRENT_TAG,
                    currentTag: 'Shoes'
                })}>Shoes</Link>
            </nav>
            <ProductList />
        </div>
    )}

export default Men;