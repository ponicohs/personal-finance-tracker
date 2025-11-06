import { useState } from "react";

const TransactionForm = ({ onAddTransaction, categories, onAddCategory }) => {
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [showCategoryInput, setShowCategoryInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) return;

    onAddTransaction({
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      date,
      category,
      notes,
    });

    setAmount("");
    setNotes("");
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      onAddCategory(newCategory.trim());
      setCategory(newCategory.trim());
      setNewCategory("");
      setShowCategoryInput(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <h2>Add Transaction</h2>

      <div className="form-group">
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="form-group">
        <label>Amount:</label>
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => setShowCategoryInput(!showCategoryInput)}
        >
          {showCategoryInput ? "Cancel" : "New Category"}
        </button>
      </div>

      {showCategoryInput && (
        <div className="form-group">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Category name"
          />
          <button type="button" onClick={handleAddCategory}>
            Add
          </button>
        </div>
      )}

      <div className="form-group">
        <label>Notes (optional):</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows="3"
        />
      </div>

      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
