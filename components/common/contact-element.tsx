import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HighlightedIcon } from "./highlighted-elements";

const ContactElement = ({
  icon,
  link,
  name,
  delay,
}: {
  icon: IconDefinition;
  name: string;
  link: string;
  delay: number;
}) => {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <div className="flex gap-2 items-center leading-none hover:opacity-70 transition ease-in-out">
        <HighlightedIcon delay={delay}>
          <FontAwesomeIcon icon={icon} className="text-lg" />
        </HighlightedIcon>
        <span className="text-lg font-semibold"> {name} </span>
      </div>
    </a>
  );
};

export default ContactElement;
