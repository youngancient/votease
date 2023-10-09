import { ComingSoon } from "@/components/Comingsoon/Soon";
import { useAppSelector } from "@/redux/hooks/hooks";
import { userSelector } from "@/redux/userSlice";
import Head from "next/head";
import { useRouter } from "next/router";
import {useEffect} from "react";


const LiveStats = () => {
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
        <title>Votease | Livestats</title>
        <meta name="description" content="Votease app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <ComingSoon />
      </main>
    </>
  );
};

export default LiveStats;