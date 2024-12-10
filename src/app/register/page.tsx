import {Metadata} from "next";
import React from "react";
import FormRegister from "./FormRegister";

export const metadata: Metadata = {
  title: "Register",
};

const page = () => {
  return (
    <>
      <FormRegister />
    </>
  );
};

export default page;
