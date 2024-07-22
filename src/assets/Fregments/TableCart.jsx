import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispact } from "../../context/TotalPriceContext";

const TableCart = (props) => {
    const { products } = props;
    const cart = useSelector((state) => state.cart.data);
    // const [totalPrice, setTotalPrice] = useState(0);
    const { isDarkMode } = useContext(DarkMode);
    const dispatch = useTotalPriceDispact();
    const {total} = useTotalPrice();

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            dispatch ({
                type: "UPDATE",
                payload: {
                    total: sum,
                }
            })
            localStorage.setItem("cart", JSON.stringify(cart))
        }

    }, [cart, products]);

    const totalPriceRef = useRef(null);
    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }

    }, [cart])

    return (
        <table className={`text-left table-auto border-separate border-spacing-x-1 ${isDarkMode && "text-white"}`}>
            <thead>
                <tr>
                    <th>product</th>
                    <th>harga</th>
                    <th>quantity</th>
                    <th>total</th>
                </tr>
            </thead>
            <tbody >
                {products.length > 0 && cart.map((item) => {
                    const product = products.find((product) => product.id === item.id)
                    return (
                        <tr key={item.id}>
                            <td>{product.title.substring(0, 20)}....</td>
                            <td>${" "}
                                {product.price.toLocaleString("id-ID", { styles: 'curarency', curarency: 'IDR' })}</td>
                            <td>{item.qty}</td>
                            <td>$. {(item.qty * product.price).toLocaleString("id-ID", { styles: 'curarency', curarency: 'IDR' })}</td>
                        </tr>
                    )
                })
                }
                <tr ref={totalPriceRef}>
                    <td colSpan={3}><b>Total Harga</b></td>
                    <td>
                        <b>
                            $.{" "}
                            {total.toLocaleString("id-ID", { styles: 'curarency', curarency: 'IDR' })}
                        </b>
                    </td>
                </tr>

            </tbody>
        </table>
    )
}

export default TableCart