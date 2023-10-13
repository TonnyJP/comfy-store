import {Link, useLoaderData} from "react-router-dom"
import {formatPrice} from "../utils";

export const ProductsGrid = () => {
    const products = useLoaderData();

    return <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.products.map((prod) => {
            const {title, image, price } = prod.attributes;
            return <Link to={`/products/${prod.id}`} className="card w-full shadow-xl hover:shadow-2xl transition duration-300" 
            key={prod.id}>
                <figure className=" pt-4 px-4">
                  <img src={image} alt={title} className="rounded-xl h-64 md:h-48 w-full object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title capitalize tracking-sider">{title}</h2>
                    <span className="text-secondary">{formatPrice(price)}</span>
                </div>
            </Link>
        })}
    </div>
}