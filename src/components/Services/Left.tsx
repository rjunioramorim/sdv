import Image from 'next/image'

export default function ServiceRight(props) {
  return (
    <>
      <div className="flex  bg-gray-100 items-center transform transition-all duration-200 ease-in-out py-12 px-6">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center container mx-auto text-gray-700 ">
          <div className="flex flex-1 items-end justify-center pt-4 md:w-auto  ">
            <Image src={props.image} className="h-44 rounded-md shadow-lg" width="360" height="200"/>
          </div>
          <div className="flex flex-col justify-start flex-1">
            <h3 className="text-2xl">{props.title}</h3>
            <span className="border-b-2 border-primary-500 w-6/12 mb-4"></span>
            <span className="text-xl text-center md:text-left w-full break-words">
              {props.content}
            </span>
          </div>
        </div>
      </div>
    </>
  )
} 
