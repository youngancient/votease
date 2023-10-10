import { HasVotedStyles } from "@/styles/Component/dashboard/Index";
import Image from "next/image";

export const HasVoted = () => {
  return (
    <HasVotedStyles>
      <Image src="/assets/done.svg" width={180} height={180} alt="done" />
      <h2>You have voted already!</h2>
    </HasVotedStyles>
  );
};
