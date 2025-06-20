import { useContext } from "react"
import tailwind from "../../styles/tailwind"
import { CheckoutContext } from "../../pages/Checkout"

export default function ShippingInfoSection() {

    const { SubTitle, inputStyle, labelStyle } = tailwind()
    const { errors, register } = useContext(CheckoutContext)

    return (
        <section className="mt-[53px] flex flex-col gap-[16px]">
            <h5 className={`${SubTitle}`}>SHIPPING INFO</h5>
            <div className="flex flex-col gap-[9px] w-[100%]">
                <label className={`${labelStyle} ${errors.address && "text-[rgba(205,44,44,1)]!"}`} htmlFor="address">
                    Address
                    {errors.address && <p className="font-[400] text-[1.2rem] leading-[100%] tracking-[-0.21px]">{errors.address.message}</p>}
                </label>
                <input placeholder="1137 Williams Avenue" {...register("address", {
                    required: "Required"
                })} type="text" id="address" className={`${inputStyle} ${errors.address && "border-[2px]! border-[rgba(205,44,44,1)]!"}`} />
            </div>
            <div className="flex flex-col gap-[24px] mt-[8px]">
                <div className="flex gap-[16px] max-sm:flex-col">
                    <div className="flex flex-col gap-[9px] w-[100%]">
                        <label className={`${labelStyle} ${errors.zipCode && "text-[rgba(205,44,44,1)]!"}`} htmlFor="zip">
                            ZIP Code
                            {errors.zipCode && <p className="font-[400] text-[1.2rem] leading-[100%] tracking-[-0.21px]">{errors.zipCode.message}</p>}
                        </label>
                        <input placeholder="10001" {...register("zipCode", {
                            required: "Required"
                        })} type="text" id="zip" className={`${inputStyle} ${errors.zipCode && "border-[2px]! border-[rgba(205,44,44,1)]!"}`} />
                    </div>
                    <div className="flex flex-col gap-[9px] w-[100%]">
                        <label className={`${labelStyle} ${errors.city && "text-[rgba(205,44,44,1)]!"}`} htmlFor="city">
                            City
                            {errors.city && <p className="font-[400] text-[1.2rem] leading-[100%] tracking-[-0.21px]">{errors.city.message}</p>}
                        </label>
                        <input placeholder="New York" {...register("city", {
                            required: "Required"
                        })} type="text" id="city" className={`${inputStyle} ${errors.city && "border-[2px]! border-[rgba(205,44,44,1)]!"}`} />
                    </div>
                </div>
                <div className="flex flex-col gap-[9px] max-sm:w-[100%] w-[48.5%]">
                    <label className={`${labelStyle} ${errors.country && "text-[rgba(205,44,44,1)]!"}`} htmlFor="country">
                        Country
                        {errors.country && <p className="font-[400] text-[1.2rem] leading-[100%] tracking-[-0.21px]">{errors.country.message}</p>}
                    </label>
                    <input placeholder="United States" {...register("country", {
                        required: "Required"
                    })} type="text" id="country" className={`${inputStyle} ${errors.country && "border-[2px]! border-[rgba(205,44,44,1)]!"}`} />
                </div>
            </div>
        </section>)
}
