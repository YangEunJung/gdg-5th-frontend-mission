function IDCard({data}){
   return(
    <div className="rounded border-[1.5px] border-[gray] bg-white">
      <div className="center text-white bg-blue-400 p-2 rounded">
        회원카드
      </div>
      <div className="text-left mt-2 p-2 text-black">
        <p>emil: {data.email}</p>
        <p>first name: {data.first_name}</p>
        <p>last name: {data.last_name}</p>
      </div>
    </div>
   ) 
}

export default IDCard;