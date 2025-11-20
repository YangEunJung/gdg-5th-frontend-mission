import {useState} from 'react';
import {sortedData} from "../data/mockData";
import ItemList from "../components/ItemList";

function ItemSort(){
    const [currentPage, setCurrentPage] = useState("이름순(가다나순");

    function SortSelector(e) {
        const newValue = e.target.value;
        setCurrentPage(newValue);
    }

    function compareName(a, b){
        return a.itemName-b.itemName;
    }

    function comparePriceLow(a, b){
        return a.price-b.price;
    }

    function comparePriceHigh(a, b){
        return b.price-a.price;
    }

    function renderingPage(){
        if (currentPage === "이름순(가다나순"){
            sortedData.sort(compareName);
        }
        else if (currentPage === "낮은 가격순"){
            sortedData.sort(comparePriceLow);
        }
        else if (currentPage === "높은 가격순"){
            sortedData.sort(comparePriceHigh);
        }

        return (
            <div>
                {sortedData.map((data) => (
                    <ItemList key={data.id} item={data} />
                ))}
            </div>
        )
    }

    return (
        <div className="w-full flex justify-center pt-10 px-4">
            <div className="w-full max-w-[600px]">
                <select name="category" value={currentPage} onChange={SortSelector} className="p-2 border border-gray-300 rounded">
                    <option value="" disabled>정렬 기준 선택</option>
                    <option value="이름순(가다나순)">이름순(가다나순)</option>
                    <option value="낮은 가격순">낮은 가격순</option>
                    <option value="높은 가격순">높은 가격순</option>
                </select>
            </div>

            <div className="text-lg font-bold mt-6 mb-2 text-gray-800">
                내 구매 내역
            </div>

            <div>
                {renderingPage()}
            </div>

        </div>
    );
}

export default ItemSort;