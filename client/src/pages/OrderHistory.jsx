import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div id='orderHistory' className="container my-1">
        <Link to="/profile" style={{color: 'black', textDecoration: 'none', fontSize: '17px'
          }} onMouseEnter={(e) => {
            e.target.style.borderBottom = '2px solid black';
          }}  onMouseLeave={(e) => {
            e.target.style.borderBottom = '1px solid transparent';
          }}
          >
          ← Back to Profile
        </Link>
        
        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3 style={{marginTop:"3%"}}>
                  Order Date:{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div id='imgCard' key={index} className="card px-1 py-1" style={{boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)'}} >
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p style={{color:'black', fontWeight:'bold'}}>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
