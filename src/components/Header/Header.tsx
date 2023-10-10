import { SlideinAnimation } from "@/animations/animation";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { removeUser } from "@/redux/userSlice";
import { NormalButton } from "@/styles/Component/Button";
import { ForX, HeaderStyles, LogoStyles, MobileSlideIn } from "@/styles/Component/Header";
import { PageLinkStyle } from "@/styles/Component/Register";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";

interface ILink {
  isSelected: boolean;
  name: string;
  href: string;
}
const Links: ILink[] = [
  { name: "Voting", isSelected: true, href: "/dashboard/elections" },
  { name: "Live Stats", isSelected: false, href: "/dashboard/livestats" },
  { name: "Candidates", isSelected: false, href: "/dashboard/candidates" },
];
export const Header = () => {
  const router = useRouter();
  const [links, setLinks] = useState(Links);
  const [showMobilenav, setShowMobilenav] = useState(false);
  const selectLink = (name: string) => {
    const newLinks = links.map((ele) => {
      return { ...ele, isSelected: ele.name === name };
    });
    setLinks(newLinks);
    setShowMobilenav(false);
  };
  const dispatch = useAppDispatch();
  const logout =()=>{
    router.push("/");
    dispatch(removeUser());
  }
  return (
    <HeaderStyles>
      <div className="logo">
        <Logo
          href={router.pathname.includes("dashboard") ? "/dashboard/elections" : "/"}
        />
      </div>
      <div className="d-links">
        <div className="x">
          {links.map((ele, index) => (
            <Link
              key={index}
              href={ele.href}
              onClick={() => selectLink(ele.name)}
            >
              <PageLinkStyle $isSelected={ele.isSelected}>{ele.name}</PageLinkStyle>
            </Link>
          ))}
        </div>
        <div className="btn">
            <NormalButton onClick={logout}>Logout</NormalButton>
        </div>
      </div>
      <div className="tiles">
        <Menu handleClick={() => setShowMobilenav(true)} />
      </div>

      <AnimatePresence>
        {showMobilenav && (
          <MobileSlideIn>
            <motion.div className="main"
            initial = "initial"
            animate = "final"
            variants={SlideinAnimation}
            exit = "exit"
            key="kagura"
            >
              <div className="cancel">
                <ForX onClick={() => setShowMobilenav(false)}>
                  <XVector />
                </ForX>
              </div>
              <div className="second">
                <div className="mobile-links">
                  {links.map((ele, index) => (
                    <Link
                      href={ele.href}
                      key={index}
                      onClick={() => selectLink(ele.name)}
                    >
                      <PageLinkStyle $isSelected={ele.isSelected}>
                        {ele.name}
                      </PageLinkStyle>
                    </Link>
                  ))}
                </div>
                <NormalButton onClick={() => router.push("/")}>Logout</NormalButton>
              </div>
            </motion.div>
            <div
              className="nothing"
              onClick={() => setShowMobilenav(false)}
            ></div>
          </MobileSlideIn>
        )}
      </AnimatePresence>
    </HeaderStyles>
  );
};

interface ILogo {
  href: string;
}
export const Logo: FunctionComponent<ILogo> = ({ href }) => {
  return (
    <Link href={href}>
      <LogoStyles>
        Vote<strong>Ease</strong>
      </LogoStyles>
    </Link>
  );
};

export interface IClickable {
  handleClick: () => void;
}
export const Menu: FunctionComponent<IClickable> = ({ handleClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
      onClick={handleClick}
    >
      <path
        d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z"
        fill="white"
      />
    </svg>
  );
};

export const XVector = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
      >
        <path
          d="M0.307505 10.6925C0.504459 10.8894 0.771552 11 1.05005 11C1.32854 11 1.59563 10.8894 1.79259 10.6925L5.50634 6.97874L9.22009 10.6925C9.41818 10.8838 9.68348 10.9897 9.95886 10.9873C10.2342 10.9849 10.4977 10.8744 10.6924 10.6797C10.8871 10.485 10.9976 10.2216 11 9.94617C11.0024 9.6708 10.8965 9.4055 10.7052 9.20741L6.99142 5.49366L10.7052 1.77991C10.8965 1.58182 11.0024 1.31652 11 1.04114C10.9976 0.765767 10.8871 0.502346 10.6924 0.307617C10.4977 0.112889 10.2342 0.00243378 9.95886 4.1008e-05C9.68348 -0.00235271 9.41818 0.103509 9.22009 0.294824L5.50634 4.00858L1.79259 0.294824C1.5945 0.103509 1.3292 -0.00235271 1.05383 4.1008e-05C0.778448 0.00243378 0.515027 0.112889 0.320299 0.307617C0.12557 0.502346 0.0151142 0.765767 0.0127213 1.04114C0.0103283 1.31652 0.11619 1.58182 0.307505 1.77991L4.02126 5.49366L0.307505 9.20741C0.110609 9.40437 0 9.67146 0 9.94995C0 10.2284 0.110609 10.4955 0.307505 10.6925Z"
          fill="#F8F8F8"
        />
      </svg>
    );
  };