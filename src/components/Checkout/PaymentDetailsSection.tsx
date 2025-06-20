import tailwind from "../../styles/tailwind"
import PaymentDetailsSelectionResult from "./PaymentDetailsSelectionResult"
import PaymentSelection from "./PaymentSelection"

export default function PaymentDetailsSection() {

    const { SubTitle } = tailwind()

    return (
        <section className="mt-[61px] flex flex-col gap-[16px]">
            <h5 className={`${SubTitle}`}>PAYMENT DETAILS</h5>
            <div className="flex flex-col gap-[24px]">

                <PaymentSelection />

                <PaymentDetailsSelectionResult />

            </div>
        </section>)
}
