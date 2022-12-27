import React from 'react';
import ExpenseForm from './ExpenseForm';
import '../CSS/NewExpense.css'

const NewExpense = (props) => {
const onSubmitHandler = (enteredExpenseData)=>{
    const expenseData= {
        ...enteredExpenseData,
        id:'e'+ Math.random().toString()
    }
    props.onAdd(expenseData);
}
    return ( 
        <div className='container_form'>        
            <ExpenseForm onSubmit={onSubmitHandler} />
        </div>

     );
}
 
export default NewExpense;