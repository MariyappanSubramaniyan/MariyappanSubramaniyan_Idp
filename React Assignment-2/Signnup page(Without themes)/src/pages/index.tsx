import SeederLeftPart from "@component/organisms/LeftPanel";
import SignUpFormOrganism from "@component/organisms/SignupForm";
import SignupPageTemplate from "@component/template/SignupTemplate";

const SignupPage = () => {
  return (
    <SignupPageTemplate
      leftComponent={<SeederLeftPart />}
      rightComponent={<SignUpFormOrganism />}
    />
  );
};

export default SignupPage;
