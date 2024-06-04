import React from "react";
import FormsList from "@/app/forms/FormsList";
import { getUserForms } from "@/app/actions/getUserForms";
import { InferSelectModel } from "drizzle-orm";
import { forms as dbForms } from "@/db/schema";

const page = async () => {
  const userForms: InferSelectModel<typeof dbForms>[] = await getUserForms();
  return (
    <>
      <FormsList forms={userForms} />
    </>
  );
};

export default page;
