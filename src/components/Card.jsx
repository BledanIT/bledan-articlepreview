import TextArea from './TextArea';
import Author from './Author';

const Card = () => {
  return (
    <main className='bg-white grid grid-cols-1 grid-rows-[auto_auto_auto] m-auto w-[30rem] h-fit rounded-xl drop-shadow-xl
    lg:grid-flow-col lg:grid-cols-[1fr_2fr] lg:grid-rows-[auto_auto] lg:w-[64rem]'>
        <img src='images/drawers.jpg' alt='drawers' className='object-cover object-top rounded-t-xl w-full h-80
        lg:w-fit lg:h-full lg:rounded-none lg:rounded-l-xl lg:row-span-2'></img>
        <TextArea />
        <Author />
    </main>
  )
}

export default Card