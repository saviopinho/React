import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
    const day = date.toLocaleString('pt-BR', {
        day: '2-digit',
        timeZone: 'UTC',
    });
    const month = date.toLocaleString('pt-BR', {
        month: 'long',
        timeZone: 'UTC',
    });
    const year = date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
};

export default ExpenseDate;
