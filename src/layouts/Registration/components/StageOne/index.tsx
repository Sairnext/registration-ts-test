import React, { useState } from "react";

import FormBox from "../../../../components/FormBox";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

interface StageOneProps {
  handleNext: () => void;
}

const StageOne: React.FC<StageOneProps> = ({ handleNext }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <FormBox>
      <form>
        <h3 className="header">Register</h3>
        <Input
          value={name}
          label="Name:"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          value={email}
          label="Email:"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button text="Next" onClick={handleNext} />
      </form>
    </FormBox>
  );
};

export default StageOne;
