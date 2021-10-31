import React from 'react'
import NormalForm from '../components/Form/NormalForm'

function FrontPage() {
    return (
        <div>
            <NormalForm>
                <NormalForm.Input 
                    name='username'
                    type='text' 
                    placeholder='username'
                />
                <NormalForm.Input 
                    name='password' 
                    type='password' 
                    placeholder='password'
                />
                <NormalForm.CheckBox name="remember"/>
                <NormalForm.Submit/>
            </NormalForm>
        </div>
    )
}

export default FrontPage
