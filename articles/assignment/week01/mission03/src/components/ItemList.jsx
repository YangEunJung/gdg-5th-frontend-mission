import {useState} from 'react';

function ItemList({item}){
    const [selectItemCount, setSelectItemCount]=useState(0);
    const [isCart, setIsCart]=useState(false);

     function decre(){
        if (selectItemCount > 0) {
            setSelectItemCount(selectItemCount-1);
        }
    }

    function incre(){
        setSelectItemCount(selectItemCount+1);
    }

    function clickCart(){
        setIsCart(true);
        console.log(`(${item.itemName}, ${selectItemCount})`); //$ 기호로 수식 바로 표시
    }

    return(
        <div className="flex justify-between items-center py-4 border-b">
            <div>
                <div className="font-bold text-lg">
                    {item.itemName}
                </div>

                <div className="text-gray-800 text-sm">
                    {item.price}원
                </div>

                <div className="text-gray-500 text-xs">
                    남은 수량: {item.quantity} 개
                </div>
            </div>
            
            <div className="flex items-center gap-2">
                <button onClick={decre} className="px-3 py-1 text-lg">-</button>
                    <p className="px-4 py-1 text-lg">{selectItemCount}</p>
                <button onClick={incre} className="px-3 py-1 text-lg">+</button>
            </div>

            <div>
                <button
                    onClick={clickCart}
                    disabled={isCart} //비활성화 여부
                    className={`
                        text-white
                        ${isCart
                            ? "bg-[gray] cursor-not-allowed" 
                            : "bg-[blue]"
                        }
                    `}
                >
                    장바구니
                </button>
            </div>


        </div>
    )
}

export default ItemList;