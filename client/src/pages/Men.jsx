
import ProductList from '../components/ProductList';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_CURRENT_TAG } from '../utils/actions';
import { Link } from 'react-router-dom';
import  ManIcon  from '@mui/icons-material/Man';


const Men = () => {
    const [state, dispatch] = useStoreContext();
    const tag = state.currentTag || 'Clothing';

    
    return (
        <div className="container row">
            <nav className="navbar navbar-expand-lg justify-content-between">
            <h1 className="text-center">Men's {tag} <ManIcon/></h1>
                <Link onClick={()=>dispatch({
                    type: UPDATE_CURRENT_TAG,
                    currentTag: 'Clothing'
                })} style={{color:"black"}}>All Clothing</Link>
                <Link onClick={()=>dispatch({
                    type: UPDATE_CURRENT_TAG,
                    currentTag: 'Hoodies'
                })} style={{color:"black"}}>Hoodies</Link>
                <Link onClick={()=>dispatch({
                    type: UPDATE_CURRENT_TAG,
                    currentTag: 'Pants'
                })} style={{color:"black"}}>Pants</Link>
                <Link onClick={()=>dispatch({
                    type: UPDATE_CURRENT_TAG,
                    currentTag: 'Shoes'
                })} style={{color:"black"}}>Shoes</Link>
            </nav>
            <hr />
            <ProductList />
        </div>
    )}

export default Men;