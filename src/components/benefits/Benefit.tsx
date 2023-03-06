import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from 'framer-motion';

import {BenefitType, SelectedPage} from "@/shared/types";

const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity: 1, scale: 1}
}

interface Props {
  data: BenefitType;
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({data, setSelectedPage}: Props) => {
  return (
    <motion.div
      className='mt-5 rounded-2xl bg-gray-20 px-5 py-16 text-center'
      variants={childVariant}
    >
      <div className='mb-4 flex justify-center'>
        <div className='rounded-full bg-primary-100 p-4'>
          {data.icon}
        </div>
      </div>

      <h4 className='font-bold'>{data.title}</h4>
      <p className='my-3 text-sm'>{data.description}</p>

      <AnchorLink
        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
        href={`#${SelectedPage.Benefits}`}
        onClick={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
}

export default Benefit;