
import ProductList from '../components/ProductList';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_CURRENT_CATEGORY, UPDATE_CURRENT_TAG } from '../utils/actions';
import { Link } from 'react-router-dom';
import  ManIcon  from '@mui/icons-material/Man';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect } from 'react';


const Men = () => {
    const [state, dispatch] = useStoreContext();
    const tag = state.currentTag || 'Clothing';
    
    useEffect(() => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: 'Men'
        })
    }, [dispatch])
    

    return (
        <div className="container row">
            <a id="top"></a>
            <nav className="navbar navbar-expand-lg justify-content-between">
            <h1 className="text-center">Men's {tag} <ManIcon/></h1>
                <Link onClick={()=>dispatch({
                    type: UPDATE_CURRENT_TAG,
                    currentTag: 'Clothing'
                })} style={{color:"black"}}>All Clothing</Link>
                <Link onClick={()=>dispatch({
                    type: UPDATE_CURRENT_TAG,
                    currentTag: 'Jackets'
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
            <br /><br /><br /><br /><br />
            <hr />
            <a href="#top" className='text-center' style={{color:"black", fontSize:"60px"}}> Return to Top <ArrowUpwardIcon sx={{fontSize:"60px"}}/></a>
            <hr />
        </div>
    )}

export default Men;