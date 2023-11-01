
import './MyCartPage.css'
import ProductCartList from "../../components/ProductCartList/ProductCartList";
import OrderCheckoutSummary from "../../components/OrderCheckoutSummary/OrderCheckoutSummary";
const MyCartPage = () => {
    return (
        <div>
            <h2>Breadcrumbs goes here</h2>
            <h2>My Cart Title</h2>
            <ProductCartList />
            <OrderCheckoutSummary />
        </div>
    )
}

export default MyCartPage