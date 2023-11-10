import OrderDetails from "../components/CheckoutPageInformationComponents/OrderDetails/OrderDetails";
import OrderInformation from "../components/OrderDetailsPageComponents/OrderInformation/OrderInformation";


const OrderDetailsPage = () => {

    return (
        <div>
            <h2>this is breadcrumbs Comp</h2>
            <h2>Order title</h2>
            <OrderDetails />
            <OrderInformation />
        </div>
    )
}

export default OrderDetailsPage;