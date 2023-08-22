import { sendVerificationCode } from "@/firebase/auth/vertification";
import { useMutation } from "@tanstack/react-query";

const useSendVerificationCodeMutation = (
  phoneNumber: string,
  verificationCode: string
) => {
  const sendVerificationCodeMutaion = useMutation(() =>
    sendVerificationCode(phoneNumber, verificationCode)
  );

  return sendVerificationCodeMutaion;
};

export default useSendVerificationCodeMutation;
