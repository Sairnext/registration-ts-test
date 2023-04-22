import React, { FormEventHandler, useEffect, useMemo, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { createUser } from "../../../../store/userSlice";

import FormBox from "../../../../components/FormBox";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import Validator from "../../../../utils/validate";
import ErrorList from "../../../../components/ErrorsList";

import { ErrorMessages } from "../../constants";

type Errors = {
  email?: string;
  name?: string;
};

interface StageOneProps {
  handleNext: () => void;
}

const StageOne: React.FC<StageOneProps> = ({ handleNext }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const isEmailValid = Validator.isEmail(email);
    const isNameValid = Validator.minLenght(name, 3);
    const userAlreadyExists = users.find(
      (user) => user.name === name || user.email === email
    );

    if (isEmailValid && isNameValid && !userAlreadyExists) {
      dispatch(createUser({ name, email }));
      handleNext();
    }

    if (!isNameValid || !isEmailValid || userAlreadyExists) {
      setErrors({
        name: !isNameValid
          ? ErrorMessages.NAME_IS_TO_SHORT
          : userAlreadyExists
          ? ErrorMessages.USER_NAME_EXISTS
          : "",
        email: !isEmailValid
          ? ErrorMessages.EMAIL_IS_NOT_CORRECT
          : userAlreadyExists
          ? ErrorMessages.USER_EMAIL_EXISTS
          : "",
      });
    }
  };

  const errorsList = useMemo(() => {
    const errorsList: string[] = [];
    const passwordError = errors.name ? [errors.name] : [];
    const confirmPasswordError = errors.email ? [errors.email] : [];

    return errorsList.concat(passwordError).concat(confirmPasswordError);
  }, [errors]);

  useEffect(() => {
    setErrors({});
  }, [name, email]);

  return (
    <FormBox>
      <form onSubmit={handleSubmit}>
        <h3 className="header">Register</h3>
        <Input
          value={name}
          label="Name:"
          error={errors.name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          value={email}
          label="Email:"
          error={errors.email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button text="Next" type="submit" />
      </form>
      <ErrorList errors={errorsList} />
    </FormBox>
  );
};

export default StageOne;
