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
import TabPanel from "@/common/views/TabPanel"
import { useModal } from "@/common/hooks/useModal"

const DeliveryInfo = () => {
  const [deliveryTabvalue, setDeliveryTabvalue] = useState(0)

  const { isShowModal, showModal, hideModal } = useModal()

  const handleDeliveryTabvalueChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setDeliveryTabvalue(newValue)
  }

  const renderTab = () => {
    const tabs = ["기존 배송지", "신규 입력"]

    return tabs.map((label, index) => (
      <Tab
        key={`tab-${index}`}
        label={label}
        id={`deliveryInfo-tab-${index}`}
        aria-controls={`deliveryInfo-tabpanel-${index}`}
        sx={{
          "&.Mui-selected": {
            color: "#ff4e0a",
          },
          color: "#ccc",
        }}
      />
    ))
  }

  return (
    <div className="border-t-[2px] border-black">
      <div className="flex justify-between py-[18px] font-bold">
        <span className="flex">
          <h3>배송정보</h3>
          <button
            onClick={showModal}
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
                backgroundColor: "#ff4e0a",
              },
            }}
          >
            {renderTab()}
          </Tabs>
        </Box>

        <TabPanel value={deliveryTabvalue} index={0}>
          <CheckoutDeliveryNameInput />
          <CheckoutRecipientInput />
          <CheckoutAddressInput />
          <CheckoutPhoneInput isRequired />
          <CheckoutPhoneInput />
          <CheckoutDeliveryMemo />
        </TabPanel>

        <TabPanel value={deliveryTabvalue} index={1}>
          <CheckoutDeliveryNameInput />
          <CheckoutRecipientInput />
          <CheckoutAddressInput />
          <CheckoutPhoneInput isRequired />
          <CheckoutPhoneInput />
          <CheckoutDeliveryMemo />
        </TabPanel>
      </Box>

      <BasicModal
        modalTitle="배송안내"
        modalId="deliveryExplanation"
        isShowModal={isShowModal}
        hideModal={hideModal}
      >
        <DeliveryExplanation />
      </BasicModal>
    </div>
  )
}

export default DeliveryInfo
