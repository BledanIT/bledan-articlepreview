import {useState, useEffect} from 'react';

const SharePopUp = ({display}) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(display);
    },[display]);

    return (
        <div className={`bg-textColorFull text-bgColor2 ${isOpen ? 'grid' : 'hidden'} grid-cols-[1.5fr_8fr] gap-x-4 h-full px-10 items-center overflow-hidden absolute bottom-0 ease-out duration-150
        lg:rounded-xl lg:speechBubble lg:overflow-visible lg:bottom-24 lg:left-[67%] lg:h-16`}>
            <h2 className='uppercase tracking-[0.35rem]'>Share</h2>
            <div className='flex justify-start items-center *:px-2.5'>
            <a href='https://facebook.com'><i className='facebookIcon text-bgColor1 inline'></i></a>
            <a href='https://x.com'><i className='twitterIcon text-bgColor1 inline'></i></a>
            <a href='https://pinterest.com'><i className='pinterestIcon text-bgColor1 inline'></i></a>
            </div>
        </div>
    )
}

export default SharePopUp