import { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import InputField from "@components/atoms/InputField";
import type { UserFormProps } from "@utils/interfaces";

export default function UserForm({
  selected,
  onSubmit,
  onCancel,
}: Readonly<UserFormProps>) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({ name: false, age: false });

  useEffect(() => {
    if (selected) {
      setName(selected.name);
      setAge(String(selected.age));
    }
  }, [selected]);

  const handleSubmit = () => {
    const ageValue = Number(age);
    const hasError = {
      name: name.trim() === "",
      age:
        age.trim() === "" || isNaN(ageValue) || ageValue < 1 || ageValue > 100,
    };

    setErrors(hasError);

    if (!hasError.name && !hasError.age) {
      onSubmit({ name, age: ageValue }, selected?.id);
      setName("");
      setAge("");
    }
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d{0,2}$/.test(val)) setAge(val);
  };

  return (
    <Box display="flex" gap={2} mb={2}>
      <InputField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />
      <InputField
        label="Age"
        value={age}
        onChange={handleAgeChange}
        error={errors.age}
        type="number"
      />
      <Button variant="contained" onClick={handleSubmit}>
        {selected ? "Update" : "Add"}
      </Button>
      {selected && <Button onClick={onCancel}>Cancel</Button>}
    </Box>
  );
}
