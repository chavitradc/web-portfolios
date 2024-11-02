import Link from "next/link";
import { SiHackthebox } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "/" },
  { icon: <SiHackthebox />, path: "https://app.hackthebox.com/users/1982846" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/chavitradc" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
