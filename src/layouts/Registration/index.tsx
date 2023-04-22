import React, { useState, useMemo } from "react";

import StageOne from "./components/StageOne";
import StageTwo from "./components/StageTwo";
import FinalStage from "./components/FinalStage";

import "./index.css";

interface RegistrationProps {}

const Registration: React.FC<RegistrationProps> = () => {
  const [stage, setStage] = useState<number>(0);

  const handleNext = () => {
    setStage(stage + 1);
  };

  const resetStages = () => {
    setStage(0);
  };

  const stageComponent = useMemo(() => {
    switch (stage) {
      case 0:
        return <StageOne handleNext={handleNext} />;
      case 1:
        return <StageTwo handleNext={handleNext} />;
      case 2:
        return <FinalStage resetStages={resetStages} />;

      default:
        return <StageOne handleNext={handleNext} />;
    }
  }, [stage, handleNext, resetStages]);

  return (
    <div className="registration_page">
      <div className="centered">{stageComponent}</div>
    </div>
  );
};

export default Registration;
