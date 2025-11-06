import { describe, it, expect, beforeEach } from "vitest";
import { loadData, saveData } from "./storage";

describe("Storage Utils", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should load default data when localStorage is empty", () => {
    const data = loadData();
    expect(data).toHaveProperty("transactions");
    expect(data).toHaveProperty("categories");
    expect(Array.isArray(data.transactions)).toBe(true);
    expect(Array.isArray(data.categories)).toBe(true);
  });

  it("should save and load data correctly", () => {
    const testData = {
      transactions: [{ id: 1, amount: 100, type: "income" }],
      categories: ["Test"],
    };

    saveData(testData);
    const loaded = loadData();

    expect(loaded).toEqual(testData);
  });
});
