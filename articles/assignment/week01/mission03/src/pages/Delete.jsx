import {useState} from 'react';

function Delete(){
    const [inputName, setInputName] = useState('');
    const [name, setName] = useState('');

    const result = (() => {
        setName(inputName);
    })

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl border border-gray-100">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
                상품 삭제하기
            </h2>
            <div className="flex flex-col gap-5">
                <label className="block text-sm font-medium text-gray-700 mb-1">상품명: </label>
                <input type='string' value={inputName} onChange={(e)=>setInputName(e.target.value)} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="상품 이름을 입력하세요"
                />
                <div>
                    <button onClick={()=>{result; console.log(inputName, '가 삭제되었습니다.')}} className="w-full mt-4 bg-blue-600 text-white font-bold py-3 px-4 rounded-lg">
                        상품 삭제하기
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Delete;