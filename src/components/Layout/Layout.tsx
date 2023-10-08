import { FunctionComponent, ReactNode } from "react";
import { useRouter } from "next/router";
import { Header, Logo } from "../Header/Header";
import { LogoOnly } from "@/styles/Component/Header";

interface ILayout {
  children: ReactNode;
}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {router.pathname.includes("dashboard") ? (
        <Header />
      ) : (
        <LogoOnly>
          <Logo href="/"/>
        </LogoOnly>
      )}
      <main>{children}</main>
    </>
  );
};

export default Layout;
