import { HidePwd } from "@/components/auth/Login";
import { ButtonLoader } from "@/styles/Component/Login";
import { LoginPageStyles, PageLinkStyle } from "@/styles/Component/Register";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { AnimateHeroImg, textVariant } from "@/animations/animation";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { setUser } from "@/redux/userSlice";

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
  const dispatch = useAppDispatch();
  const handleLogin = (data: ISignInForm) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      reset();
      // log user in
      dispatch(setUser(data));
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
          <motion.div
            className="img"
            variants={AnimateHeroImg}
            initial="initial2"
            whileInView="final"
          >
            <Image
              src="/assets/login.svg"
              width={608}
              height={672}
              alt="nigerian flag"
            />
          </motion.div>
          <div className="second">
            <div className="xxx">
              <div className="text">
                <motion.h1
                  variants={textVariant}
                  initial="initial"
                  whileInView="final"
                >
                  Login
                </motion.h1>
                <motion.p
                  variants={textVariant}
                  initial="initial"
                  whileInView="final2"
                >
                  Type in VIN for PVC confirmation
                </motion.p>
              </div>
              <form onSubmit={handleSubmit(handleLogin)}>
                <motion.div
                  className="form-ele"
                  variants={textVariant}
                  initial="initial"
                  whileInView="final2"
                >
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
                        maxLength: 17,
                      })}
                      id=""
                      placeholder="VIN"
                    />
                    {errors?.vin && errors.vin.type === "required" && (
                      <div className="error">{errors.vin.message}</div>
                    )}
                    {errors?.vin && errors?.vin.type === "minLength" && (
                      <div className="error">VIN must be 17 chars</div>
                    )}
                    {errors?.vin && errors?.vin.type === "maxLength" && (
                      <div className="error">VIN must be 17 chars</div>
                    )}
                    {errors?.vin && errors?.vin.type === "pattern" && (
                      <div className="error">
                        Only letters and numbers are allowed.
                      </div>
                    )}
                  </div>
                </motion.div>
                <motion.div
                  className="form-ele"
                  variants={textVariant}
                  initial="initial"
                  whileInView="final2"
                >
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
                </motion.div>
                <motion.div
                  className="btn"
                  variants={textVariant}
                  initial="initial"
                  whileInView="final3"
                >
                  <button type="submit">
                    {isLoading ? <ButtonLoader /> : "Login"}
                  </button>
                </motion.div>
                <PageLinkStyle>
                  Not registered?{" "}
                  <Link href="/auth">
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
