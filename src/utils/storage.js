const STORAGE_KEY = "financeTrackerData";

export const loadData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data
      ? JSON.parse(data)
      : {
          transactions: [],
          categories: [
            "Salary",
            "Freelance",
            "Food",
            "Transport",
            "Bills",
            "Entertainment",
            "Other",
          ],
        };
  } catch (error) {
    console.error("Error loading data:", error);
    return {
      transactions: [],
      categories: [
        "Salary",
        "Freelance",
        "Food",
        "Transport",
        "Bills",
        "Entertainment",
        "Other",
      ],
    };
  }
};

export const saveData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving data:", error);
  }
};
