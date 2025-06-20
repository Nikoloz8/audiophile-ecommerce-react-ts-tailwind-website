import { useContext } from 'react'
import { CheckoutContext } from '../../pages/Checkout'
import tailwind from '../../styles/tailwind'

export default function PaymentDetailsSelectionResult() {

    const { watch, errors, register } = useContext(CheckoutContext)
    const { labelStyle, inputStyle, P } = tailwind()

    return watch().selected === 1 ? <div className="flex gap-[16px]">
        <div className="flex flex-col gap-[9px] w-[100%]">
            <label className={`${labelStyle} ${errors.EMoneyNumber && "text-[rgba(205,44,44,1)]!"}`} htmlFor="EMoneyNum">
                e-Money Number
                {errors.EMoneyNumber && <p className="font-[400] text-[1.2rem] leading-[100%] tracking-[-0.21px]">{errors.EMoneyNumber.message}</p>}
            </label>
            <input placeholder="238521993" {...register("EMoneyNumber", {
                required: "Required"
            })} type="text" id="EMoneyNum" className={`${inputStyle} ${errors.EMoneyNumber && "border-[2px]! border-[rgba(205,44,44,1)]!"}`} />
        </div>
        <div className="flex flex-col gap-[9px] w-[100%]">
            <label className={`${labelStyle} ${errors.EMoneyPin && "text-[rgba(205,44,44,1)]!"}`} htmlFor="EMoneyPin">
                e-Money PIN
                {errors.EMoneyPin && <p className="font-[400] text-[1.2rem] leading-[100%] tracking-[-0.21px]">{errors.EMoneyPin.message}</p>}
            </label>
            <input placeholder="6891" {...register("EMoneyPin", {
                required: "Required"
            })} type="text" id="EMoneyPin" className={`${inputStyle} ${errors.EMoneyPin && "border-[2px]! border-[rgba(205,44,44,1)]!"}`} />
        </div>
    </div> : watch().selected === 2 ? <div className="flex gap-[32px] items-center">
        <img src="/images/checkout/icon-cash-on-delivery.svg" alt="" />
        <p className={`${P} text-[rgba(0,0,0,0.5)]!`}>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
    </div> : undefined

}
