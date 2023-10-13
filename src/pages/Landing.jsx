import {FeaturedProducts, Hero} from "../components";
import {customFetch} from "../utils";

const url = '/products?featured=true';

export const loader = async() => {
    const response = await customFetch(url);
    const products = response.data.data;
    //console.log(products)
    return {products}
}

export const Landing = () => {
    
    return<>
      <Hero />
      <FeaturedProducts />
    </>
}