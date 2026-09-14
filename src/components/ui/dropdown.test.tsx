import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Dropdown } from "./dropdown";

const ITEMS = [
  { label: "Intelligence", href: "/#capabilities" },
  { label: "Growth", href: "/#capabilities" },
];

describe("Dropdown", () => {
  it("renders the trigger label and every item as a link", () => {
    render(<Dropdown label="What We Do" items={ITEMS} />);

    expect(screen.getByText("What We Do")).toBeInTheDocument();
    for (const item of ITEMS) {
      expect(screen.getByRole("link", { name: item.label })).toHaveAttribute(
        "href",
        item.href,
      );
    }
  });

  it("calls onItemClick when an item is clicked", async () => {
    const onItemClick = vi.fn();
    render(
      <Dropdown label="What We Do" items={ITEMS} onItemClick={onItemClick} />,
    );

    await userEvent.click(screen.getByRole("link", { name: "Growth" }));

    expect(onItemClick).toHaveBeenCalledOnce();
  });
});
