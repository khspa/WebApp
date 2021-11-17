import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs'
import axios from 'axios'
import ReactDOM from 'react-dom'
import Messages from 'components/Others/Messages'
import './NormalForm.scss'
import { useHistory } from 'react-router'

/* -------------------------------------------------------------------------- */
/*                                   helper                                   */
/* -------------------------------------------------------------------------- */

const showError = (target, message) => {
    const targetBx = document.getElementById(`${target}-bx`)
    const targetMe = document.getElementById(`${target}-me`)

    if(message){
        targetBx.classList.remove("blur")
        targetBx.classList.add("shake-animation")
        targetBx.classList.add("danger")
        targetMe.innerHTML = message
        return true
    } else {
        targetBx.classList.remove("danger")
        targetBx.classList.add("blur")
        targetMe.innerHTML = ""
        return false
    }
}

/* -------------------------------------------------------------------------- */
/*                                 Validations                                */
/* -------------------------------------------------------------------------- */

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
const checkBlank = v=> !v || /^\s*$/.test(v)
const checkExceed = (v, l)=> v.length > l
const checkInclude = (v, reg)=> {
    let pattern = new RegExp(`^[${escapeRegExp(reg)}]*`, 'g')
    //match exactly all characters
    return v.match(pattern)[0] !== v
}
const checkExclude = (v, reg)=> {
    let pattern = new RegExp(`[${escapeRegExp(reg)}]`, 'g')
    return pattern.test(v)
}
const checkRange = (v, range)=> !(range.min <= v && range.max >= v)
const checkNumeric = v => !/^\d+$/.test(v)
const checkEmail = v=> {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(String(v).toLowerCase());
}

function validate(value, validation) {

    let errorMessages = []

    if(validation.required && checkBlank(value)){
        errorMessages.push("Required field cannot be empty or blank")
    }
    if(validation.maxLength && checkExceed(value, validation.maxLength)){
        errorMessages.push(`Cannot exceed ${validation.maxLength} characters`)
    }
    if(validation.minLength && !checkExceed(value, validation.minLength)){
        errorMessages.push(`Must contain at least ${validation.minLength} characters`)
    }
    if(validation.include && checkInclude(value, validation.include)){
        errorMessages.push(`Only "${validation.include}" are allowed`)
    }
    if(validation.exclude && checkExclude(value, validation.exclude)){
        errorMessages.push(`Cannot contain any "${validation.exclude}" characters`)
    }
    if(validation.range && checkRange(value, validation.range)){
        errorMessages.push(`Must between ${validation.range.min} and ${validation.range.max}`)
    }
    if(validation.numeric && checkNumeric(value)){
        errorMessages.push("Please enter numbers")
    }
    if(validation.email && checkEmail(value)){
        errorMessages.push("Please enter valid email address")
    }

    return errorMessages
}

/* -------------------------------------------------------------------------- */
/*                               Form Component                               */
/* -------------------------------------------------------------------------- */

function NormalForm( {formName, children, w, request} ) {

    const history = useHistory()
    const [data, setData] = useState({})
    const [errors, setErrors] = useState({})
    const childrenWithProps = React.Children.map(children, child=>{
        if(React.isValidElement(child)){
            return React.cloneElement(child, {...child.props, formName, setData, setErrors}) 
        } else {
            return child
        }
    })

    const handleSubmit = e=>{

        e.preventDefault()
        let errorFlag = false

        /* --------------------------- frontend validation -------------------------- */
        for(const field in errors) {
            try{
                errorFlag = showError(field, errors[field][0])
            } catch {}
        }

        if(errors.mustCheck) {
            let message = errors.mustCheck
            const target =  document.getElementById("pop-up-message")
            ReactDOM.render(<Messages status="warning">{message}</Messages>, target)
            errorFlag = true
        } 

        if(data.ConfirmPassword && (data.ConfirmPassword !== data.registerPassword)){
            errorFlag = showError("ConfirmPassword", "Password does not match")
            errorFlag = showError("registerPassword", "Password does not match")
        }

        /* ------------------------ if everything goes right ------------------------ */
        if(!errorFlag) {
            axios.post(request.host, data)
            .then(response => {
                const target =  document.getElementById("pop-up-message")
                ReactDOM.render(request.success, target)

                window.localStorage.setItem("access", response.data.access)
                window.localStorage.setItem("refresh", response.data.refresh)
                        
                if(data.remember) {
                    window.localStorage.setItem("username", data.username)
                    window.localStorage.setItem("password", data.password)
                } else {
                    window.localStorage.removeItem("username", data.username)
                    window.localStorage.removeItem("password", data.password)
                }
                history.push(request.sredirect)
            })
            .catch(error => {
                /* ------------------------ 401 authentication error ------------------------ */
                if(error.response.status === 401){

                    const target =  document.getElementById("pop-up-message")
                    ReactDOM.render(request.fail, target)

                    showError('username', "Wrong Username/Password")
                    showError('password', "Wrong Username/Password")
                /* ----------------------------- 400 bad request ---------------------------- */
                } else if (error.response.status === 400){

                    const errors = error.response.data
                    for (const key in errors) {showError(key, errors[key][0])}
                    
                }
                /* ------------------------------ other errors ------------------------------ */
                else {  
                    const target =  document.getElementById(`pop-up-message`)
                    ReactDOM.render(<Messages status="warning">{request.fail}: target server not responding</Messages>, target)
                }
            })
        }    

    }

    return (
        <form className="form-bx" style={{maxWidth:w}} onSubmit={handleSubmit} noValidate>
            {childrenWithProps}
        </form>
    )
}

