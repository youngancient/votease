import { HidePwd } from "@/components/auth/Login";
import { LoginPageStyles, PageLinkStyle } from "@/styles/Component/Register";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


// Tasks
// Use React hook form to finish login and register
// setup redux


const Login = () => {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Votease app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LoginPageStyles>
          <div className="img">
            <Image
              src="/assets/login.svg"
              width={608}
              height={672}
              alt="nigerian flag"
            />
          </div>
          <div className="second">
            <div className="xxx">
              <div className="text">
                <h1>Login</h1>
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
                <div className="form-ele">
                  <label htmlFor="pwd" className="label">
                    Password
                  </label>
                  <div className="input">
                    <HidePwd showPwd={showPwd} handleClick={() => setShowPwd(!showPwd)} />
                    <input type={showPwd ? "text" : "password"} name="pwd" id="" placeholder="password" />
                    {/* <div className="error">VIN is required</div> */}
                  </div>
                </div>
                <div className="btn">
                  <button type="submit">Confirm</button>
                </div>
                <PageLinkStyle>
                  Not registered?{" "}
                  <Link href="/auth/register">
                    <strong>Register</strong>
                  </Link>
                </PageLinkStyle>
              </form>
            </div>
          </div>
        </LoginPageStyles>
      </main>
    </>
  );
};

export default Login;
