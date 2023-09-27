"use client"

import { useEffect, useState } from "react"
import { BsQuestionCircle } from "react-icons/bs"

import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"

import TabPanel from "@/common/views/TabPanel"

import { showBasicModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useGetAddressQuery } from "../hooks/useGetAddressQuery"
import CheckoutDefalutDeliveryInfo from "./CheckoutDefalutDeliveryInfo"
import CheckoutNewDeliveryInfo from "./CheckoutNewDeliveryInfo"

const DeliveryInfo = () => {
  const dispatch = useAppDispatch()
  const { userDefalutAddress } = useGetAddressQuery()

  const [deliveryTabvalue, setDeliveryTabvalue] = useState(1)

  useEffect(() => {
    if (userDefalutAddress) {
      setDeliveryTabvalue(0)
    }
  }, [userDefalutAddress])

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
      <div>{userDefalutAddress?.additionalAddress}</div>
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
          <CheckoutDefalutDeliveryInfo />
        </TabPanel>

        <TabPanel value={deliveryTabvalue} index={1}>
          <CheckoutNewDeliveryInfo />
        </TabPanel>
      </Box>
    </section>
  )
}

export default DeliveryInfo
