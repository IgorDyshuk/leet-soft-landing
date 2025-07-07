import React from "react";
import {motion} from "framer-motion";
import PartnerContainer from "./PartnerContainer.jsx";

const MarqueeItem = ({images}) => {
    return (
        <div className="flex">
            <motion.div
                initial={{x: `0`}}
                animate={{x: `-100%`}}
                transition={{duration: 60, repeat: Infinity, ease: "linear"}}
                className="flex flex-shrink-0"
            >
                {images.map((image, index) => {
                    return <PartnerContainer key={index} image={image} />;
                })}
            </motion.div>

            <motion.div
                initial={{x: `0`}}
                animate={{x: `-100%`}}
                transition={{duration: 60, repeat: Infinity, ease: "linear"}}
                className="flex flex-shrink-0"
            >
                {images.map((image, index) => {
                    return <PartnerContainer key={index} image={image} />
                })}
            </motion.div>
        </div>
    );
};

export default MarqueeItem;