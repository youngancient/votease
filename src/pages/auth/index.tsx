import { CheckEmailModal } from "@/components/auth/Register";
import { ButtonLoader } from "@/styles/Component/Login";
import { PageLinkStyle, RegisterpageStyles } from "@/styles/Component/Register";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { AnimateHeroImg, textVariant } from "@/animations/animation";

interface ISignUpForm {
  vin: string;
}
const Register = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [sentMail, setSentMail] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>({
    mode: "onBlur",
    defaultValues: {
      vin: "",
    },
  });
  const controlSubmit = (data: ISignUpForm) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      reset();
      setSentMail(true);
    }, 2000);
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>SignUp</title>
        <meta name="description" content="Votease app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <RegisterpageStyles>
          <motion.div
            className="img"
            variants={AnimateHeroImg}
            initial="initial"
            whileInView="final"
          >
            <Image
              src="/assets/register1.svg"
              width={608}
              height={672}
              alt="nigerian flag"
            />
          </motion.div>
          <div className="second">
            <div className="text">
              <motion.h1
                variants={textVariant}
                initial="initial"
                whileInView="final"
              >
                Register
              </motion.h1>
              <motion.p
                variants={textVariant}
                initial="initial"
                whileInView="final2"
              >
                Type in VIN for PVC confirmation
              </motion.p>
            </div>
            <form onSubmit={handleSubmit(controlSubmit)}>
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
                      maxLength : 17,
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
                className="btn"
                variants={textVariant}
                initial="initial"
                whileInView="final3"
              >
                <button type="submit">
                  {isLoading ? <ButtonLoader /> : "Confirm"}
                </button>
              </motion.div>
              <PageLinkStyle>
                Already registered?{" "}
                <Link href="/auth/login">
                  <strong>Login</strong>
                </Link>
              </PageLinkStyle>
            </form>
          </div>
        </RegisterpageStyles>
        {sentMail && <CheckEmailModal />}
      </main>
    </>
  );
};

export default Register;
