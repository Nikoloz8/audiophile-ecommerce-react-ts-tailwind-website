import { useNavigate, useOutletContext } from "react-router-dom"
import index from "../utils"
import tailwind from "../styles/tailwind"
import { useForm } from "react-hook-form"

export default function Checkout() {

    const navigate = useNavigate()
    const { cart } = useOutletContext<{ cart: TItem[] }>()
    const { getPreviousPath, formatName, handleGetTotal } = index({ cart })
    const { P, H3, SubTitle, labelStyle, inputStyle, H6, ButtonStyle } = tailwind()

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



    console.log(watch())

    const onSubmit = () => { }

    return (
        <>
            <div className="h-[90px] w-[100%] bg-[#000000] mt-[-90px]">
            </div>
            <div className="flex flex-col w-[1110px] mt-[80px] gap-[38px]">
                <div className="flex justify-start w-[100%]">
                    <a href="" onClick={() => navigate(`${getPreviousPath()}`)} className={`cursor-pointer ${P} text-[rgba(0,0,0,0.5)]!`}>Go Back</a>
                </div>
                <div className="flex justify-between">
                    <form className="flex gap-[30px] items-start" onSubmit={handleSubmit(onSubmit)}>
                        <div className="bg-[rgba(255,255,255,1)] w-[730px] rounded-[8px] p-[54px_48px_48px_48px] flex flex-col">
                            <h3 className={`${H3}`}>CHECKOUT</h3>
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
                            </section>
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
                                    <div className="flex gap-[16px]">
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
                                    <div className="flex flex-col gap-[9px] w-[48.5%]">
                                        <label className={`${labelStyle} ${errors.country && "text-[rgba(205,44,44,1)]!"}`} htmlFor="country">
                                            Country
                                            {errors.country && <p className="font-[400] text-[1.2rem] leading-[100%] tracking-[-0.21px]">{errors.country.message}</p>}
                                        </label>
                                        <input placeholder="United States" {...register("country", {
                                            required: "Required"
                                        })} type="text" id="country" className={`${inputStyle} ${errors.country && "border-[2px]! border-[rgba(205,44,44,1)]!"}`} />
                                    </div>
                                </div>
                            </section>
                            <section className="mt-[61px] flex flex-col gap-[16px]">
                                <h5 className={`${SubTitle}`}>PAYMENT DETAILS</h5>
                                <div className="flex flex-col gap-[24px]">
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
                                    </div>
                                    {watch().selected === 1 ? <div className="flex gap-[16px]">
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
                                    </div> : <div className="flex gap-[32px] items-center">
                                        <img src="/images/checkout/icon-cash-on-delivery.svg" alt="" />
                                        <p className={`${P} text-[rgba(0,0,0,0.5)]!`}>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                                    </div>}
                                </div>
                            </section>
                        </div>
                        <section className="flex p-[32px] flex-col gap-[32px] bg-[rgba(255,255,255,1)] rounded-[8px] min-w-[377px]">
                            <div className="flex justify-between w-[100%]">
                                <h6 className={`${H6}`}>SUMMARY</h6>
                            </div>
                            <div className="flex flex-col gap-[24px]">
                                {cart ? cart.map((e: TItem, i: number) => {
                                    return <div key={i} className="w-[100%] flex justify-between items-center">
                                        <div className="flex gap-[16px] items-center w-[100%]">
                                            <img src={e.image} className="w-[64px] rounded-[8px]" alt="" />
                                            <div className="flex justify-between w-[100%] items-start">
                                                <div>
                                                    <h5 className={`${P} font-[700]!`}>{formatName(e.name)}</h5>
                                                    <h5 className={`${P} text-[1.4rem]! font-[700] text-[rgba(0,0,0,0.5)]!`}>${e.price.toLocaleString()}</h5>
                                                </div>
                                                <h5 className={`${P} text-[rgba(0,0,0,0.5)]!`}>x{e.count}</h5>
                                            </div>
                                        </div>
                                    </div>
                                }) : ""}
                                <div className="flex flex-col gap-[24px]">
                                    <div className="flex flex-col gap-[8px]">
                                        <div className="w-[100%] flex justify-between">
                                            <h6 className={`${P} text-[rgba(0,0,0,0.5)]!`}>TOTAL</h6>
                                            <h6 className={`${H6}`}>${handleGetTotal().toLocaleString()}</h6>
                                        </div>
                                        <div className="w-[100%] flex justify-between">
                                            <h6 className={`${P} text-[rgba(0,0,0,0.5)]!`}>SHIPPING</h6>
                                            <h6 className={`${H6}`}>$50</h6>
                                        </div>
                                        <div className="w-[100%] flex justify-between">
                                            <h6 className={`${P} text-[rgba(0,0,0,0.5)]!`}>VAT (INCLUDED)</h6>
                                            <h6 className={`${H6}`}>${(handleGetTotal() / 100 * 20).toLocaleString()}</h6>
                                        </div>
                                    </div>
                                    <div className="w-[100%] flex justify-between">
                                        <h6 className={`${P} text-[rgba(0,0,0,0.5)]!`}>GRAND TOTAL</h6>
                                        <h6 className={`${H6} text-[rgba(216,125,74,1)]!`}>${(handleGetTotal() + 50).toLocaleString()}</h6>
                                    </div>
                                    <button type="submit" onClick={() => watch().selected === 0 ? setError("selected", { type: "manual", message: "Required" }) : clearErrors("selected")} className={`${ButtonStyle} mt-[8px]`}>
                                        CONTINUE & PAY  
                                    </button>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </>
    )
}

