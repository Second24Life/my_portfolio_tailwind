import "../styles/globals.css";

// Components
import Layout from "../components/Layout";
import Transition from "../components/Transition";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <Layout>
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
