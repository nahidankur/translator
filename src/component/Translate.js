//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, {useState} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
    {
        label : 'Africaans',
        value : 'af'
    }, {
        label : 'Arabic',
        value : 'ar'
    }, {
        label : 'Hindi',
        value : 'hi'
    },  {
        label : 'Bengali',
        value : 'bn'
    },  {
        label : 'French',
        value : 'fr'
    }
]

const Translate = ()=>{
    const [language, setLanguage] = useState(options[0])
    const [text, setText] =  useState('')
    return(
        <div>
            <div className='ui form'>
                <div className='field'>
                <label>Input your Text</label>
            <input value={text} onChange={(e)=> setText(e.target.value)} />
                </div>
               
            
            </div>
            
            <Dropdown selected={language} onSelectedChange={setLanguage} options={options} />
            <hr/>
            <h3 className='header'>Output</h3>
                <Convert text={text} language={language} />
        </div>   
    )
}

export default Translate 