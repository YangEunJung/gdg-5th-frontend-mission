import logo from "../assets/gdg_logo.svg";

function Navbar({setPage}) {
    return(
        <div className="fixed top-0 left-0 right-0 flex justify-between border-[1.5px] border-[gray] bg-white px-4 py-2">
            <div className="w-[80px]">
                <img src={logo} />
            </div>

            <div className="flex items-center gap-[60px] text-[gray]">
                <div className="cursor-pointer"
                    onClick={function(){console.log("카테고리 필터링"); setPage('category')}}
                >
                    카테고리 필터링
                </div>
                <div className="cursor-pointer"
                    onClick={function(){console.log("가격 볌위 필터링"); setPage('price')}}
                >
                    가격 범위 필터링
                </div>
                <div className="cursor-pointer"
                    onClick={function(){console.log("상품 정렬"); setPage('itemSort')}}  
                >
                    상품 정렬
                </div>  
            </div>

            <div>
                <button
                    className="border-[blue] border-[2px] text-[blue] hover:cursor-pointer"
                    onClick={function(){console.log("관리자 페이지 클릭");}}
                >
                    관리자
                </button>
            </div>
        </div>
    )
}

export default Navbar;