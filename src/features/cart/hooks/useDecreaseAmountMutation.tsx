import { Product } from "@/common/types/product";
import { decreaseProductToCart } from "@/firebase/realtime/cart";
import { showFeedbackModal } from "@/store/features/modalSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

const useDecreaseAmountMutation = (
  email: string,
  productInfo: Product<number>
) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const decreaseMutaion = useMutation(
    (amountToDecrease: number) =>
      decreaseProductToCart(email, productInfo.productId, amountToDecrease),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["productListInCart"]);
      },
      onError: () =>
        dispatch(
          showFeedbackModal({
            modalContent:
              "다시 한번 시도해주세요. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        ),
    }
  );

  return decreaseMutaion;
};

export default useDecreaseAmountMutation;
