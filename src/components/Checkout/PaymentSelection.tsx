import { useContext } from "react"
import tailwind from "../../styles/tailwind"
import { CheckoutContext } from "../../pages/Checkout"

export default function PaymentSelection() {

    const { labelStyle, inputStyle } = tailwind()
    const { errors, setValue, watch, clearErrors } = useContext(CheckoutContext)

    return (
        <div className="flex gap-[16px]">
            <div className="flex flex-col gap-[9px] w-[100%]">
                <h4 className={`${labelStyle} ${errors.selected && "text-[rgba(205,44,44,1)]!"}`}>
                    Payment Method
                    {errors.selected?.message && (
                        <p className="font-[400] text-[1.2rem] leading-[100%] tracking-[-0.21px] text-[rgba(205,44,44,1)]">
                            {errors.selected.message}
                        </p>
                    )}
                </h4>
                <div className="w-[100%] flex justify-end">
                    <div className="flex flex-col gap-[16px] items-end w-[100%]">
                        <div onClick={() => setValue("selected", 1)} className={`${inputStyle} cursor-pointer w-[48.5%]! flex items-center gap-[16px] ${watch().selected == 1 && "border-[rgba(216,125,74,1)]!"} hover:border-[rgba(216,125,74,1)]!`}>
                            <div className={`w-[20px] h-[20px] rounded-[100%] border-solid flex items-center justify-center border-[rgba(207,207,207,1)] border-[1px] border-solid"}`}>
                                {watch().selected == 1 && <div className="w-[10px] h-[10px] rounded-[100%] bg-[rgba(216,125,74,1)]"></div>}
                            </div>
                            e-Money</div>
                        <div onClick={() => {
                            setValue("selected", 2)
                            clearErrors(["EMoneyNumber", "EMoneyPin"])
                            setValue("EMoneyNumber", "")
                            setValue("EMoneyPin", "")
                        }} className={`${inputStyle} w-[48.5%]! cursor-pointer flex items-center gap-[16px] ${watch().selected == 2 && "border-[rgba(216,125,74,1)]!"} hover:border-[rgba(216,125,74,1)]!`}>
                            <div className="w-[20px] h-[20px] rounded-[100%] border-[1px] border-solid border-[rgba(207,207,207,1)] flex items-center justify-center">
                                {watch().selected == 2 && <div className="w-[10px] h-[10px] rounded-[100%] bg-[rgba(216,125,74,1)]"></div>}
                            </div>
                            Cash on Delivery</div>
                    </div>
                </div>
            </div>
        </div>)
}
