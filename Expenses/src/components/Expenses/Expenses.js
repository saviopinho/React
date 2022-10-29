import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

function Expenses({ items }) {
    const [filteredYear, setSelectedYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setSelectedYear(selectedYear);
    };
    const filtered = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesList items={filtered} />
        </Card>
    );
}

export default Expenses;
