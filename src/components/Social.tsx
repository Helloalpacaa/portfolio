import { FaGithub, FaLinkedin } from "react-icons/fa";

interface Props {
  containerStyles?: string;
  iconStyles?: string;
}

export default function Social({ containerStyles, iconStyles }: Props) {
  return (
    <div className={containerStyles}>
      <a
        href="https://github.com/Helloalpacaa"
        target="_blank"
        rel="noopener noreferrer"
        className={iconStyles}
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/huijie-heidi-pan-81b6681a9/"
        target="_blank"
        rel="noopener noreferrer"
        className={iconStyles}
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
