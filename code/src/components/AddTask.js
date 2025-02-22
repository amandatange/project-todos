import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from 'uniqid';

import tasks from "reducers/tasks";

import { Form, NewTaskButton } from '../styled-components';

const placeholders = [
    "Water the plants",
    "Take out the bin",
    "Book the laundry room",
    "Buy a bottle of Disaronno",
    "Write that boring essay",
    "Book a dentist appointment",
    "Hang up a painting",
    "Make the bed",
    "Finish the project",
    "Go on a bug hunt"
];

const AddTask = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: uniqid(),
            task: inputValue,
            isDone: false,
            createdAt: Date.now(),
        };

        dispatch(tasks.actions.addItem(newTask));

        setInputValue('');
    }
    return (
        <Form onSubmit={onFormSubmit} >
                <input
                    aria-label="Write new to do"
                    type='text'
                    value={inputValue}
                    onChange={(e) =>  {
                        setInputValue(e.target.value);
                        }
                    }
                    placeholder={placeholders[[Math.floor(Math.random() * (placeholders.length-1))]]}
                />
            <NewTaskButton 
                type='submit'    
                disabled={!inputValue}
            >
                add
            </NewTaskButton>
        </Form>
    )
};

export default AddTask;