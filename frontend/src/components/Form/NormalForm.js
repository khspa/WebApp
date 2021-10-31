import React, { useEffect, useRef, useState } from 'react'


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

function NormalForm( {children} ) {

    const [data, setData] = useState({})
    const [errors, setErrors] = useState({})
    const childrenWithProps = React.Children.map(children, child=>{
        if(React.isValidElement(child)){
            return React.cloneElement(child, {...child.props, setData, setErrors}) 
        } else {
            return child
        }
    })
    
    const handleSubmit = e=>{
        e.preventDefault()
        console.log(data)
        console.log(errors)
    }

    return (
        <form onSubmit={handleSubmit}>
            {childrenWithProps}
        </form>
    )
}

/* -------------------------------------------------------------------------- */
/*                                    Input                                   */
/* -------------------------------------------------------------------------- */

function Input({
    name,
    type,
    placeholder,
    validation,
    setData,
    setErrors
}) {

    const inputRef = useRef("")

    const handleChange = event=>{
        setData(data=>{return {
            ...data, [name]:event.target.value
        }})
    }

    //run valiation whenever value has changed
    useEffect(() => {
        
        //initialize input field
        if(!inputRef.current.value){
            setData(data=>{return {
                ...data, [name]:""
            }})
        }

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

    return (
        <input 
            ref={inputRef} 
            name={name} 
            type={type} 
            placeholder={placeholder} 
            onChange={handleChange}
        />
    )
}

/* -------------------------------------------------------------------------- */
/*                                   Submit                                   */
/* -------------------------------------------------------------------------- */

function Submit() {
    return <input type='submit'/>
}

/* -------------------------------------------------------------------------- */
/*                                  checkBox                                  */
/* -------------------------------------------------------------------------- */

function CheckBox({name, setData, defaultCheck}) {

    const inputRef = useRef("")

    useEffect(() => {
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
    }, [name, setData, defaultCheck])

    const handleChange = e => {
        setData(data=>{return {
            ...data, [name]:e.target.checked
        }})
    }

    return <input ref={inputRef} name={name} type='checkbox' onChange={handleChange}/>
}

/* -------------------------------------------------------------------------- */
/*                                   export                                   */
/* -------------------------------------------------------------------------- */

NormalForm.Input = Input
NormalForm.CheckBox = CheckBox
NormalForm.Submit = Submit

export default NormalForm
