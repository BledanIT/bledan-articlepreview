import {useState} from 'react';
import SharePopUp from './SharePopUp';

const Author = () => {
  const [shareMenu, setShareMenu] = useState(false);

  return (
    <section className='relative overflow-hidden rounded-b-xl py-4 
    lg:mb-8 lg:px-3 lg:overflow-visible'>
      <div className='flex h-full px-10 items-center'>
        <img src='../public/images/avatar-michelle.jpg' alt='avatar' className='rounded-full w-[15%] grow-0 lg:w-14'></img>
        <div className='ml-2 grow lg:ml-6'>
          <h2 className='font-bold text-lg text-textColorFull leading-0'>Michelle Appleton</h2>
          <p className='font-medium text-lg text-textColorHalf'>28 Jun 2020</p>
        </div>
        <button onClick={() => {setShareMenu((prev) =>!prev)}} className={`${shareMenu ? 'bg-textColorHalf' : 'bg-bgColor1'} text-textColorFull rounded-full size-10 z-10 grow-0`}>
          <i className={`shareIcon ${shareMenu && 'share2fill'} text-textColorHalf w-1/2`}></i>
        </button>
      </div>
      <SharePopUp display={shareMenu}/>
    </section>
  )
}

export default Author