
import './CheckoutPagePaymentContainer.css'
import ContactInformation from "../ContactInformation/ContactInformation";
import PaymentMethods from "../PaymentMethods/PaymentMethods";
import PaymentMethodDetails from "../PaymentMethodDetails/PaymentMethodDetails";
const CheckoutPagePaymentContainer = () => {

    return (
       <div>
           <h2>this is breadcrumbs Component</h2>
           <h2>This is Checkout page Title</h2>
           <ContactInformation/>
           <PaymentMethods />
           <PaymentMethodDetails />
           <h4>Back to Cart Button</h4>
           <h4>Next Button</h4>
       </div>
    )
}


export default CheckoutPagePaymentContainer;