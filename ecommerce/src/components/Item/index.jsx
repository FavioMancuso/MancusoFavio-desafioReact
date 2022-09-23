import { Link } from 'react-router-dom'
import './styles.css'

const Item = ({product}) => {
    
    return (
            <Link className='cardprod d-flex flex-column align-items-center my-3' to={`/detail/${product.id}`}>
                <div className="card">
                    <div className='card_img card-body p-0 m-2'>
                        <img src={product.img} width={250} alt="" />
                    </div>
                    <div className='card_description card-footer p-2' style={{background: 'rgb(240 240 240)'}}>
                        <p className='mb-0 pb-0'>{product.name}</p>
                        <span className='mb-0 pb-0' style={{fontWeight: "500"}}>${product.precio}</span>
                    </div>
                </div>
            </Link>
    )
}

export default Item