function Title( {logo, title} ) {
    return (
        <div className="form-title">
            {logo}
            <h1> {title} </h1>           
        </div>
    )
}

function Input({
    name,
    type,
    defaultValue,
    placeholder,
    validation,
    setData,
    setErrors,
    prefix,
    clearData,
    hideData,
}) {

    const inputRef = useRef("")
    const outlineRef = useRef("")
    const [hide, setHide] = useState(true)

    const handleChange = event=>{
        setData(data=>{return {
            ...data, [name]:event.target.value
        }})
    }

    const handleHide = ()=>{
        if(inputRef.current.type==="text"){
            inputRef.current.type = "password"
        } else {
            inputRef.current.type = "text"
        }
        setHide(!hide)
    }

    const handleClear = ()=>{
        inputRef.current.value = ""
        setData(data=>{return {
            ...data, [name]:""
        }})
    }

    const handleFocus = ()=>{
        if(outlineRef.current.classList[1] === "blur"){
            outlineRef.current.classList.remove("blur")
            outlineRef.current.classList.add("focus")
        }
        else{
            outlineRef.current.classList.add("focus-danger")
        }
    }

    const handleBlur = ()=>{
        if(outlineRef.current.classList[1] === "focus") {
            outlineRef.current.classList.remove("focus")
            outlineRef.current.classList.add("blur")
        }
        else {
            outlineRef.current.classList.remove("focus-danger")
        }
    }

    //run valiation whenever value has changed
    useEffect(() => {
        //valiation
        if(validation){
            const errorMessages = validate(inputRef.current.value, validation)
            if(errorMessages){
                setErrors(error=>{return {
                    ...error, [name]:errorMessages
                }})
            }
        }
    }, [name, setData, setErrors, inputRef.current.value, validation])

    //initialize value
    useEffect(() => {
        if(defaultValue) {
            inputRef.current.value = defaultValue
            setData(data=>{return {
                ...data, [name]:defaultValue
            }})
            setErrors(data=>{return {
                ...data, [name]:[]
            }})
        } else {
            setData(data=>{return {
                ...data, [name]:""
            }})
            setErrors(data=>{return {
                ...data, [name]:[]
            }})
        }
    }, [defaultValue, setData, setErrors, name])

    return (
        <div id={`${name}-bx`} ref={outlineRef} className="input-group blur">
            {prefix && <span className="prefix"> {prefix} </span>}
            <input 
                ref={inputRef} 
                name={name} 
                type={type} 
                placeholder={placeholder}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
             />
            {clearData && <span className="suffix" onClick={handleClear}>  <AiOutlineClose/> </span>}
            {hideData && <span className="suffix" onClick={handleHide}> {hide ? <BsFillEyeSlashFill/> : <BsFillEyeFill/> } </span>}
            <div id={`${name}-me`} className="message"></div>
        </div>
    )     
}

function Submit({value, formName}) {

    const ClearAnimation = () => {
        const inputFields = document.querySelectorAll(".input-group.shake-animation")
        inputFields
        .forEach(element=>
            element && element.classList.remove('shake-animation')
        )

        try{
            const target =  document.getElementById("pop-up-message")
            ReactDOM.render(<></>, target)
        } catch{}
    
    }

    return <input onClick={ClearAnimation} className="submit-btn" type='submit' value={value}/>
}

function CheckBox({name, label, setData, setErrors, defaultCheck, mustCheck}) {

    const inputRef = useRef("")

    const validateCheck = useCallback(() => {
        if(mustCheck) {
            if(!inputRef.current.checked) {
                setErrors(data=>{return {
                    ...data, mustCheck: `You must agree to the terms and conditions!`
                }})
            } else {
                setErrors(data=>{
                    let temp = data
                    if(temp.mustCheck){delete temp.mustCheck}
                    return temp
                })
            }

        }
    },[mustCheck, setErrors])

    //initialize
    useEffect(() => {
        validateCheck()
        if(defaultCheck){
            setData(data=>{return {
                ...data, [name]:defaultCheck
            }})
            inputRef.current.checked = defaultCheck
        } else {
            setData(data=>{return {
                ...data, [name]:false
            }})
            inputRef.current.checked = false
        }
    }, [name, setData, defaultCheck, validateCheck])

    //handle user manual check
    const handleChange = e => {
        validateCheck()
        setData(data=>{return {
            ...data, [name]:e.target.checked
        }})
    }

    return (
        <div className="check-bx">
            <input 
                id={`${name}-check-bx`}
                ref={inputRef} 
                name={name} 
                type='checkbox' 
                onChange={handleChange}
            />
            <label>{label}</label>
        </div>
    )
    
}

/* -------------------------------------------------------------------------- */
/*                                   Divider                                  */
/* -------------------------------------------------------------------------- */

function Item({children, layout, setData, setErrors, formName, style}) {

    const childrenWithProps = React.Children.map(children, child=>{
        if(React.isValidElement(child)){
            //pass setData and setErrors props to children if they have name
            if(child.props.name){
                return React.cloneElement(child, {...child.props, formName, setData, setErrors})
            }
            else if (child.props.value){
                return React.cloneElement(child, {...child.props, formName})
            }
            //return if child does not have name
            else{
                return child
            }
        }
        //return if child is not a component (probaly plain text)
        else{
            return child
        }
    })

    return <div style={style} className={ layout ? `divider ${layout}` : "divider space-around" }>{childrenWithProps}</div>
}

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

NormalForm.Input = Input
NormalForm.Title = Title
NormalForm.Item = Item
NormalForm.CheckBox = CheckBox
NormalForm.Submit = Submit

export default NormalForm
