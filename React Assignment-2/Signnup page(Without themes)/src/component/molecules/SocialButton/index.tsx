import { HoverButton } from "./index";
import Image from "@componet/atoms/Images";
import { ISocialButtonProps } from "./interface";

const SocialButton = ({ imageSrc, label }: ISocialButtonProps) => (
  <HoverButton>
    <Image src={imageSrc} alt={`${label} logo`} />
    {label}
  </HoverButton>
);

export default SocialButton;
