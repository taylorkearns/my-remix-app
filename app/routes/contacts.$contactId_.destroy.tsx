import type { ActionFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { redirect } from "@remix-run/node";

import { deleteContact } from "~/data";

export const action = async ({ params }: ActionFunctionArgs) => {
  const { contactId } = params;
  invariant(contactId, "Missing contactId param");
  await deleteContact(contactId);

  return redirect("/");
};
