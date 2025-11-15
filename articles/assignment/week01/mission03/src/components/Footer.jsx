function Footer() {
    return (
        <div className="fixed bottom-[50px] flex items-center justify-center">
            <button
                className="flex justify-center w-[600px] border-[2px] border-[blue] bg-[white] text-[blue] hover:cursor-pointer"
                onClick = { function() {console.log("장바구니 버튼 클릭")} }
            >
                장바구니 구매하기
            </button>
        </div>
    )
}

export default Footer;