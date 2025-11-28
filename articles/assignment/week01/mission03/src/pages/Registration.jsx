import {useState, useEffect} from 'react';
const API_URL = import.meta.env.VITE_API_URL;

function Registration(){
    const [inputName, setInputName] = useState('');
    const [name, setName] = useState('');

    const [inputQuantity, setInputQuantity] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const [inputPrice, setInputPrice] = useState(0);
    const [price, setPrice] = useState(0);

    const [category, setCategory] = useState('');
    const [inputCategory, setInputCategory] = useState('');

    const result = (() => {
        setName(inputName);
        setQuantity(inputQuantity);
        setPrice(inputPrice);
        setCategory(inputCategory);
    })

    const [users, setUsers] = useState([]);
      
    const handleOnClick = async () => {
        result();
        try{  
              //const url = serverURL;
              const res = await fetch(`${API_URL}/api/items`, {
                method: 'GET',
                headers: {
                  "Content-Type": "application/json"
                },
                // body: JSON.stringify({
                //     name: inputName,
                //     price: inputPrice,
                //     stock: inputQuantity,
                //     category: 
                // })
              });
    
                if (res.ok){
                  const content = await res.json();
                  console.log("데이터 도착 확인:", content.data);
                  setUsers(content.data);
                }
                else{
                  throw Error("데이터를 가져오지 못했습니다.");
                }
            }
            catch(err){
              console.error(err);
            }
    }
    
    useEffect(() => {
        async function post() {
            try{  
              //const url = serverURL;
              const res = await fetch(`${API_URL}/api/items`, {
                method: 'GET',
                headers: {
                  "Content-Type": "application/json"
                },
            
              });
    
                if (res.ok){
                  const content = await res.json();
                  console.log("데이터 도착 확인:", content.data);
                  setUsers(content.data);
                }
                else{
                  throw Error("데이터를 가져오지 못했습니다.");
                }
            }
            catch(err){
              console.error(err);
            }
          }
    
          post();
      }, []);

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl border border-gray-100">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
                상품 등록하기
            </h2>
            <div>
                <div className="flex flex-col gap-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">상품명: </label>
                    <input type='string' value={inputName} onChange={(e)=>setInputName(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="상품 이름을 입력하세요"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">수량: </label>
                    <input type='number' value={inputQuantity} onChange={(e)=>setInputQuantity(Number(e.target.value))} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="추가할 상품 수량을 입력하세요"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">가격: </label>
                    <input type='number' value={inputPrice} onChange={(e)=>setInputPrice(Number(e.target.value))} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="추가할 상품 가격을 입력하세요"
                    />
                </div>

                <div className="flex flex-col gap-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">카테고리: </label>
                    <input type='string' value={inputCategory} onChange={(e)=>setInputCategory(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="상품의 카테고리을 입력하세요"
                    />
                </div>

                <div>
                    <button onClick={handleOnClick}
                        className="w-full mt-4 bg-blue-600 text-white font-bold py-3 px-4 rounded-lg"
                    >
                        상품 등록하기
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Registration;