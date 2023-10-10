import { MainPageStyles } from "@/styles/Component/Index";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { textVariant } from "@/animations/animation";
import { useAppSelector } from "@/redux/hooks/hooks";
import { userSelector } from "@/redux/userSlice";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { user } = useAppSelector(userSelector);
  
  return (
    <>
      <Head>
        <title>Votease</title>
        <meta name="description" content="Votease app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainPageStyles>
          <motion.div
            className="flag"
            variants={textVariant}
            initial="initial"
            whileInView="final"
          >
            <Image
              src="/assets/voting2.svg"
              width={608}
              height={672}
              alt="nigerian flag"
            />
          </motion.div>
          <div className="text">
            <div className="h1">
              <motion.h1
                variants={textVariant}
                initial="initial"
                whileInView="final"
              >
                Be a part of Decision.
              </motion.h1>
              <motion.h1
                variants={textVariant}
                initial="initial"
                whileInView="final2"
              >
                Vote <strong>Today!</strong>
              </motion.h1>
            </div>
            <div className="btn">
              <button
                type="button"
                onClick={() => router.push("/auth/")}
              >
                Get Started
              </button>
            </div>
          </div>
        </MainPageStyles>
      </main>
    </>
  );
}
