import { BackgroundBubble } from "./BackgroundBubble"

export function Waves() {

  /*#2e31c8 #2e7dc8 #851e1e #85841e #d528bb #237811 #b95d14 */

  return(
    <div className="fixed w-full overflow-hidden -z-10 opacity-20 blur-[70px] h-[100vh]">
      <BackgroundBubble
        position={{top: "-6rem", left: "-7rem"}}
        width={"37rem"}
        color={"#2e31c8"}
      />
      <BackgroundBubble
        position={{top: "0rem", left: "22rem"}}
        width={"44rem"}
        color={"#2e7dc8"}
      />
      <BackgroundBubble
        position={{top: "-9rem", left: "40rem"}}
        width={"44rem"}
        color={"#851e1e"}
        zindex={"-1"}
      />
      <BackgroundBubble
        position={{top: "-4rem", left: "72%"}}
        width={"40rem"}
        color={"#85841e"}
      />
      <BackgroundBubble
        position={{top: "50%", left: "-2rem"}}
        width={"48rem"}
        color={"#d528bb"}
        zindex={"-1"}
      />
      <BackgroundBubble
        position={{top: "58%", left: "35%"}}
        width={"48rem"}
        color={"#237811"}
      />
      <BackgroundBubble
        position={{top: "58%", left: "75%"}}
        width={"48rem"}
        color={"#b95d14"}
        zindex={"-1"}
      />

    </div>
  )
}
