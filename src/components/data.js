import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "What are you looking for?",
  desc: "Coffeechat uses AI to help you connect with the professionals that can and are willing to help you the most.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Intelligent Search",
      desc: "AI searches skills, experience, and background to the find people you need.",
      icon:<div><FaceSmileIcon /></div>,
    },
    {
      title: "It's Mutually Beneficial",
      desc: "Algorithms ensure people the you're connected with can benefit from you as well, so building a relationship is easy.",
      icon: <ChartBarSquareIcon />,
    },
    // {
    //   title: "Drive customer retention",
    //   desc: "This will be your last bullet point in this section.",
    //   icon: <CursorArrowRaysIcon />,
    // },
  ],
};

const benefitTwo = {
  title: "Make it happen.",
  desc: "Expanding your professional network is as easy as sending a text.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Lightning Fast Outreach",
      desc: "Conduct outreach and schedule meetings all from within the app.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Stay Connected",
      desc: "Communicate with everyone you meet in one place.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    // {
    //   title: "Dark & Light Mode",
    //   desc: "Nextly comes with a zero-config light & dark mode. ",
    //   icon: <SunIcon />,
    // },
  ],
};


export {benefitOne, benefitTwo};
