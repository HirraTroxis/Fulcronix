import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { NewsletterForm } from "./newsletter-form";

describe("NewsletterForm", () => {
  it("shows a confirmation message after submitting", async () => {
    render(<NewsletterForm />);

    await userEvent.type(
      screen.getByLabelText("Email address"),
      "test@example.com",
    );
    await userEvent.click(screen.getByRole("button", { name: "Subscribe" }));

    expect(screen.getByText(/thanks/i)).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Subscribe" }),
    ).not.toBeInTheDocument();
  });
});
