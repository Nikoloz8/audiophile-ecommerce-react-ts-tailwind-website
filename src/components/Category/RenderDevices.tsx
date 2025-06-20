import { useLocation, useNavigate, useOutletContext, useParams } from "react-router-dom"
import data from "../../data.json"
import tailwind from "../../styles/tailwind"
import { useEffect, useState } from "react"
import index from "../../utils"
import type { TOutlet } from "../../types"

export default function RenderDevices() {

    const [count, setCount] = useState(0)

    const { category } = useParams()
    const navigate = useNavigate()
    const { Overline, SubTitle, P, ButtonStyle, H2, H6 } = tailwind()
    const location = useLocation().pathname
    const { handleAddToCart } = index({ count })

    const isDetails = useLocation().pathname.includes("details")
    let filteredData = data.filter((e) => e.category === category).sort((a, b) => b.id - a.id)

    if (isDetails) {
        const { id } = useParams()
        filteredData = data.filter((e) => e.id === Number(id))
    }

    const savePreviousPath = () => {
        localStorage.setItem("previousPath", location)
    }

    useEffect(() => {
        const cart = localStorage.getItem("cart")
        if (!cart) {
            localStorage.setItem("cart", "[]")
        }
    }, [])

    const { isMobile, isTablet } = useOutletContext<TOutlet>()

    console.log(isDetails)

    return filteredData.map((e, i) => {
        return <div key={i} className={`flex justify-between max-sm:gap-[24px]! w-[100%] flex-row-reverse max-lg:flex-col! items-center max-lg:items-start gap-[52px] ${i % 2 === 0 ? "flex-row! max-lg:flex-col" : ""}`}>
            <img src={!isTablet && !isMobile ? e.categoryImage.desktop : isTablet ? e.categoryImage.tablet : isMobile ? e.categoryImage.mobile : ""} className="w-[540px] rounded-[8px] max-xl:w-[450px]! max-lg:w-[100%]!" alt="" />
            <div className={`flex flex-col max-w-[445px] max-lg:max-w-[100%]! max-lg:w-[100%]! gap-[32px] max-lg:items-center ${isDetails && "items-start!"}`}>
                <div className={`flex flex-col gap-[16px] max-lg:max-w-[445px] max-lg:items-center ${isDetails && "items-start!"}`}>
                    {e.new ? <h4 className={`${Overline} text-[rgba(216,125,74,1)]`}>NEW PRODUCT</h4> : undefined}
                    <h2 className={`${H2} ${isDetails ? "max-lg:text-left!" : "max-lg:text-center"}`}>{e.name.toUpperCase()}</h2>
                </div>
                <div className="flex flex-col gap-[40px] max-lg:max-w-[445px] items-start max-lg:items-center!">
                    <p className={`${P} text-[rgba(0,0,0,0.5)]! ${isDetails ? "max-lg:text-left!" : "max-lg:text-center"}`}>{e.description}</p>
                    {!isDetails ? <button onClick={() => {
                        navigate(`/details/${category}/${e.id}`)
                        savePreviousPath()
                    }} className={`${ButtonStyle}`}>
                        SEE PRODUCT
                    </button> : <div className="flex flex-col gap-[48px] max-lg:w-[100%]">
                        <h6 className={`${H6}`}>${e.price.toLocaleString()}</h6>
                        <div className="flex gap-[16px]">
                            <div className="flex gap-[16px] bg-[rgba(241,241,241,1)] h-[48px] items-center">
                                <button onClick={() => {
                                    count > 0 ? setCount(count - 1) : undefined
                                }} className={`${SubTitle} text-[rgba(0,0,0,0.25)]! w-[40px]! flex items-center justify-center cursor-pointer h-[100%] text-center hover:text-[rgba(216,125,74,1)]!`}>-</button>
                                <span className={`${SubTitle} text-[rgba(0,0,0,1)]! w-[10px] text-center hover:text-[rgba(216,125,74,1)]`}>{count}</span>
                                <button onClick={() => setCount(count + 1)} className={`${SubTitle} text-[rgba(0,0,0,0.25)]! w-[40px]! flex items-center justify-center cursor-pointer h-[100%] text-center hover:text-[rgba(216,125,74,1)]!`}>+</button>
                            </div>
                            <button onClick={() => {
                                handleAddToCart({ name: e.name, count: count, price: e.price, image: e.image.desktop })
                                setCount(0)
                                window.location.reload()
                            }
                            } className={`${ButtonStyle}`}>
                                ADD TO CART
                            </button>
                        </div>
                    </div>}
                </div>
            </div>
        </div >
    })
}

