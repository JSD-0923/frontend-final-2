
import './MyCartContainer.css'
import ProductCartList from "../ProductCartList/ProductCartList";
import OrderCheckoutSummary from "../OrderCheckoutSummary/OrderCheckoutSummary";
const MyCartContainer = () => {

    return (
        <div>
            <h2>Breadcrumbs goes here</h2>
            <h2>My Cart Title</h2>
            <ProductCartList />
            <OrderCheckoutSummary />
        </div>
    )
}

export default MyCartContainer;