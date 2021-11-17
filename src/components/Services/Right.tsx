import Image from 'next/image'

export default function ServiceLeft(props) {
  
  return (
    <>
      <div className="flex flex-col md:flex-row transform transition-all duration-200 ease-in-out justify-between items-center container mx-auto text-gray-700 px-6 py-12">
        <div className="flex flex-col justify-center flex-1">
          <h3 className="text-2xl">{props.title}</h3>
          <span className="border-b-2 border-primary-500 w-6/12 mb-4"></span>
          <span className="text-xl text-center md:text-left w-full break-words">
            {props.content}
          </span>
        </div>
        <div className="flex flex-1 items-end justify-center pt-4 md:w-auto ">
          <Image src={props.image} className="h-24 md:h-44 rounded-md shadow-lg" width="360" height="200"/>
        </div>
      </div>
    </>
  )
}