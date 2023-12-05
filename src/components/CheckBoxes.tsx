import React from 'react'

type CheckBoxesProps = {
    checkboxes: {first:boolean, second:boolean,third:boolean, fourth:boolean}
    handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckBoxes = ({checkboxes, handleCheckboxChange}: CheckBoxesProps) => {
  return (

    <div className='checkbox-wrapper'>
            <label className='checkbox-with-name'>
                <input type="checkbox" checked={checkboxes['first']}  id='first' onChange={(e)=>handleCheckboxChange(e)} />
                <span className='fake-checkbox'></span>
                <p>Include Uppercase Letters</p>
            </label>

            <label className='checkbox-with-name'>
                <input type="checkbox" checked={checkboxes['second']} id='second' onChange={(e)=>handleCheckboxChange(e)}/>
                <span className='fake-checkbox'></span>
                <p>Include Lowercase Letters</p>
            </label>

            <label className='checkbox-with-name'>
                <input type="checkbox" checked={checkboxes['third']} id='third' onChange={(e)=>handleCheckboxChange(e)} />
                <span className='fake-checkbox'></span>
                <p>Include Numbers</p>
            </label>

            <label className='checkbox-with-name'>
                <input type="checkbox" checked={checkboxes['fourth']} id='fourth' onChange={(e)=>handleCheckboxChange(e)} />
                <span className='fake-checkbox'></span>
                <p>Include Symbols</p>
            </label>
        </div>
)
}

export default CheckBoxes