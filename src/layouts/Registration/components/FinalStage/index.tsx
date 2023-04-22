import React from "react";

import FormBox from "../../../../components/FormBox";
import Button from "../../../../components/Button";

interface FinalStageProps {
  resetStages: () => void;
}

const FinalStage: React.FC<FinalStageProps> = ({ resetStages }) => {
  return (
    <FormBox>
      <h3 className="header">Congratulations you've Created a User</h3>
      <Button text="Create another user" onClick={resetStages} />
    </FormBox>
  );
};

export default FinalStage;
