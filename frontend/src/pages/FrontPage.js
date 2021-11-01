import React from 'react'
import NormalForm from '../components/Form/NormalForm'

function FrontPage() {
    return (
        <div>
            <NormalForm>
                
                <NormalForm.Item>
                    <NormalForm.Input 
                        name='username'
                        type='text' 
                        placeholder='username'
                        validation={{required: true}}
                        clearData
                    />
                    <NormalForm.Input 
                        name='password' 
                        type='password' 
                        placeholder='password'
                        validation={{required: true}}
                        hideData
                    />
                </NormalForm.Item>
                
                <NormalForm.Item>
                    <NormalForm.CheckBox name="remember"/>
                    <a href="/">forgot password?</a>
                </NormalForm.Item>
                
                <NormalForm.Item>
                    <NormalForm.Submit/>
                </NormalForm.Item>
                
            </NormalForm>
        </div>
    )
}

export default FrontPage
