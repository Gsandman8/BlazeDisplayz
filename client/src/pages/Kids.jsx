
import ProductList from '../components/ProductList';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_CURRENT_TAG } from '../utils/actions';


const Kids = () => {
    return (
        <div className="container row">
            <h1 className="text-center">Kid's Clothing</h1>
            <hr />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

            </nav>
            <ProductList />
        </div>
    )}

export default Kids;