import React from 'react'

type RangeInputProps = {
    numbers: number,
    handleRangeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const RangeInput = ({numbers, handleRangeChange}: RangeInputProps) => {
  return (
    <div className='range-wrapper'>
        <div className='character-display'>
            <p>Character length</p>
            <p className='character-display-number' >{numbers}</p>
        </div>
        <input type="range" min='0' max='20' value={numbers} onChange={(e) => handleRangeChange(e)} />
    </div>
  )
}

export default RangeInput