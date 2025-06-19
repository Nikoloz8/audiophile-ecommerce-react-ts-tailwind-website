import { useEffect, useState } from "react"
import tailwind from "../../styles/tailwind"
import HeaderPart from "./HeaderPart"
import index from "../../utils"

export default function Header({ showCart, setShowCart }: { showCart: boolean, setShowCart: React.Dispatch<React.SetStateAction<boolean>> }) {

    const [cart, setCart] = useState<TItem[]>([])
    const { H6, P, SubTitle, ButtonStyle } = tailwind()

    useEffect(() => {
        const storedCart = localStorage.getItem("cart")
        if (storedCart) {
            try {
                setCart(JSON.parse(storedCart))
            } catch {
                localStorage.setItem("cart", "[]")
                setCart([])
            }
        }
    }, [])

    const { handleClearCart, formatName, handleCountChange, handleGetTotal } = index({ cart, setCart })

    return (
        <header className="flex w-[100%] bg-transparent items-center p-[32px_0] justify-between border-b-[1px] border-solid border-[rgba(255,255,255,0.2)] relative">
            <HeaderPart />
            <img onClick={() => setShowCart(!showCart)} src="/images/shared/desktop/icon-cart.svg" className="cursor-pointer" alt="" />
            {showCart ? <div className="absolute flex p-[32px] top-[100px] right-0 z-30! flex-col gap-[32px] bg-[rgba(255,255,255,1)] rounded-[8px] min-w-[377px]">
                <div className="flex justify-between w-[100%]">
                    <h6 className={`${H6}`}>CART ({cart ? cart.length : "0"})</h6>
                    <a href="" onClick={() => handleClearCart()} className={`underline ${P} text-[rgba(0,0,0,0.5)]!`}>Remove all</a>
                </div>
                <div className="flex flex-col gap-[24px]">
                    {cart ? cart.map((e: TItem, i: number) => {
                        return <div key={i} className="w-[100%] flex justify-between items-center">
                            <div className="flex gap-[16px] items-center w-[100%]">
                                <img src={e.image} className="w-[64px] rounded-[8px]" alt="" />
                                <div className="flex justify-between w-[100%] items-center">
                                    <div>
                                        <h5 className={`${P} font-[700]!`}>{formatName(e.name)}</h5>
                                        <h5 className={`${P} text-[1.4rem]! font-[700] text-[rgba(0,0,0,0.5)]!`}>${e.price.toLocaleString()}</h5>
                                    </div>
                                    <div className="flex gap-[12px] bg-[rgba(241,241,241,1)] h-[32px] items-center">
                                        <button onClick={() => handleCountChange(e.name, false)} className={`${SubTitle} text-[rgba(0,0,0,0.25)]! w-[32px]! flex items-center justify-center cursor-pointer h-[100%] text-center hover:text-[rgba(216,125,74,1)]!`}>-</button>
                                        <span className={`${SubTitle} text-[rgba(0,0,0,1)]! w-[10px] text-center hover:text-[rgba(216,125,74,1)]`}>{e.count}</span>
                                        <button onClick={() => handleCountChange(e.name, true)} className={`${SubTitle} text-[rgba(0,0,0,0.25)]! w-[32px]! flex items-center justify-center cursor-pointer h-[100%] text-center hover:text-[rgba(216,125,74,1)]!`}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }) : ""}
                </div>
                <div className="flex flex-col gap-[24px]">
                    <div className="w-[100%] flex justify-between">
                        <h6 className={`${P} text-[rgba(0,0,0,0.5)]!`}>TOTAL</h6>
                        <h6 className={`${H6}`}>${handleGetTotal().toLocaleString()}</h6>
                    </div>

                    <button className={`${ButtonStyle}`}>
                        CHECKOUT
                    </button>

                </div>
            </div> : undefined}
        </header>)
}
