import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
    const saveExpenseDataHandler = inputExpenseData => {
        const expenseData = {
            id: (Math.random() * 100).toFixed(0),
            ...inputExpenseData,
        };

        onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
