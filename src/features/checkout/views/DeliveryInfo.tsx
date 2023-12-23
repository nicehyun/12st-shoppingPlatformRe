"use client"

import { useEffect, useState } from "react"
import { BsQuestionCircle } from "react-icons/bs"

import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"

import TabPanel from "@/features/common/views/TabPanel"

import { showBasicModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useGetDefaultDeliveryInfoQuery } from "../hooks/useGetDefaultDeliveryInfoQuery"
import CheckoutDefalutDeliveryInfo from "./CheckoutDefalutDeliveryInfo"
import CheckoutNewDeliveryInfo from "./CheckoutNewDeliveryInfo"
import Button from "@/features/common/views/Button"
import Loading from "@/features/common/views/Loading"

const DeliveryInfo = () => {
  const dispatch = useAppDispatch()
  const { deliveryInfo, isLoading } = useGetDefaultDeliveryInfoQuery()

  const [deliveryTabValue, setDeliveryTabValue] = useState(1)

  useEffect(() => {
    if (deliveryInfo) {
      setDeliveryTabValue(0)
    }
  }, [deliveryInfo])

  const showDeliveryExplanationModal = () => {
    dispatch(
      showBasicModal({
        modalId: "deliveryExplanation",
        modalTitle: "배송 안내",
        modalContent: "DeliveryExplanation",
      })
    )
  }

  const handleDeliveryTabvalueChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setDeliveryTabValue(newValue)
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
          <Button
            onClick={showDeliveryExplanationModal}
            classNames="ml-[5px] text-border"
            content={<BsQuestionCircle />}
          />
        </span>

        <p className="text-[14px]">
          <span className="text-lightRed">*</span> 필수 입력 항목
        </p>
      </div>

      <input
        type="text"
        value={deliveryTabValue}
        name="deliveryInfo-tab"
        readOnly
        className="absolute transform translate-x-[9999px] hidden"
      />

      {isLoading ? (
        <Loading
          spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
          height="h-[400px]"
          isFrame={false}
        />
      ) : (
        <Box sx={{ width: "100%", bgcolor: "" }}>
          <Box sx={{ borderBottom: 1, borderColor: "#d2d2d2" }}>
            <Tabs
              value={deliveryTabValue}
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

          <TabPanel value={deliveryTabValue} index={0}>
            <CheckoutDefalutDeliveryInfo />
          </TabPanel>

          <TabPanel value={deliveryTabValue} index={1}>
            <CheckoutNewDeliveryInfo />
          </TabPanel>
        </Box>
      )}
    </section>
  )
}

export default DeliveryInfo
