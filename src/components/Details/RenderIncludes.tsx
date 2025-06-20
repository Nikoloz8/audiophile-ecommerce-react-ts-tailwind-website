import { useParams } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import data from "../../data.json"

export default function RenderIncludes() {

    const { id } = useParams()
    const filteredData = data.find((e) => e.id === Number(id))
    
    const { H3, P } = tailwind()

    return (
        <div className="flex flex-col gap-[32px] max-lg:flex-row max-lg:w-[100%] max-lg:justify-between max-lg:pr-[150px] max-md:p-0 max-sm:flex-col max-lg:mt-[150px]">
            <h3 className={`${H3}`}>IN THE BOX</h3>
            <ul>
                {filteredData?.includes.map((e, i) => {
                    return <li key={i} className={`${P} flex gap-[24px] text-[rgba(0,0,0,0.5)]!`}>
                        <span className="text-[rgba(216,125,74,1)]! font-[700]!">{e.quantity}x</span>
                        {e.item}
                    </li>
                })}
            </ul>
        </div>)
}
