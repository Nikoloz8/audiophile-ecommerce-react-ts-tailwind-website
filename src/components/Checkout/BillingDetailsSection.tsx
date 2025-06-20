import { useContext } from "react"
import tailwind from "../../styles/tailwind"
import { CheckoutContext } from "../../pages/Checkout"

export default function BillingDetailsSection() {

    const { SubTitle, inputStyle, labelStyle } = tailwind()
    const { errors, register } = useContext(CheckoutContext)


    return (
        <section className="mt-[41px] flex flex-col gap-[16px]">
            <h5 className={`${SubTitle}`}>BILLING DETAILS</h5>
            <div className="flex flex-col gap-[24px]">
                <div className="flex gap-[16px]">
                    <div className="flex flex-col gap-[9px] w-[100%]">
                        <label className={`${labelStyle} ${errors.name && "text-[rgba(205,44,44,1)]!"}`} htmlFor="name">
                            Name
                            {errors.name && <p className="font-[400] text-[1.2rem] leading-[100%] tracking-[-0.21px]">{errors.name.message}</p>}
                        </label>
                        <input placeholder="Alexei Ward" type="text" id="name" className={`${inputStyle} ${errors.name && "border-[2px]! border-[rgba(205,44,44,1)]!"} `} {...register("name", {
                            required: "Required"
                        })} />
                    </div>
                    <div className="flex flex-col gap-[9px] w-[100%]">
                        <label className={`${labelStyle} ${errors.email && "text-[rgba(205,44,44,1)]!"}`} htmlFor="email">
                            Email Address
                            {errors.email && <p className="font-[400] text-[1.2rem] leading-[100%] tracking-[-0.21px]">{errors.email.message}</p>}
                        </label>
                        <input placeholder="alexei@mail.com" type="text" id="email" className={`${inputStyle} ${errors.email && "border-[2px]! border-[rgba(205,44,44,1)]!"}`} {...register("email", {
                            required: "Required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Wrong format"
                            }
                        })} />
                    </div>
                </div>
                <div className="flex flex-col gap-[9px]  w-[48.5%]">
                    <label className={`${labelStyle} ${errors.phone && "text-[rgba(205,44,44,1)]!"}`} htmlFor="number">
                        Phone Number
                        {errors.phone && <p className="font-[400] text-[1.2rem] leading-[100%] tracking-[-0.21px]">{errors.phone.message}</p>}
                    </label>
                    <input placeholder="+1 202-555-0136" {...register("phone", {
                        required: "Required"
                    })} type="text" id="number" className={`${inputStyle} ${errors.phone && "border-[2px]! border-[rgba(205,44,44,1)]!"}`} />
                </div>
            </div>
        </section>)
}
