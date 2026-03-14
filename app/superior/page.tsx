import { permanentRedirect } from "next/navigation";
import { PRODUCT_LINKS } from "../../lib/productLinks";

export default function SuperiorPage() {
  permanentRedirect(PRODUCT_LINKS.superiorApp);
}
