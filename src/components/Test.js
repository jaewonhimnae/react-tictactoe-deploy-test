import React, { useState } from 'react'

const Test = () => {
    const [value, setValue] = useState('');
    const [listArray, setListArray] = useState(['haha', 'hoho'])

    const handleSubmit = (e) => {
        e.preventDefault();
        setListArray(prevList => {
            return [value, ...prevList];
        })
        setValue('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={e => setValue(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {listArray.map((item, index) => (

                        <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Test