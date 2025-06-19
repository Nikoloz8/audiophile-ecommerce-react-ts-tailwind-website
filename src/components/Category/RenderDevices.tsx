import { useLocation, useNavigate, useParams } from "react-router-dom"
import data from "../../data.json"
import tailwind from "../../styles/tailwind"
import { useState } from "react"

export default function RenderDevices() {

    const { category } = useParams()
    let filteredData = data.filter((e) => e.category === category).sort((a, b) => b.id - a.id)
    const { Overline, P, ButtonStyle, H2 } = tailwind()
    const isDetails = useLocation().pathname.includes("details")
    if (isDetails) {
        const { id } = useParams()
        filteredData = data.filter((e) => e.id === Number(id))
    }
    const navigate = useNavigate()
    const location = useLocation().pathname
    const savePreviousPath = () => {
        localStorage.setItem("previousPath", location)
    }
    const [count, setCount] = useState(0)
    const { SubTitle } = tailwind()

    return filteredData.map((e, i) => {
        return <div key={i} className={`flex justify-between w-[100%] flex-row-reverse items-center ${i % 2 === 0 ? "flex-row!" : ""}`}>
            <img src={e.image.desktop} className="w-[540px]" alt="" />
            <div className="flex flex-col max-w-[445px] gap-[32px]">
                <div className="flex flex-col gap-[16px]">
                    {e.new ? <h4 className={`${Overline} text-[rgba(216,125,74,1)]`}>NEW PRODUCT</h4> : undefined}
                    <h2 className={`${H2}`}>{e.name.toUpperCase()}</h2>
                </div>
                <div className="flex flex-col gap-[40px] items-start">
                    <p className={`${P} text-[rgba(0,0,0,0.5)]!`}>{e.description}</p>
                    {!isDetails ? <button onClick={() => {
                        navigate(`/details/${category}/${e.id}`)
                        savePreviousPath()
                    }} className={`${ButtonStyle}`}>
                        SEE PRODUCT
                    </button> : <div className="flex gap-[16px]">
                        <div className="flex gap-[16px] bg-[rgba(241,241,241,1)] h-[48px] items-center">
                            <button onClick={() => {
                                count > 0 ? setCount(count - 1) : undefined
                            }} className={`${SubTitle} text-[rgba(0,0,0,0.25)]! w-[40px]! flex items-center justify-center cursor-pointer h-[100%] text-center hover:text-[rgba(216,125,74,1)]!`}>-</button>
                            <span className={`${SubTitle} text-[rgba(0,0,0,1)]! w-[10px] text-center hover:text-[rgba(216,125,74,1)]`}>{count}</span>
                            <button onClick={() => setCount(count + 1)} className={`${SubTitle} text-[rgba(0,0,0,0.25)]! w-[40px]! flex items-center justify-center cursor-pointer h-[100%] text-center hover:text-[rgba(216,125,74,1)]!`}>+</button>
                        </div>
                        <button className={`${ButtonStyle}`}>
                            ADD TO CART
                        </button>
                    </div>}
                </div>
            </div>
        </div>
    })
}

