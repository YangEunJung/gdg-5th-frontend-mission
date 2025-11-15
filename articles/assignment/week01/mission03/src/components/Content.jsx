import { useState } from "react";
import logo from "../assets/gdg_logo.svg";

function Content(){
    const [content, setContent] = useState("");

    const handleInput = (e) => {
        setContent(e.target.value);
    }

    return (
        <div className="w-full h-full flex justify-center pt-[60px]">
            <div className="w-full">
                <div className="flex justify-center gap-[20px]">
                    <input
                        className="h-[50px] w-[400px] border-[gray] border-[1.2px]"
                        placeholder="상품 검색..."
                        onChange={handleInput}
                        value={content}
                    />

                    <button
                        className="flex h-[50px] w-[200px] items-center bg-[blue] text-[white] hover:cursor-pointer"
                        onClick={function(){
                            console.log(content);
                        }}
                    >
                    검색
                    </button>
                </div>
                
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px]">
                <img src={logo}
                    className="opacity-[0.2]"
                />
            </div>
        </div>
    )
}

export default Content;