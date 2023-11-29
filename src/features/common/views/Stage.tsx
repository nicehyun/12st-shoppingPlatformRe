"use client"

import { AiOutlineArrowLeft } from "react-icons/ai"

import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Typography from "@mui/material/Typography"
import { ReactNode } from "react"
import Loading from "./Loading"
import CustomButton from "./Button"
import { Button } from "@mui/material"

export interface IStage {
  activeStep: number
  stages: string[]
  stageContents: ReactNode[]
  firstButtonText: string
  finishButtonText: string
  disabledNextButton: boolean[]
  onClickBackButton: () => void
  onClickNextButton: () => void
  isFinishLoading?: boolean
}

export default function Stage({
  activeStep,
  stageContents,
  stages,
  firstButtonText,
  finishButtonText,
  disabledNextButton,
  onClickBackButton,
  onClickNextButton,
  isFinishLoading = false,
}: IStage) {
  const isShowStageContent = (stage: number, activeStage: number) => {
    return stage === activeStage
  }

  const handleNextButton = () => {
    if (disabledNextButton[activeStep]) return

    onClickNextButton()
  }

  let buttonContent: string | ReactNode

  switch (activeStep) {
    case stages.length - 1:
      buttonContent = finishButtonText

      if (isFinishLoading) {
        buttonContent = (
          <Loading
            spinnerSize={{ height: "h-[20px]", width: "w-[20px]" }}
            isFrame={false}
          />
        )
      }
      break
    case 0:
      buttonContent = firstButtonText
      break
    default:
      buttonContent = "다음"
      break
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
          disabled={activeStep === 0}
          onClick={onClickBackButton}
          className="ml-[-18px]"
        >
          <AiOutlineArrowLeft className="text-border text-[20px]" />
        </Button>

        <Box sx={{ flex: "1 1 auto" }} />
        <CustomButton
          type={activeStep === stages.length - 1 ? "submit" : "button"}
          onClick={
            activeStep === stages.length - 1 ? () => {} : handleNextButton
          }
          classNames="min-w-[57px] rounded-[5px] px-[16px] py-[8px] text-lightRed bg-white border-[1px] border-lightRed text-[14px] md:text-[12px] sm:text-[10px] hover:bg-lightRed hover:text-white disabled:bg-border dark:disabled:bg-border disabled:cursor-not-allowed disabled:border-border disabled:text-lightBlack dark:bg-lightRed dark:text-white tracking-[3px]"
          isDisabled={disabledNextButton[activeStep]}
          content={buttonContent}
        />
      </Box>
    </Box>
  )
}
