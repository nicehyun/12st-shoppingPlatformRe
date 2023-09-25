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

import TabPanel from "@/common/views/TabPanel"

import Checkbox from "@/common/views/Checkbox"
import DeliveryMemoSelect from "./DeliveryMemoSelect"
import { showBasicModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"

const DeliveryInfo = () => {
  const dispatch = useAppDispatch()
  const [isDefalutAddressRegistration, setIsDefalutAddressRegistration] =
    useState(false)
  const [deliveryTabvalue, setDeliveryTabvalue] = useState(1)

  const showDeliveryExplanationModal = () => {
    dispatch(
      showBasicModal({
        modalId: "deliveryExplanation",
        modalTitle: "배송 안내",
        modalContent: "DeliveryExplanation",
      })
    )
  }

  const toggleDefalutAddressRegistration = () => {
    setIsDefalutAddressRegistration((prev) => !prev)
  }

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
    <section className="border-t-[2px] border-black">
      <div className="flex justify-between py-[18px] font-bold">
        <span className="flex">
          <h3>배송정보</h3>
          <button
            onClick={showDeliveryExplanationModal}
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
          <DeliveryMemoSelect />
        </TabPanel>

        <TabPanel value={deliveryTabvalue} index={1}>
          <CheckoutDeliveryNameInput />
          <CheckoutRecipientInput />
          <CheckoutAddressInput />
          <CheckoutPhoneInput isRequired />
          <CheckoutPhoneInput />

          <Checkbox
            id="defalutAddressRegistration"
            isChecked={isDefalutAddressRegistration}
            onClickCheckbox={toggleDefalutAddressRegistration}
            checkboxLabel="기본배송지로 등록하기"
            peer="peer/defalutAddress"
            peerChecked={{
              borderColor: "peer-checked/defalutAddress:after:border-lightRed",
            }}
            classNames="ml-[100px] mb-[20px] max-w-[500px]"
          />

          <DeliveryMemoSelect />
        </TabPanel>
      </Box>
    </section>
  )
}

export default DeliveryInfo
