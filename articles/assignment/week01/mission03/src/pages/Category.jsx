import {useState} from 'react';
import ItemList from "../components/ItemList";
import {categoryData} from "../data/mockData";

function Category(){
    const [currentPage, setCurrentPage] = useState('');

    function renderingPage(){
        if (currentPage === '의류'){
            return (
                <div>
                    {categoryData.map((data) => (
                        <ItemList key={data.id} item={data} />
                    ))}
           
                </div>
            )
        }

        else {
            return (
                <p className="py-10 text-center text-gray-500">선택한 카테고리에 상품이 없습니다. </p>
            )
        }
    }

    function categorySelector(e) {
        const newValue = e.target.value;
        console.log(newValue, "카테고리 클릭");
        setCurrentPage(newValue);
    }

    return ( //카테고리 선택하는 부분, HTML의 select와 차이
        <div className="w-full flex justify-center pt-10 px-4">
            <div className="w-full max-w-[600px]">
                <div className="mb-6">
                    <select name="category" value={currentPage} onChange={categorySelector} className="p-2 border border-gray-300 rounded">
                        <option value="" disabled>카테고리 선택</option>
                        <option value="의류">의류</option>
                        <option value="전자기기">전자기기</option>
                        <option value="화장품">화장품</option>
                        <option value="식품">식품</option>
                    </select>
                </div>
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

export default Category;