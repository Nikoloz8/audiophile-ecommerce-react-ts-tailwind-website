import { useContext } from "react"
import tailwind from "../../styles/tailwind"
import { CheckoutContext } from "../../pages/Checkout"
import { useOutletContext } from "react-router-dom"
import index from "../../utils"
import type { TItem, TOutlet } from "../../types"

export default function CheckoutContinue() {

    const { P, H6, ButtonStyle } = tailwind()
    const { watch, setError, clearErrors } = useContext(CheckoutContext)
    const { cart, setShowSubmit } = useOutletContext<TOutlet>()
    const { handleGetTotal, formatName } = index({ cart })

    return (
        <section className="flex p-[32px] flex-col gap-[32px] max-lg:w-[100%] bg-[rgba(255,255,255,1)] rounded-[8px] min-w-[377px] max-sm:min-w-auto">
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
                    <button type="submit" onClick={() => {
                        if (watch().selected === 0) {
                            setError("selected", { type: "manual", message: "Required" })
                        } else {
                            clearErrors("selected")
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setShowSubmit!(true)
                        }
                    }
                    } className={`${ButtonStyle} mt-[8px]`}>
                        CONTINUE & PAY
                    </button>
                </div>
            </div>
        </section>)
}
