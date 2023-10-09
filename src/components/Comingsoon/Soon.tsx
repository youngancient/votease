import { textVariant } from "@/animations/animation";
import { ComingSoonStyles } from "@/styles/Component/Soon"
import { motion } from "framer-motion";


export const ComingSoon =()=>{
    return(
        <ComingSoonStyles>
            <motion.h3
            variants={textVariant}
            initial = "initial"
            whileInView="final"
            >Coming Soon!</motion.h3>
        </ComingSoonStyles>
    )
}