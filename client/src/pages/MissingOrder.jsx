import Zoro from "../../public/images/other/Zoro.jpg";

export default function MissingOrder() {
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className="text-center">Sorry Our Delivery Guy Got Lost</h1>
      <img src={Zoro} alt="Lost Zoro" style={{ marginTop: '1%' }} />
    </div>
  )
}
