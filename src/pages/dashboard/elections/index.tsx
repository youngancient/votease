import { ElectionStyles } from "@/styles/Component/dashboard/Index";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/hooks/hooks";
import { userSelector } from "@/redux/userSlice";



interface IElection {
  title: string;
  id: string;
}
export const Elections: IElection[] = [
  { title: "Presidential", id: "pres" },
  { title: "Gubernatorial", id: "guber" },
  { title: "Senatorial", id: "senate" },
  { title: "House of Representatives", id: "hor" },
  { title: "State of Assembly", id: "soa" },
  { title: "Local Government", id: "lga" },
];

const DashboardIndex = () => {
  const { user } = useAppSelector(userSelector);
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/auth/login");
    }
  }, [router,user]);

  return (
    <>
      <Head>
        <title>Votease | Dashboard</title>
        <meta name="description" content="Votease app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ElectionStyles>
          <h1>Welcome Jude!</h1>
          <div className="one">
            <p>Select Category</p>
            <div className="second">
              {Elections.map((ele, index) => (
                <Link key={index} href={`/dashboard/elections/${ele.id}`}>
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0.75 }}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.1,
                      },
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: index * 0.2, // Adjust the delay value as needed
                        duration: 0.7,
                      },
                    }}
                  >
                    {ele.title}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </ElectionStyles>
      </main>
    </>
  );
};

export default DashboardIndex;
