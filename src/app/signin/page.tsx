import React from "react";
import {Metadata} from "next";
import FormSignin from "./FormSignin";

export const metadata: Metadata = {
  title: "Sign in",
};

const page = async () => {
  return (
    <>
      <FormSignin />
    </>
  );
};

export default page;
