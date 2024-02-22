export const pasrseDeliveryInfoFromFormData = (formData: FormData) => {
  return {
    deliveryName: (formData.get("deliveryName") ?? "") as string,
    recipient: formData.get("recipient") as string,
    zipcode: formData.get("zipcode") as string,
    address: formData.get("address") as string,
    additionalAddress: formData.get("additionalAddress") as string,
    phone1: formData.get("phone1") as string,
    phone2: (formData.get("phone2") ?? "") as string,
  }
}
