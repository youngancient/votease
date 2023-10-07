import { CheckEmailModal } from "@/components/auth/Register";
import { ButtonLoader } from "@/styles/Component/Login";
import { PageLinkStyle, RegisterpageStyles } from "@/styles/Component/Register";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
            <form onSubmit={handleSubmit(controlSubmit)}>
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
                    <div className="error">Only letters and numbers are allowed.</div>
                  )}
                </div>
              </div>
              <div className="btn">
                <button type="submit">{isLoading ? <ButtonLoader /> : "Confirm"}</button>
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
        {sentMail && <CheckEmailModal />}
      </main>
    </>
  );
};

export default Register;
