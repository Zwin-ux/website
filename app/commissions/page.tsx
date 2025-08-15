import { redirect } from "next/navigation";

export default function CommissionsRedirect() {
  // This route has been consolidated into the homepage.
  redirect("/");
}
