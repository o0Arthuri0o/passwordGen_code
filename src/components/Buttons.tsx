

type ButtonsProps = {
    calculateStrength: () => number,
    handleClick: () => void
}

const Buttons = ({calculateStrength, handleClick}: ButtonsProps) => {
  return (
    <div className='btn-wrapper'>
        <div className='strength-display-wrapper'>
            <p>Strength</p>
            <div className='strength-display'>
            <p className='strength-class'>{calculateStrength() === 0?'': calculateStrength() === 1 ? 'LOW' : calculateStrength() === 4 ? 'HIGH' : 'MEDIUM'}</p>
            <div className='strength-indicators'>
                <div className={calculateStrength() >= 1 ? 'indicator-active' : 'indicator'}></div>
                <div className={calculateStrength() >= 2 ? 'indicator-active' : 'indicator'}></div>
                <div className={calculateStrength() >= 3 ? 'indicator-active' : 'indicator'}></div>
                <div className={calculateStrength() >= 4 ? 'indicator-active' : 'indicator'}></div>
            </div>
            </div>
        </div>
        <button onClick={() => handleClick()} >{'GENERATE =>'}</button>
    </div>  )
}

export default Buttons