import { motion } from "framer-motion";

const sentence = "Software developer based in Antwerp.";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SplitText() {
  return (
   <motion.h1
  className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo text-center w-full"
  variants={container}
  initial="hidden"
  animate="visible"
>
{sentence.split(" ").map((word, wordIndex) => (
  <span
    key={wordIndex}
    className="inline-block whitespace-nowrap mr-3"
  >
    {word.split("").map((char, charIndex) => (
      <motion.span
        key={charIndex}
        variants={letter}
        className="inline-block"
      >
        {char}
      </motion.span>
    ))}
  </span>
))}



</motion.h1>

  );
}
