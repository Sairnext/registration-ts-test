import React, { FormEventHandler, useEffect, useState } from "react";
import FormBox from "../../../../components/FormBox";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import Validator from "../../../../utils/validate";

import { ErrorMessages } from "../../constants";

type Errors = {
  password?: string;
  confirmPassword?: string;
};

interface StageTwoProps {
  handleNext: () => void;
}

const StageTwo: React.FC<StageTwoProps> = ({ handleNext }) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const isPasswordValid = Validator.minLenght(password, 5);
    const isConfirmPasswordValid = Validator.minLenght(confirmPassword, 5);

    const passwordDoMatch = Validator.equalStrings(password, confirmPassword);

    if (isPasswordValid && isConfirmPasswordValid && passwordDoMatch)
      handleNext();

    if (!isPasswordValid || !isConfirmPasswordValid || !passwordDoMatch) {
      const passwordError = !isPasswordValid
        ? ErrorMessages.PASSWORD_IS_TOO_SHORT
        : !passwordDoMatch
        ? ErrorMessages.PASSWRD_DO_NOT_MATCH
        : "";
      const confirmError = !isConfirmPasswordValid
        ? ErrorMessages.PASSWORD_IS_TOO_SHORT
        : !passwordDoMatch
        ? ErrorMessages.PASSWRD_DO_NOT_MATCH
        : "";
      setErrors({
        password: passwordError,
        confirmPassword: confirmError,
      });
    }
  };

  useEffect(() => {
    setErrors({});
  }, [password, confirmPassword]);

  return (
    <FormBox>
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>
        <Input
          type={"password"}
          value={password}
          label="Password:"
          error={errors.password ? errors.password : ""}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type={"password"}
          value={confirmPassword}
          label="Confirm password:"
          error={errors.password ? errors.confirmPassword : ""}
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button text="Next" type="submit" />
      </form>
    </FormBox>
  );
};

export default StageTwo;
