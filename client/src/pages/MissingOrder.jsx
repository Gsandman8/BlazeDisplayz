import Zoro from "../../public/images/other/Zoro.jpg";

export default function MissingOrder() {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className="text-center">
        Sorry for any inconvenience. We're unable to track or deliver your order.  
      </h1>
      <h1 className="text-center">
        Our delivery guy got lost.
      </h1>
      <img src={Zoro} alt="Lost Zoro" style={{ marginTop: '1%' }} />
    </div>
  )
}
