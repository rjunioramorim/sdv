export default function Subheader () {
  return (
    <div>
      {/* content */}
      <div className="flex container mx-auto mt-8 justify-center bg-white h-80">
        <div className="flex flex-1  items-center justify-center ">
          <div className="flex flex-1  items-end justify-center ">
            <img src="./images/maos.jpg" alt="" className="h-56 shadow-md rounded-xl" />
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <p className="text-3xl line overflow-clip overflow-hidden mb-4 break-words text-opacity-75 leading-8 text-gray-800">Doula, educadora perinatal, massoterapeuta gestacional, instrutora de Shantala, ofurô e cuidados com o bebê.</p>
      
              {/* <a href="#" className="py-3 px-12 bg-primary-500 rounded-md text-xl hover:bg-primary-600 hover:text-white">Saiba mais</a> */}
            </div>
        </div>
      </div>
    </div>
    )
  }