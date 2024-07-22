
import { Fragment, useState, useEffect, useContext } from "react";
import CardProduct from "../Fregments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../Hooks/UseLogin";
import TableCart from "../Fregments/TableCart";
import Navbar from "../Layouts/Navbar";
import { DarkMode } from "../../context/DarkMode";




// const products = [
//     {
//         id: 1,
//         name: "meja komputer",
//         harga: 300000,
//         image: "public/img/1.jpg",
//         description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero dolores maxime velit voluptates iste mollitia voluptatum reprehenderit recusandae quia.`
//     },
//     {
//         id: 2,
//         name: "meja belajar",
//         harga: 400000,
//         image: "public/img/2.jpg",
//         description: `Lorem ipsum dolor sit amet consectetur adipisicing elit`
//     },
//     {
//         id: 3,
//         name: "meja belajar",
//         harga: 430000,
//         image: "public/img/2.jpg",
//         description: `Lorem ipsum dolor sit amet consectetur adipisicing elit`
//     },

// ]


const ProductPage = () => {
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
    const [products, setProduct] = useState([]);
    useLogin();



    useEffect(() => {
        getProducts((data) => {
            setProduct(data);
        });
    }, []);


    return (
        <Fragment>
            <Navbar/>
            <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
                <div className="w-4/6 flex flex-wrap">
                    {products.length > 0 && products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} id={product.id} />
                            <CardProduct.Body title={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer
                                price={product.price}
                                id={product.id} />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-0 mb-2">Card</h1>
                    <TableCart products={products} />
                </div>
            </div>
            {/* <div className="flex w-600 justify-center">
                <Counter />
            </div> */}
        </Fragment>

    )
}
export default ProductPage;