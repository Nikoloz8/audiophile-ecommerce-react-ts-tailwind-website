import { useNavigate } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import type { THeader } from "../../types"

export default function HeaderPart({ showCart, setShowMenu, showMenu, isFooter }: THeader) {

    const navHeader = ["home", "headphones", "speakers", "earphones"]
    const navigate = useNavigate()
    const { SubTitle } = tailwind()

    return (
        <>
            <div className="flex gap-[42px] items-center">
                <img src="/images/shared/tablet/icon-hamburger.svg" className={`min-md:hidden ${isFooter ? "hidden!" : ""} cursor-pointer`} alt="" onClick={() => setShowMenu?.(!showMenu)} />
                <img src="/images/shared/desktop/logo.svg" alt="" />
            </div>
            <nav>
                <ul className={`flex gap-[32px] max-sm:flex-col max-sm:items-center! max-sm:gap-[16px] ${!isFooter ? "max-md:hidden" : ""}`}>
                    {navHeader.map((e, i) => {
                        return <li onClick={() => {
                            e === "home" && !showCart ? navigate("/") : !showCart ? navigate(`/category/${e}`) : undefined
                        }} className={`${SubTitle} tracking-[2px] hover:text-[rgba(216,125,74,1)]! text-[rgba(255,255,255,1)] cursor-pointer`} key={i}>{e.toUpperCase()}</li>
                    })}
                </ul>
            </nav>
        </>
    )
}
