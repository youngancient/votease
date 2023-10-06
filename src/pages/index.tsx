import { MainPageStyles } from "@/styles/Component/Index";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
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
          <div className="flag">
            <Image
              src="/assets/voting.svg"
              width={608}
              height={672}
              alt="nigerian flag"
            />
          </div>
          <div className="text">
            <div className="h1">
              <h1>Be a part of Decision.</h1>
              <h1>
                Vote <strong>Today!</strong>
              </h1>
            </div>
            <div className="btn">
              <button type="button" onClick={()=> router.push("/auth/register")}>Get Started</button>
            </div>
          </div>
        </MainPageStyles>
      </main>
    </>
  );
}
