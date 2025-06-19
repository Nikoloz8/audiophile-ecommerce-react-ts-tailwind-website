import data from "../../data.json"
import { useParams } from "react-router-dom"

export default function Gallery() {

    const { id } = useParams()
    const filteredData = data.find((e) => e.id === Number(id))


    return (
        <div className="flex gap-[30px] mt-[160px]">
            <div className="flex flex-col gap-[30px]">
                <img src={filteredData?.gallery.first.desktop} className="rounded-[8px]" alt="" />
                <img src={filteredData?.gallery.second.desktop} className="rounded-[8px]" alt="" />
            </div>
            <img src={filteredData?.gallery.third.desktop} className="rounded-[8px]" alt="" />
        </div>)
}
