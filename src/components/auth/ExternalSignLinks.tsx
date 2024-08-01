"use client";
import { FORM_SIGNUP_EXTERNAL_LINKS } from "@/consts";
import { Providers } from "@/types";
import handleExternalSignIn from "@/utils/user/handdleExternalSignIn";
import Button from "../ui/button/Button";

const ExternalSignLinks = () => {
  return (
    <div className="flex-wrap flex items-center justify-center">
      {Object.entries(FORM_SIGNUP_EXTERNAL_LINKS).map(([key, link]) => (
        <Button
          onClick={() => handleExternalSignIn(link.href as Providers)}
          key={key}
          variable="outline"
        >
          <link.Icon h="25" w="25" />
          <span className="ml-3">{link.text}</span>
        </Button>
      ))}
    </div>
  );
};

export default ExternalSignLinks;
