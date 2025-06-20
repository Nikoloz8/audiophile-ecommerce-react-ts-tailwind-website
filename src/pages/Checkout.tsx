import { useOutletContext } from "react-router-dom"
import { useForm } from "react-hook-form"
import Submition from "../components/Checkout/Submition"
import GoBackButton from "../components/Checkout/GoBackButton"
import Form from "../components/Checkout/Form"
import { createContext } from "react"
import type { TFormContext, TOutlet } from "../types"

export const CheckoutContext = createContext<TFormContext>({
    register: () => ({}),
    handleSubmit: () => ({}),
    clearErrors: () => { },
    errors: {},
    watch: () => { },
    setValue: () => { },
    setError: () => { },
})

export default function Checkout() {

    const { showSubmit } = useOutletContext<TOutlet>()

    const { register, handleSubmit, clearErrors, formState: { errors }, watch, setValue, setError } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            zipCode: "",
            city: "",
            country: "",
            EMoneyNumber: "",
            EMoneyPin: "",
            selected: 0
        }
    })

    return (
        <>
            <div className="h-[90px] w-[100%] bg-[#000000] mt-[-90px]">
            </div>
            {showSubmit ? <div className="fixed w-[100%] h-[100%]! min-h-[100vh] bg-[rgba(0,0,0,0.5)]! z-20 "></div> : undefined}
            <div className="flex flex-col max-xl:w-[100%] max-xl:p-[0_24px] p-[0_39px]! w-[1110px] relative mt-[80px] gap-[38px]">

                <Submition />

                <GoBackButton />

                <div className="flex justify-between">
                    <CheckoutContext.Provider value={{ register, handleSubmit, clearErrors, errors, watch, setValue, setError }}>
                        <Form />
                    </CheckoutContext.Provider>
                </div>
            </div>
        </>
    )
}

