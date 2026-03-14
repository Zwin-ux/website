import { permanentRedirect } from "next/navigation";
import { PRODUCT_LINKS } from "../../lib/productLinks";

export default function SynergyPage() {
  permanentRedirect(PRODUCT_LINKS.synergyApp);
}
