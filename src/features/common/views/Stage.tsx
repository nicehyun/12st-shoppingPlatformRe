"use client"

import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Typography from "@mui/material/Typography"
import { ReactNode } from "react"

export interface IStage {
  activeStep: number
  stages: string[]
  stageContents: ReactNode[]
}

export default function Stage({ activeStep, stageContents, stages }: IStage) {
  const isShowStageContent = (stage: number, activeStage: number) => {
    return stage === activeStage
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {stages.map((label, index) => {
          const stepProps: { completed?: boolean } = {}
          const labelProps: {
            optional?: ReactNode
          } = {}
          if (isShowStageContent(index, activeStep)) {
            labelProps.optional = (
              <Typography variant="caption" className="text-lightRed font-bold">
                {stages[index]}
              </Typography>
            )
          }

          return (
            <Step
              key={label}
              {...stepProps}
              sx={{
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "#ff4e0a",
                },
                "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                  {
                    color: "#ff4e0a",
                  },
                "& .MuiStepLabel-root .Mui-active": {
                  color: "#ff4e0a",
                },
              }}
            >
              <StepLabel {...labelProps}></StepLabel>
            </Step>
          )
        })}
      </Stepper>

      {stageContents.map((stageContent, index) => (
        <div
          className={`${index !== activeStep && "opacity-0 hidden"}`}
          key={index}
        >
          {stageContent}
        </div>
      ))}
    </Box>
  )
}
