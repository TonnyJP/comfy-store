import {useLoaderData} from "react-router-dom"
import {customFetch} from "../utils"

export const loader = async({params}) => {
    const response = await customFetch(`/products/${params.id}`)
    return {product: response.data.data}
}

export const SingleProduct = () => {
    const { product } = useLoaderData();
    const { image, title, price, description, colors, company} = product.attributes;
    
    return<h1 className="text-4xl">SingleProduct</h1>
}