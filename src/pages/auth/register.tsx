import { PageLinkStyle, RegisterpageStyles } from "@/styles/Component/Register";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Votease app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <RegisterpageStyles>
          <div className="img">
            <Image
              src="/assets/register1.svg"
              width={608}
              height={672}
              alt="nigerian flag"
            />
          </div>
          <div className="second">
            <div className="text">
              <h1>Register</h1>
              <p>Type in VIN for PVC confirmation</p>
            </div>
            <form>
              <div className="form-ele">
                <label htmlFor="vin" className="label">
                  Voters Identification Number
                </label>
                <div className="input">
                  <input type="number" name="vin" id="" placeholder="VIN" />
                  {/* <div className="error">VIN is required</div> */}
                </div>
              </div>
              <div className="btn">
                <button type="submit">Confirm</button>
              </div>
              <PageLinkStyle>
                Already registered?{" "}
                <Link href="/auth/login">
                  <strong>Login</strong>
                </Link>
              </PageLinkStyle>
            </form>
          </div>
        </RegisterpageStyles>
      </main>
    </>
  );
};

export default Register;
