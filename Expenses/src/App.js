import Expenses from './components/Expenses';

function App() {
    const expenses = [
        {
            id: '1',
            title: 'Car Insurance',
            amount: 301.23,
            date: new Date(2022, 10, 28),
        },
        {
            id: '2',
            title: 'Health Care',
            amount: 123.46,
            date: new Date(2022, 10, 28),
        },
        {
            id: '3',
            title: 'College',
            amount: 678.67,
            date: new Date(2022, 10, 28),
        },
    ];

    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
