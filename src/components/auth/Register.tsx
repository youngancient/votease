import { NormalButton } from "@/styles/Component/Button";
import { CheckEmailStyles } from "@/styles/Component/Register";
import Image from "next/image";
import { useRouter } from "next/router";

export const CheckEmailModal = () => {
    const router = useRouter();
  return (
    <CheckEmailStyles>
      <div className="inner">
        <Image src="/assets/done.svg" width={180} height={180} alt="done" />
        <div className="x">
          <h2>Hello! You&rsquo;ve got mail</h2>
          <h2>We sent a passcode to Your email</h2>
        </div>
        <div className="btn">
          <NormalButton onClick={()=> router.push("/auth/login")}>Login</NormalButton>
        </div>
      </div>
    </CheckEmailStyles>
  );
};
