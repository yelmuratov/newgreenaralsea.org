import React from 'react'

interface PartnerProps {
    name: string,
    imageUrl: string
    size?:number,
    link:string
}

const Partner:React.FC<PartnerProps> = ({name,imageUrl,link}) => {
  return (
        <a href={link} className='flex flex-col items-center mx-20'>
          <div className="img-box w-[100px]">
            <img src={imageUrl} alt="Partner img" />
          </div>
          <p className={`paragraph text-center max-w-[200px] roboto-bold mt-4 ${name=='Alternative Finance Lab'?"mt-0":"mt-4"}`}>{name}</p>
        </a>
  )
}

export default Partner;