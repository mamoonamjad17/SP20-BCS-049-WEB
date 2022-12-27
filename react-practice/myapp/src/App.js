import React,{useState} from 'react';

import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
function App() {
  let expense=  [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
    title: 'New TV',
    amount: 799.49, 
    date: new Date(2021, 2, 12)
   },
   {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  ];
const [expenses,setExpense] = useState(expense);
  const expenseAddHandler = (expense) =>
  {
    setExpense((prevExpense) => {
      return{...prevExpense,expense};
    })

  }

  const DateChangeHandler = (date) =>{
    console.log(`Date from App JS ${date}`);
    }

  return (
    <div>
    <NewExpense  onAdd={expenseAddHandler}/>
    <ExpenseFilter onDateChange={DateChangeHandler} />
    
    {expense.map((expense) => {
        return <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />
      })}

    </div>
  );
}

export default App;
