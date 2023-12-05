import React from 'react'
import {useState} from 'react'
import RangeInput from './RangeInput'
import CheckBoxes from './CheckBoxes'
import Buttons from './Buttons'

type StateProps = {
    first: boolean
    second:boolean
    third:boolean
    fourth:boolean
}

const Settings = ({setPasswordDisplay}:any) => {
    const [numbers, setNumbers] = useState(10)
    const handleRangeChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value;
        setNumbers(value)
    }
    const [ checkboxes, setCheckboxes] = useState<StateProps>({first:false, second:false,third:false, fourth:false})
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const idCheckbox = e.currentTarget.id;
        const oldValue = checkboxes[idCheckbox as keyof object]
        let newChecks: StateProps = {first:false, second:false,third:false, fourth:false};
        if (idCheckbox === 'first') newChecks = {...checkboxes ,first:!oldValue}
        else if (idCheckbox === 'second') newChecks = {...checkboxes ,second:!oldValue}
        else if (idCheckbox === 'third') newChecks = {...checkboxes ,third:!oldValue}
        else if (idCheckbox === 'fourth') newChecks = {...checkboxes ,fourth:!oldValue}
        setCheckboxes(newChecks)
    }
    const calculateStrength = () => {
        const numberOfCheck = [checkboxes.first, checkboxes.second, checkboxes.third, checkboxes.fourth]
        let count = 0
        for (let check of numberOfCheck) {
            if(check) count++
        }
        return count
    }
    const handleClick = () => {
        if (numbers > 0 && calculateStrength()>0) {
            setPasswordDisplay(getPassword())
            return
        }
        alert('1 or more characters are required')
    }

    const symbols = '%$#@!_-+=)(^*{}';
    const upper = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const lower = 'qwertyuiopasdfghjklzxcvbnm'
    const passwordNumbers = '1234567890'
    
    function getRandomNumber(min: any, max: any) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    function getPassword() {
        let allSymbols = ''
        if (checkboxes.first) allSymbols += upper;
        if (checkboxes.second) allSymbols += lower;
        if (checkboxes.third) allSymbols += passwordNumbers;
        if (checkboxes.fourth) allSymbols += symbols;
        let password = '';
        for (let i = 0; i < numbers; i++){
            password+= allSymbols[getRandomNumber(0, allSymbols.length-1)]
        }
        return password
    }
    


  return (
    <div className='settings-wrapper'>

        <RangeInput numbers={numbers} handleRangeChange={handleRangeChange} />

        <CheckBoxes checkboxes={checkboxes} handleCheckboxChange={handleCheckboxChange} />

        <Buttons calculateStrength={calculateStrength} handleClick={handleClick} />

    </div>
  )
}

export default Settings