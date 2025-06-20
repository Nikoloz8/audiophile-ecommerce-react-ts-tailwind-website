import { useNavigate } from "react-router-dom"
import index from "../../utils"
import tailwind from "../../styles/tailwind"

export default function GoBackButton() {

    const navigate = useNavigate()
    const {getPreviousPath} = index({})
    const {P} = tailwind()

    return (
        <div className="flex justify-start w-[100%]">
            <a href="" onClick={() => navigate(`${getPreviousPath()}`)} className={`cursor-pointer ${P} text-[rgba(0,0,0,0.5)]! hover:text-[rgba(216,125,74,1)]!`}>Go Back</a>
        </div>)
}
