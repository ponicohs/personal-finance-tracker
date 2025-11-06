import { useState } from "react";
import { format } from "date-fns";

const TransactionList = ({ transactions, onDeleteTransaction }) => {
  const [sortBy, setSortBy] = useState("date");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const categories = [...new Set(transactions.map((t) => t.category))];

  const filteredAndSorted = transactions
    .filter((t) => filterCategory === "all" || t.category === filterCategory)
    .filter((t) => filterType === "all" || t.type === filterType)
    .sort((a, b) => {
      if (sortBy === "date") return new Date(b.date) - new Date(a.date);
      if (sortBy === "amount") return b.amount - a.amount;
      if (sortBy === "category") return a.category.localeCompare(b.category);
      return 0;
    });

  return (
    <div className="transaction-list">
      <h2>Transactions</h2>

      <div className="filters">
        <div className="filter-group">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            <option value="category">Category</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Filter by type:</label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Filter by category:</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="transactions">
        {filteredAndSorted.length === 0 ? (
          <p>No transactions found.</p>
        ) : (
          filteredAndSorted.map((transaction) => (
            <div
              key={transaction.id}
              className={`transaction-item ${transaction.type}`}
            >
              <div className="transaction-info">
                <div className="transaction-header">
                  <span className="transaction-category">
                    {transaction.category}
                  </span>
                  <span className="transaction-amount">
                    {transaction.type === "income" ? "+" : "-"}$
                    {transaction.amount.toFixed(2)}
                  </span>
                </div>
                <div className="transaction-details">
                  <span className="transaction-date">
                    {format(new Date(transaction.date), "MMM dd, yyyy")}
                  </span>
                  {transaction.notes && (
                    <span className="transaction-notes">
                      {transaction.notes}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => onDeleteTransaction(transaction.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TransactionList;
