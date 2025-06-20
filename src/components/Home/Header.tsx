import { useEffect } from "react"
import HeaderPart from "./HeaderPart"
import type { THeader } from "../../types"
import CategorysSection from "./CategorysSection"
import Cart from "./Cart"
import tailwind from "../../styles/tailwind"

export default function Header({ showCart, setShowCart, setCart, setShowMenu, showMenu, cart }: THeader) {


    useEffect(() => {
        const storedCart = localStorage.getItem("cart")
        if (storedCart) {
            try {
                setCart!(JSON.parse(storedCart))
            } catch {
                localStorage.setItem("cart", "[]")
                setCart!([])
            }
        }
    }, [])

    const { P } = tailwind()

    return (
        <>
            <div className="relative w-[100%]">
                <div className={`fixed max-sm:absolute w-[100%] transition-all max-sm:top-[-1200px] top-[-550px] ${showMenu && "top-0!"} duration-1000 left-0`}>
                    <div className="w-[100%] bg-[rgba(0,0,0,1)] h-[90px]"></div>
                    <div className={`bg-[rgba(255,255,255,1)] rounded-[0_0_8px_8px] w-[100%] flex p-[126px_40px_67px_40px]`}>
                        <CategorysSection setShowMenu={setShowMenu} />
                    </div>
                </div>
            </div>
            <header className={`flex w-[100%] max-xl:p-[32px_39px] bg-transparent items-center p-[32px_0] justify-between border-b-[1px] border-solid border-[rgba(255,255,255,0.2)] relative ${showMenu ? "border-0!" : ""}`}>
                <HeaderPart setShowMenu={setShowMenu} showMenu={showMenu} showCart={showCart} />
                <div className="flex">
                    <img onClick={() => setShowCart!(!showCart)} src="/images/shared/desktop/icon-cart.svg" className="cursor-pointer" alt="" />
                    {cart?.length ? <div className={`bg-[rgba(216,125,74,1)]! rounded-[100%] w-[20px] h-[20px] flex items-center justify-center ${cart.length < 0 ? "hidden" : ""} text-[#FFFFFF]! relative top-[-10px] left-[-5px] ${P}`}>{cart?.length}</div> : undefined}
                </div>
                <Cart showCart={showCart} setShowCart={setShowCart} setCart={setCart} cart={cart} />
            </header>
        </>
    )
}
