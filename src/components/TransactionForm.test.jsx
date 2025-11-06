import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TransactionForm from "./TransactionForm";

describe("TransactionForm", () => {
  const mockCategories = ["Food", "Transport"];
  const mockOnAddTransaction = vi.fn();
  const mockOnAddCategory = vi.fn();

  it("renders form fields correctly", () => {
    render(
      <TransactionForm
        onAddTransaction={mockOnAddTransaction}
        categories={mockCategories}
        onAddCategory={mockOnAddCategory}
      />
    );

    expect(screen.getByText("Add Transaction")).toBeInTheDocument();
    expect(screen.getByLabelText(/Amount/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  });

  it("submits transaction with correct data", () => {
    render(
      <TransactionForm
        onAddTransaction={mockOnAddTransaction}
        categories={mockCategories}
        onAddCategory={mockOnAddCategory}
      />
    );

    fireEvent.change(screen.getByLabelText(/Amount/i), {
      target: { value: "100" },
    });
    fireEvent.change(screen.getByLabelText(/Category/i), {
      target: { value: "Food" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Add Transaction/i }));

    expect(mockOnAddTransaction).toHaveBeenCalled();
  });
});
