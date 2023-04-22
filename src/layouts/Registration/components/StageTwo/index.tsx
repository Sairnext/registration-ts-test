import React, { useState } from "react";
import FormBox from "../../../../components/FormBox";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

interface StageTwoProps {
  handleNext: () => void;
}

const StageTwo: React.FC<StageTwoProps> = ({ handleNext }) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <FormBox>
      <form>
        <h3>Register</h3>
        <Input
          value={password}
          label="Password:"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          value={confirmPassword}
          label="Confirm password:"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button text="Next" onClick={handleNext} />
      </form>
    </FormBox>
  );
};

export default StageTwo;
