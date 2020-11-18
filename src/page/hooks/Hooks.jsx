import React,{ useState, useContext, useEffect } from 'react'
import Rows from './Row';
import { ThemeContext } from './context'

export default function GreetingH() {
    const name = useForm('Wind');
    const surname = useForm('Cilo');
    const {theme, language} = useContext(ThemeContext);
    useDocumentTitle(name.value + ' ' + surname.value);
    const width = useWindowWidth();
    
    return (
        <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',backgroundColor: 'rgb(27,36,32)',height: 500}}>
            <section className={theme}>
                <Rows label='Name'>
                    <input {...name}/>
                </Rows>
                <Rows label='Name'>
                    <input {...surname}/>
                </Rows>
                <Rows label='Language'>
                    {language}
                </Rows>
                <Rows label='Width'>
                    {width}
                </Rows>
            </section>
        </div>
    )
}

function useForm(intialVal) {
    const [value, setVal] = useState(intialVal);
    
    function handleNameChange(e){
        setVal(e.target.value);
    }
    
    return {
        value,
        onChange: handleNameChange
    }
}

function useDocumentTitle(title) {
    useEffect(() => {//副作用
        document.title = title;
    })
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResizeWidth = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizeWidth);
        return () => {
            window.removeEventListener('resize', handleResizeWidth);
        }
    })
    return width;
}
