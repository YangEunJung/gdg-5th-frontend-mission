import {useState} from 'react';
import {priceSelectedData} from "../data/mockData";
import ItemList from "../components/ItemList";

function Price(){
    const [minimum, setMinimum] = useState(priceSelectedData.low);
    const [maximum, setMaximum] = useState(priceSelectedData.high);

    const [inputMin, setInputMin] = useState(0);
    const [inputMax, setInputMax] = useState(0);

    const filteredItems = priceSelectedData.items.filter((data) => { //각각의 priceSelectedData.items.price가 minimum보다 크거나 같고 maximum보다 작거나 같으면
        return data.price >= minimum && data.price <= maximum
    });

    function renderingPage(){
        if (filteredItems.length === 0){  //골라낸 아이템의 개수가 0개면
            return <p className="py-10 text-center text-gray-500">선택한 가격에 일치하는 상품이 없습니다. </p>;
        }

        else {
            return (
                <div>
                    {filteredItems.map((data) => (
                        <ItemList key={data.id} item={data} />
                    ))}
                </div>
            )
        }
    }

    function search(){
        setMinimum(inputMin);
        setMaximum(inputMax);
    }

    return ( //input 두칸, 하나는 minimum 하나는 maximum, input되는 값과 실제 값을 따로 구현해야 한다
                //검색버튼, 누르면 위의 값들을 변화시킴
        <div className="w-full flex justify-center pt-10 px-4">
            <div className="w-full max-w-[600px]">
                <div className="flex items-center gap-2 mb-6">
                    <input type="number" value={inputMin} onChange={(e)=>setInputMin(Number(e.target.value))} className="p-2 border border-gray-300 rounded w-full"/>
                    <input type="number" value={inputMax} onChange={(e)=>setInputMax(Number(e.target.value))} className="p-2 border border-gray-300 rounded w-full"/>
                    <button onClick={search} className="p-2 bg-blue-600 text-white rounded whitespace-nowrap px-4">검색</button>
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

export default Price;