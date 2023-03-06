import {ReactNode} from "react";

interface Props {
  children: ReactNode;
}

const HeadingText = ({children}: Props) => {
  return (
    <h1 className='basis-3/5 font-montserrat text-3xl font-bold uppercase'>{children}</h1>
  );
}

export default HeadingText;