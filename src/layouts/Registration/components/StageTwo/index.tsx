import React, { FormEventHandler, useEffect, useState, useMemo } from "react";

import { useAppDispatch } from "../../../../store/hooks";
import { updatePassword } from "../../../../store/userSlice";

import FormBox from "../../../../components/FormBox";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import ErrorList from "../../../../components/ErrorsList";

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

  const dispatch = useAppDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const isPasswordValid = Validator.minLenght(password, 5);
    const isConfirmPasswordValid = Validator.minLenght(confirmPassword, 5);

    const passwordDoMatch = Validator.equalStrings(password, confirmPassword);

    if (isPasswordValid && isConfirmPasswordValid && passwordDoMatch) {
      dispatch(updatePassword({ password }));
      handleNext();
    }

    if (!isPasswordValid || !isConfirmPasswordValid || !passwordDoMatch) {
      const passwordError = !isPasswordValid
        ? ErrorMessages.PASSWORD_IS_TOO_SHORT
        : !passwordDoMatch
        ? ErrorMessages.PASSWRD_DO_NOT_MATCH
        : "";
      const confirmError = !isConfirmPasswordValid
        ? ErrorMessages.CONFIRM_IS_TOO_SHORT
        : "";

      setErrors({
        password: passwordError,
        confirmPassword: confirmError,
      });
    }
  };

  const errorsList = useMemo(() => {
    const errorsList: string[] = [];
    const passwordError = errors.password ? [errors.password] : [];
    const confirmPasswordError = errors.confirmPassword
      ? [errors.confirmPassword]
      : [];

    return errorsList.concat(passwordError).concat(confirmPasswordError);
  }, [errors]);

  useEffect(() => {
    setErrors({});
  }, [password, confirmPassword]);

  return (
    <FormBox>
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>
        <Input
          type="password"
          label="Password:"
          value={password}
          error={errors.password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          label="Confirm password:"
          value={confirmPassword}
          error={errors.password}
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button text="Next" type="submit" />
      </form>
      <ErrorList errors={errorsList} />
    </FormBox>
  );
};

export default StageTwo;
