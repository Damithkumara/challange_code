import React from "react";

import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

function SkillBar({ value }) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    marginLeft: 100,
    marginRight: 100,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#EC4899" : "#EC4899",
    },
  }));

  return (
    <BorderLinearProgress
      variant="determinate"
      value={value}
      className="flex justify-center items-center "
    />
  );
}

export default SkillBar;
