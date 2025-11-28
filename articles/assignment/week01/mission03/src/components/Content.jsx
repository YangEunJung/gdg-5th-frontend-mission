import { useState, useEffect } from "react";
import logo from "../assets/gdg_logo.svg";
const API_URL = import.meta.env.VITE_API_URL;

function Content(){
    const [content, setContent] = useState("");

    const handleInput = (e) => {
        setContent(e.target.value);
    }

    const handleClick = async () => {
        console.log(content);
            try{  
              //const url = serverURL;
              const res = await fetch(`${API_URL}/api/products`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }, 
                body: JSON.stringify({
                    name: content
                })
            
              });

    
                if (!res.ok){
                    throw new Error(`Failed to fetch items: ${res.status}`);
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
              const res = await fetch(`${API_URL}/api/products`, {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json"
                }, 
                body: content
            
              });
              console.log("데이터 도착 확인:", json.data);
                  const jsonData = await res.json();
                  setUsers(jsonData.data);
    
                if (!res.ok){
                    throw new Error(`Failed to fetch items: ${res.status}`);
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
                        onClick={handleClick}
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