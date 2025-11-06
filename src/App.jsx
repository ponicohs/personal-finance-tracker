import { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Dashboard from "./components/Dashboard";
import { loadData, saveData } from "./utils/storage";
import { exportToCSV } from "./utils/csvExport";
import "./App.css";

function App() {
  const [data, setData] = useState({ transactions: [], categories: [] });

  useEffect(() => {
    setData(loadData());
  }, []);

  useEffect(() => {
    saveData(data);
  }, [data]);

  const addTransaction = (transaction) => {
    setData((prev) => ({
      ...prev,
      transactions: [...prev.transactions, transaction],
    }));
  };

  const deleteTransaction = (id) => {
    setData((prev) => ({
      ...prev,
      transactions: prev.transactions.filter((t) => t.id !== id),
    }));
  };

  const addCategory = (category) => {
    if (!data.categories.includes(category)) {
      setData((prev) => ({
        ...prev,
        categories: [...prev.categories, category],
      }));
    }
  };

  const handleExport = () => {
    exportToCSV(data.transactions);
  };

  return (
    <div className="App">
      <header>
        <h1>Personal Finance Tracker</h1>
        <button onClick={handleExport} className="export-btn">
          Export to CSV
        </button>
      </header>

      <div className="container">
        <div className="left-section">
          <TransactionForm
            onAddTransaction={addTransaction}
            categories={data.categories}
            onAddCategory={addCategory}
          />
        </div>

        <div className="right-section">
          <Dashboard transactions={data.transactions} />
          <TransactionList
            transactions={data.transactions}
            onDeleteTransaction={deleteTransaction}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
