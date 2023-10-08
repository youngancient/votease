import { HidePwd } from "@/components/auth/Login";
import { ButtonLoader } from "@/styles/Component/Login";
import { LoginPageStyles, PageLinkStyle } from "@/styles/Component/Register";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

// Tasks
// Use React hook form to finish login
// write a next endpoint to send mail to client
// setup redux

interface ISignInForm {
  vin: string;
  pwd: string;
}

const Login = () => {
  const [showPwd, setShowPwd] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>({
    mode: "onBlur",
    defaultValues: {
      vin: "",
      pwd: "",
    },
  });
  const handleLogin = (data: ISignInForm) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      reset();
      router.push("/dashboard/elections");
    }, 2000);
    console.log(data);
  };
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
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-ele">
                  <label htmlFor="vin" className="label">
                    Voters Identification Number
                  </label>
                  <div className="input">
                    <input
                      type="text"
                      {...register("vin", {
                        required: "VIN is required",
                        pattern: /^[a-zA-Z0-9]+$/i,
                        minLength: 17,
                      })}
                      id=""
                      placeholder="VIN"
                    />
                    {errors?.vin && errors.vin.type === "required" && (
                      <div className="error">{errors.vin.message}</div>
                    )}

                    {errors?.vin && errors?.vin.type === "minLength" && (
                      <div className="error">min length is 17</div>
                    )}
                    {errors?.vin && errors?.vin.type === "pattern" && (
                      <div className="error">
                        Only letters and numbers are allowed.
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-ele">
                  <label htmlFor="pwd" className="label">
                    Password
                  </label>
                  <div className="input">
                    <HidePwd
                      showPwd={showPwd}
                      handleClick={() => setShowPwd(!showPwd)}
                    />
                    <input
                      type={showPwd ? "text" : "password"}
                      {...register("pwd", { required: "Password is required" })}
                      id=""
                      placeholder="password"
                    />
                    {errors?.pwd && errors?.pwd.type === "required" && (
                      <div className="error">Password is required</div>
                    )}
                  </div>
                </div>
                <div className="btn">
                  <button type="submit">
                    {isLoading ? <ButtonLoader /> : "Login"}
                  </button>
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
