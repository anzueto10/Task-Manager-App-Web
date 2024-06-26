import { expect, test } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginFormBody from "@/components/forms/login/FormBody";

import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import { getServerSession } from "next-auth";
const renderLoginPage = async () => {
  const session = await getServerSession();

  render(
    <SessionProviderWrapper session={session}>
      <LoginFormBody />
    </SessionProviderWrapper>
  );
};

test("Login Form", async () => {
  renderLoginPage();
  const submitButton = screen.getByRole("button", { name: /Log In/i });
  fireEvent.click(submitButton);

  await waitFor(() => {
    const emailError = screen.getByText("email is required.", {
      selector: "span",
    });
    const passError = screen.getByText("Password is required.", {
      selector: "span",
    });
  });
});
