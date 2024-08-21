import type { PageContext } from "vike/types";
import { redirect, render } from "vike/abort";
import { me } from "@/store/authStore";

export const guard = (pageContext: PageContext) => {
  const user = me();
  const { urlPathname } = pageContext;
  if (urlPathname === "/sign-in") {
    return; // Do nothing and allow access to the /login route
  }
  if (user === null) {
    // Render the login page while preserving the URL. (This is novel technique
    // which we explain down below.)
    // throw render("/sign-in");
    throw redirect("/sign-in");
    /* The more traditional way, redirect the user:
     */
  }
  if (!user.isAdmin) {
    throw render(403, "Only admins are allowed to access this page.");
  }
};
