import tailwind from '../../styles/tailwind'
import type { TOutlet } from '../../types'
import index from '../../utils'
import { useNavigate, useOutletContext } from 'react-router-dom'

export default function Submition() {

    const { H3, P, labelStyle, ButtonStyle, H6 } = tailwind()
    const navigate = useNavigate()
    const { cart, showSubmit, setShowSubmit } = useOutletContext<TOutlet>()
    const { formatName, handleGetTotal } = index({ cart })

    return showSubmit ? <div className="absolute bg-[#FFFFFF] max-md:w-[80%] z-20 items-start flex flex-col gap-[32px] rounded-[8px] p-[48px] top-[-100px] left-1/2 -translate-x-1/2">
        < img src="/images/checkout/icon-order-confirmation.svg" alt="" />
        <div className="flex flex-col gap-[24px]">
            <h3 className={`${H3}`}>THANK YOU FOR YOUR ORDER</h3>
            <p className={`${P} text-[rgba(0,0,0,0.5)]!`}>You will receive an email confirmation shortly.</p>
        </div>
        {
            cart && cart[0] ? <div className="flex rounded-[8px] max-sm:w-[100%] max-sm:flex max-sm:flex-col overflow-hidden">
                <div className="bg-[rgba(241,241,241,1)] p-[24px]">
                    <div className="w-[100%] border-b-[1px] border-solid pb-[12px] border-[rgba(0,0,0,0.08)] flex items-center">
                        <div className="flex items-center max-sm:justify-between max-sm:w-[100%] gap-[16px]">
                            <img src={cart[0].image} className="w-[50px]" alt="" />
                            <div className="flex flex-col">
                                <h5 className={`${P} font-[700]!`}>{formatName(cart[0].name)}</h5>
                                <h5 className={`${P} text-[1.4rem]! font-[700] text-[rgba(0,0,0,0.5)]!`}>${cart[0].price.toLocaleString()}</h5>
                            </div>
                            <div className="flex h-[51px] items-start">
                                <h5 className={`${P} font-[700] text-[rgba(0,0,0,0.5)]!`}>x{cart[0].count}</h5>
                            </div>
                        </div>
                    </div>
                    <h5 className={`${labelStyle} justify-center! mt-[12px] text-[rgba(0,0,0,0.5)]!`}>and {cart.length - 1} other item(s)</h5>
                </div>
                <div className="bg-[#000000] p-[41px_65px_42px_32px] flex flex-col gap-[8px]">
                    <h5 className={`${P} text-[rgba(255,255,255,0.5)]!`}>GRAND TOTAL</h5>
                    <h6 className={`${H6} text-[#FFFFFF]!`}>${handleGetTotal().toLocaleString()}</h6>
                </div>
            </div> : ""
        }
        <button type="submit" onClick={() => {
            setShowSubmit!(false)
            navigate("/")
        }} className={`${ButtonStyle} w-[100%]! mt-[14px]`}>
            BACK TO HOME
        </button>
    </div > : ""
}
