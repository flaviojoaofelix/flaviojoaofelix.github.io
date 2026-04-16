import type { Variants } from "motion/react";

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
