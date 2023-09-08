"use client"

import { useState } from "react"
import { BsQuestionCircle } from "react-icons/bs"

import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"

import CheckoutDeliveryNameInput from "./CheckoutDeliveryNameInput"
import CheckoutRecipientInput from "./CheckoutRecipientInput"
import CheckoutAddressInput from "./CheckoutAddressInput"
import CheckoutPhoneInput from "./CheckoutPhoneInput"
import CheckoutDeliveryMemo from "./CheckoutDeliveryMemo"
import BasicModal from "@/common/views/BasicModal"
import DeliveryExplanation from "./DeliveryExplanation"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const DeliveryInfo = () => {
  const [deliveryTabvalue, setDeliveryTabvalue] = useState(1)
  const [isShowExplanationModal, setIsShowExplanationModal] = useState(false)

  const handleDeliveryTabvalueChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setDeliveryTabvalue(newValue)
  }

  const showExplanationModal = () => {
    setIsShowExplanationModal(true)
  }

  const hideExplanationModal = () => {
    setIsShowExplanationModal(false)
  }

  return (
    <div className="border-t-[2px] border-black">
      <div className="flex justify-between py-[18px] font-bold">
        <span className="flex">
          <h3>배송정보</h3>
          <button
            onClick={showExplanationModal}
            type="button"
            className="ml-[5px] text-border"
          >
            <BsQuestionCircle />
          </button>
        </span>

        <p className="text-[14px]">
          <span className="text-lightRed">*</span> 필수 입력 항목
        </p>
      </div>

      <Box sx={{ width: "100%", bgcolor: "" }}>
        <Box sx={{ borderBottom: 1, borderColor: "#d2d2d2" }}>
          <Tabs
            value={deliveryTabvalue}
            onChange={handleDeliveryTabvalueChange}
            aria-label="checkout address teps"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#333",
              },
            }}
          >
            <Tab
              label="기존 배송지"
              {...a11yProps(0)}
              sx={{
                "&.Mui-selected": {
                  color: "#333",
                },
                color: "#ccc",
              }}
            />
            <Tab
              label="신규 입력"
              {...a11yProps(1)}
              sx={{
                "&.Mui-selected": {
                  color: "#333",
                },
                color: "#ccc",
              }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={deliveryTabvalue} index={0}>
          기존 배송지
        </CustomTabPanel>
        {/* TODO :  CustomTabPanel 분리*/}

        <CustomTabPanel value={deliveryTabvalue} index={1}>
          <CheckoutDeliveryNameInput />

          <CheckoutRecipientInput />

          <CheckoutAddressInput />

          <CheckoutPhoneInput isRequired />
          <CheckoutPhoneInput />

          <CheckoutDeliveryMemo />
        </CustomTabPanel>
      </Box>

      <BasicModal
        modalTitle="배송안내"
        modalId="deliveryExplanation"
        isShowModal={isShowExplanationModal}
        hideModal={hideExplanationModal}
      >
        <DeliveryExplanation />
      </BasicModal>
    </div>
  )
}

export default DeliveryInfo
