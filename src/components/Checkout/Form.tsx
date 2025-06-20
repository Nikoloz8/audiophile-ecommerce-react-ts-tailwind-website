import tailwind from "../../styles/tailwind"
import { useContext } from "react"
import { CheckoutContext } from "../../pages/Checkout"
import BillingDetailsSection from "./BillingDetailsSection"
import ShippingInfoSection from "./ShippingInfoSection"
import PaymentDetailsSection from "./PaymentDetailsSection"
import CheckoutContinue from "./CheckoutContinue"

export default function Form() {

    const { H3 } = tailwind()
    const onSubmit = () => { }
    const { handleSubmit } = useContext(CheckoutContext)

    return (
        <form className="flex gap-[30px] items-start" onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-[rgba(255,255,255,1)] w-[730px] rounded-[8px] p-[54px_48px_48px_48px] flex flex-col">
                <h3 className={`${H3}`}>CHECKOUT</h3>

                <BillingDetailsSection />

                <ShippingInfoSection />

                <PaymentDetailsSection />

            </div>

            <CheckoutContinue />

        </form>)
}
