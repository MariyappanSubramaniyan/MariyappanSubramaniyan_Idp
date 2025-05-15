import { MainWrapper, LeftSection, RightSection } from "./index";
import { SignupPageTemplateProps } from "@utils/interface";

const SignupPageTemplate = ({ leftComponent, rightComponent }: SignupPageTemplateProps) => (
  <MainWrapper>
    <LeftSection as="aside">{leftComponent}</LeftSection>
    <RightSection as="main">{rightComponent}</RightSection>
  </MainWrapper>
);

export default SignupPageTemplate;
