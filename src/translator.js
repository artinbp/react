import React,{useState} from "react";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

function Translator(){
    const [language,setLanguage]=useState("ru")
    const [text,setText]=useState("")
return(
    <>
        <Field label="input" onChange={setText} value={text}/>
        <Languages language={language} onLanguageChange={setLanguage}/>
        <hr />
        <Translate text={text} language={language}/>

    </>

)
}
export default Translator;