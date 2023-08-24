"use client"

import { AiOutlineArrowLeft } from "react-icons/ai"

import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { ReactNode, useState } from "react"

export interface IStage {
  stages: string[]
  stageContents: ReactNode[]
  firstButtonText: string
  finishButtonText: string
  disabledNextButton: boolean[]
}

export default function Stage({
  stageContents,
  stages,
  firstButtonText,
  finishButtonText,
  disabledNextButton,
}: IStage) {
  const [activeStep, setActiveStep] = useState(0)

  const isShowStageContent = (stage: number, activeStage: number) => {
    return stage === activeStage
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
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
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          className="ml-[-18px]"
        >
          <AiOutlineArrowLeft className="text-border text-[20px]" />
        </Button>

        <Box sx={{ flex: "1 1 auto" }} />
        <button
          type={activeStep === stages.length ? "submit" : "button"}
          onClick={activeStep === stages.length ? () => {} : handleNext}
          className="rounded-[5px] px-[16px] text-lightRed bg-white border-[1px] border-lightRed md:text-[12px] sm:text-[10px] hover:bg-lightRed hover:text-white disabled:bg-border disabled:border-border disabled:text-lightBlack dark:bg-black dark:text-white dark:hover:bg-lightRed tracking-[3px]"
          disabled={disabledNextButton[activeStep]}
        >
          {activeStep === stages.length
            ? finishButtonText
            : activeStep === 0
            ? firstButtonText
            : "다음"}
        </button>
      </Box>
    </Box>
  )
}
