
import ProductList from '../components/ProductList';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_CURRENT_TAG } from '../utils/actions';


const Women = () => {
    return (
        <div className="container row">
            <h1 className="text-center">Women's Clothing</h1>
            <ProductList />
        </div>
    )}

export default Women;