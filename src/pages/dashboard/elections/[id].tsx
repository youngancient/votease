import { ComingSoon } from "@/components/Comingsoon/Soon";
import {
  PartyCandidate,
  TACStyles,
  VotingBoothStyle,
} from "@/styles/Component/dashboard/Index";
import Head from "next/head";
import { useRouter } from "next/router";
import { Elections } from ".";
import Image from "next/image";
import { useState } from "react";
import { CandidatesData } from "../../../../constants/Candidates";
import { Radio } from "@/components/Dashboard";
import Link from "next/link";
import { PageLinkStyle } from "@/styles/Component/Register";
import { NormalButton } from "@/styles/Component/Button";
import { textVariant } from "@/animations/animation";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "@/redux/hooks/hooks";
import { userSelector } from "@/redux/userSlice";
import {useEffect} from "react";


const Election = () => {
  const { user } = useAppSelector(userSelector);
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/auth/login");
    }
  }, [router,user]);

  const id = router.query.id as string;
  const electionType = Elections.find((ele) => ele.id === id)?.title;
  const [candidates, setCandidates] = useState(CandidatesData);
  const handleCandidateSelection = (name: string) => {
    const newCandidates = candidates.map((ele) => {
      return { ...ele, isSelected: ele.name === name };
    });
    setCandidates(newCandidates);
  };
  const [showTAC, setShowTAC] = useState(false);
  const handleTAC = () => {
    const selectedCandidate = candidates.find((ele) => ele.isSelected === true);
    console.log(selectedCandidate);
    if (selectedCandidate) {
      setShowTAC(true);
    }
  };
  return (
    <>
      <Head>
        <title>Votease | Voting Booth</title>
        <meta name="description" content="Votease app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <VotingBoothStyle>
          <h1>{electionType} Booth</h1>
          {id === "pres" ? (
            <div className="ballot">
              <p>Pick your choicest!</p>
              <div className="list">
                {candidates.map((ele, index) => (
                  <PartyCandidate key={index} $isSelected={ele.isSelected}>
                    <div
                      className="img"
                      onClick={() => handleCandidateSelection(ele.name)}
                    >
                      <p className="party">{ele.party}</p>
                      <Image
                        width={180}
                        height={200}
                        src={ele.picture}
                        alt={ele.name}
                      />
                    </div>
                    <div className="below">
                      <Link href="/dashboard/candidates">
                        <p className="name">{ele.name}</p>
                      </Link>
                      <div
                        className="xx"
                        onClick={() => handleCandidateSelection(ele.name)}
                      >
                        <div className="party-logo">
                          <Image
                            width={50}
                            height={50}
                            src={ele.partyLogo}
                            alt={ele.party}
                          />
                        </div>
                        <div className="radio">
                          <Radio
                            isSelected={ele.isSelected}
                            handleSelect={() =>
                              handleCandidateSelection(ele.name)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </PartyCandidate>
                ))}
              </div>
              <div className="btn">
                <NormalButton onClick={handleTAC}>Cast Vote</NormalButton>
              </div>
            </div>
          ) : (
            <ComingSoon />
          )}
        </VotingBoothStyle>
        <AnimatePresence>
        {showTAC && (
          <TACStyles key= "hinokami">
            <motion.div className="inner"
            variants={textVariant}
            initial="initial"
            whileInView="final"
            key= "kagura"
            exit = "exit"
            >
              <div className="tac">
                <p>
                  You, As a member of Mainland Local Government under
                  Lagos Central Senatorial District,Lagos State, Nigeria is
                  allowed to vote. Please adhere to the rules and regulation
                  stated below in order to cast a valid vote. You are requested
                  to cast vote on your decision without any form of threat or
                  pressure. for further complaint, please call our emergency
                  number or you can swiftly reach us on: info@voteease.com.
                </p>
                <div className="sec">
                  <h4>Note:</h4>
                  <ul className="notelist">
                    <li>Do not share your personal security code with anybody. </li>
                    <li> You are allowed to make only one vote per election</li>
                    <li>You are to cast your vote before the election period/time elapsed.</li>
                    <li>Candidate information are available on the candidates page</li>
                    <li>Election results will be announced 12 hours after the completion of voting process.</li>
                    <li> After selecting the candidate click the Finish button to submit your vote</li>
                  </ul>
                </div>
              </div>
              <div className="buttons">
                <button type="button" className="cancel" onClick={()=> setShowTAC(false)}>Cancel</button>
                <button type="button">Finish</button>
              </div>
            </motion.div>
          </TACStyles>
        )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Election;
