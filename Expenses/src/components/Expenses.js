import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses({ items }) {
    return (
        <Card className="expenses">
            <ExpenseItem
                date={items[0].date}
                title={items[0].title}
                amount={items[0].amount}
            />
            <ExpenseItem
                date={items[1].date}
                title={items[1].title}
                amount={items[1].amount}
            />
            <ExpenseItem
                date={items[2].date}
                title={items[2].title}
                amount={items[2].amount}
            />
        </Card>
    );
}

export default Expenses;
