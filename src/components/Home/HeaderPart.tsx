import { useNavigate } from "react-router-dom"
import tailwind from "../../styles/tailwind"

export default function HeaderPart({ showCart }: Partial<{ showCart: boolean }>) {

    const navHeader = ["home", "headphones", "speakers", "earphones"]
    const navigate = useNavigate()
    const { SubTitle } = tailwind()

    return (
        <>
            <img src="/images/shared/desktop/logo.svg" alt="" />
            <nav>
                <ul className="flex gap-[32px]">
                    {navHeader.map((e, i) => {
                        return <li onClick={() => {
                            e === "home" && !showCart ? navigate("/") : !showCart ? navigate(`/category/${e}`) : undefined
                        }} className={`${SubTitle} tracking-[2px] text-[rgba(255,255,255,1)] cursor-pointer`} key={i}>{e.toUpperCase()}</li>
                    })}
                </ul>
            </nav>
        </>
    )
}
