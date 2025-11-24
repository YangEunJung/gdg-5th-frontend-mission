import logo from "../assets/gdg_logo.svg";

function ManagerNavbar({setPage}) {
    return(
        <div className="fixed top-0 left-0 right-0 flex justify-between border-[1.5px] border-[gray] bg-white px-4 py-2">
            <div className="w-[80px]">
                <img src={logo} />
            </div>

            <div className="flex items-center gap-[60px] text-[gray]">
                <div className="cursor-pointer"
                    onClick={function(){console.log("상품 등록"); setPage('registration')}}
                >
                    상품 등록
                </div>
                <div className="cursor-pointer"
                    onClick={function(){console.log("재고 추가"); setPage('addition')}}
                >
                    재고 추가
                </div>
                <div className="cursor-pointer"
                    onClick={function(){console.log("상품 삭제"); setPage('delete')}}  
                >
                    상품 삭제
                </div>  
            </div>

            <div>
                <button
                    className="border-[blue] border-[2px] text-[blue] hover:cursor-pointer"
                    onClick={function(){console.log("소비자 페이지 클릭"); setPage('home')}}
                >
                    소비자
                </button>
            </div>
        </div>
    )
}

export default ManagerNavbar;