import { Modal } from "@mui/material"
import DaumPostcode, { Address } from "react-daum-postcode"

interface IPostCodeModalProps {
  isShow: boolean
  onHide: () => void
  onComplete: (address: Address) => void
}

const PostCodeModal = ({ isShow, onComplete, onHide }: IPostCodeModalProps) => {
  return (
    <Modal
      open={isShow}
      onClose={onHide}
      aria-labelledby="modal-postcode"
      aria-describedby="modal-postcode"
      sx={{
        width: "80%",
        height: "60%",
        marginTop: "20%",
        marginLeft: "10%",
      }}
    >
      {isShow ? (
        <div className="rounded-[5px] overflow-hidden">
          <DaumPostcode
            onComplete={onComplete}
            autoClose={true}
            style={{ height: "450px" }}
          />
        </div>
      ) : (
        <></>
      )}
    </Modal>
  )
}

export default PostCodeModal
