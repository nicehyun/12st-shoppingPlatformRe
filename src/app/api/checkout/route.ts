import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const formData = await request.formData()

  // const userInfo: UserInfo = {
  //   email: formData.get("email") as string,
  //   password: await bcrypt.hash(formData.get("password") as string, 10),
  //   name: formData.get("name") as string,
  //   phone: formData.get("phone") as string,
  //   address: formData.get("address") as string,
  //   additionalAddress: formData.get("additionalAddress") as string,
  //   gender: formData.get("gender") as Gender,
  //   birth:
  //     (((formData.get("birthYear") as string) +
  //       formData.get("birthMonth")) as string) + formData.get("birthDay"),
  //   marketingClause: formData.get("marketing") === "on",
  // }

  // const response = await addUserInfo(userInfo)

  // return NextResponse.json(response)
}
