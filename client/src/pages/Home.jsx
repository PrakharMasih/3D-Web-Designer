import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import alanBtn from '@alan-ai/alan-sdk-web';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
// import { useEffect } from 'react';

const Home = () => {
  const snap = useSnapshot(state);

  // useEffect(() => {
  //   alanBtn({
  //       key: '1843efe130e7216a50d256309aebd0de2e956eca572e1d8b807a3e2338fdd0dc/stage',
  //       onCommand: (commandData) => {
  //         if (commandData.command === 'go:back') {
  //           // Call the client code that will react to the received command
  //         }
  //       }
  //   });
  // }, []);
  

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./nike.png'
              alt="logo"
              className="w-18 h-12 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                Let's <br className="xl:block hidden" /> Build
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
              Create your unique and exclusive shirt with our brand-new 3D web customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home