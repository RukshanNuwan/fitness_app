import {ClassType} from "@/shared/types";

interface Props {
  item: ClassType;
}

const Class = ({item}: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 rounded-3xl`;

  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
      <div className={overlayStyles}>
        <p className='text-2xl'>{item.name}</p>
        <p className='mt-5 text-sm'>{item.description}</p>
      </div>

      <img src={item.image} alt={`${item.image}`} className='rounded-3xl'/>
    </li>
  );
}

export default Class;