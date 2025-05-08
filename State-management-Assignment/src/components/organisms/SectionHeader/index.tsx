import CashAccelerationHeader from "@components/molecules/CashAcclerationTitle";
import RefreshMolecule from "@components/molecules/RefershMolecule";
import AccelerationButton from "@components/molecules/AcclerationButton";
import { BUTTON_LABELS } from "@utils/constants";
import { SectionHeaderContainer, ButtonGroup } from "./style";

interface SectionHeaderProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const SectionHeader = ({ activeIndex, setActiveIndex }: SectionHeaderProps) => {
  return (
    <>
      <SectionHeaderContainer>
        <CashAccelerationHeader />
        <RefreshMolecule />
      </SectionHeaderContainer>
      <ButtonGroup>
        {BUTTON_LABELS.map((label, index) => (
          <AccelerationButton
            key={label}
            label={label}
            active={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </ButtonGroup>
    </>
  );
};

export default SectionHeader;
