
import './OrderDetailsContainer.css'
import OrderDetails from "../OrderDetails/OrderDetails";
import OrderInformation from "../OrderInformation/OrderInformation";
const OrderDetailsContainer = () => {

    return (
        <div>
            <h2>this is breadcrumbs Comp</h2>
            <h2>Order title</h2>
            <OrderDetails />
            <OrderInformation />
        </div>
    )
}

export default OrderDetailsContainer;