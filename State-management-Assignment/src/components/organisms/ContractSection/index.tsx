import { useState } from "react";
import { ContractSectionContainer } from "./style";
import SectionHeader from "@components/organisms/SectionHeader";
import ContractTable from "@components/organisms/ContractTable";
import { IContractRow } from "@utils/interfaces";
import { TABLE_ROWS } from "@utils/constants";

const ContractSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectedRows, setSelectedRows] = useState<IContractRow[]>([]);

  const handleToggleRow = (id: number) => {
    const updated = selectedIds.includes(id)
      ? selectedIds.filter((i) => i !== id)
      : [...selectedIds, id];
    const updatedRows = updated.map((i) => TABLE_ROWS[i]);
    setSelectedIds(updated);
    setSelectedRows(updatedRows);
  };

  const handleToggleAll = () => {
    if (selectedIds.length === TABLE_ROWS.length) {
      setSelectedIds([]);
      setSelectedRows([]);
    } else {
      setSelectedIds(TABLE_ROWS.map((_, i) => i));
      setSelectedRows([...TABLE_ROWS]);
    }
  };

  return (
    <ContractSectionContainer>
      <SectionHeader activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {activeIndex === 0 ? (
        <ContractTable
          rows={TABLE_ROWS}
          selectedIds={selectedIds}
          onToggleRow={handleToggleRow}
          onToggleAll={handleToggleAll}
          showCheckbox={true}
        />
      ) : (
        <ContractTable
          rows={selectedRows}
          selectedIds={[]}
          onToggleRow={() => {}}
          onToggleAll={() => {}}
          showCheckbox={false}
        />
      )}
    </ContractSectionContainer>
  );
};

export default ContractSection;
