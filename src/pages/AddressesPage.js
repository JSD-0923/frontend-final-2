import LoadingProgress from "../components/Loading/LoadingProgress";
import * as React from "react";
import UserAddress from "../components/CheckoutPageComponents/UserAddress/UserAddress";
import {useAddresses} from "../hooks/useAppAPIs";


const AddressesPage = () => {

    const {data:addresses, isLoading} = useAddresses()

    if (isLoading) {
        return <LoadingProgress />;
    }
    return (
       <>
           {addresses?.addresses.map((address) => (
               <UserAddress
                   key={address.id}
                   address={address}
               />
           ))}
       </>
    );
}

export default AddressesPage;