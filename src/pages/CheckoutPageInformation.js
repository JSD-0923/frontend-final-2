import AddAddress from "../components/CheckoutPageInformationComponents/AddAddress/AddAddress";
import OrderSummary from "../components/CheckoutPageInformationComponents/OrderSummary/OrderSummary";
import OrderDetails from "../components/CheckoutPageInformationComponents/OrderDetails/OrderDetails";


const CheckoutPageInformation = () => {

    return (
        <div>
            <h2>breadcrumbs Component goes here</h2>
            <h2>Checkout Title</h2>
            <AddAddress />
            <OrderSummary />
            <OrderDetails />
            <h3>Select component goes here</h3>
            <h4>Back button</h4>
            <h4>Next button</h4>
        </div>
    )
}

export default CheckoutPageInformation;