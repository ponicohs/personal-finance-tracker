# Personal Finance Tracker

A comprehensive web application for tracking personal finances, enabling users to monitor and analyze their income and expenses with categorization and filtering options.

## Features

### Core Features

- **Transaction Management**: Add, view, and delete income/expense transactions
- **Custom Categories**: Create and manage custom categories for better organization
- **Filtering & Sorting**: Filter by type and category, sort by date, amount, or category
- **Data Persistence**: All data is stored in browser localStorage
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### Additional Features

- **Visual Dashboard**: Pie chart showing expense breakdown by category
- **Financial Overview**: Real-time summary of total income, expenses, and balance
- **CSV Export**: Export all transactions to CSV format
- **Notes Support**: Add optional notes to transactions

## Tech Stack

- **Framework**: React.js with Vite
- **Charts**: Recharts
- **CSV Export**: PapaParse
- **Date Handling**: date-fns
- **Testing**: Vitest + React Testing Library
- **Storage**: Browser localStorage

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ponicohs/personal-finance-tracker.git
cd personal-finance-tracker
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Open browser at `http://localhost:5173`

### Running Tests

```bash
npm test
```

### Build for Production

```bash
npm run build
```

## How to Use

### Adding Transactions

1. Select transaction type (Income/Expense)
2. Enter amount
3. Select date
4. Choose or create a category
5. Add optional notes
6. Click "Add Transaction"

### Managing Categories

1. Click "New Category" button in the form
2. Enter category name
3. Click "Add" to create

### Filtering Transactions

- Use dropdown filters to view by type or category
- Sort by date, amount, or category

### Exporting Data

- Click "Export to CSV" button in header
- File downloads with timestamp

### Viewing Analytics

- Dashboard shows total income, expenses, and balance
- Pie chart displays expense distribution by category

## Project Structure

```
src/
├── components/
│   ├── TransactionForm.jsx
│   ├── TransactionList.jsx
│   ├── Dashboard.jsx
│   └── *.test.jsx
├── utils/
│   ├── storage.js
│   ├── csvExport.js
│   └── *.test.js
├── App.jsx
└── App.css
```

## Git Workflow

This project follows standard Git practices:

- `main` branch: Production-ready code
- `develop` branch: Development work
- Feature branches for new features
- Pull requests for code review

## Live Demo

[View Live Application](https://ponicohs.github.io/personal-finance-tracker/)

## License

Creative Commons
