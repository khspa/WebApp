import React from 'react'
import NormalForm from '../components/Form/NormalForm'
import Divider from '../components/Others/Divider'
import { ButtonContainer, Button } from '../components/Others/ButtonLink'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF, FaUser } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiFillLock } from 'react-icons/ai'
import { IoLanguage } from 'react-icons/io5'
import CircleButton from 'components/Others/Button'
import './FrontPage.scss'
import AnimatedBg from 'components/Background/AnimatedBg'

function FrontPage() {
    return (
        <>
            <div className="locale">
                <IoLanguage/>
            </div>

            <CircleButton>Sign Up</CircleButton>

            <div className="bg">
                
                <AnimatedBg/>
                <div className="form-container">
                    
                    <NormalForm>

                        <NormalForm.Title 
                            logo={<img alt="logo" src={process.env.PUBLIC_URL + 'logo.svg'} />} 
                            title="online loan platform"
                        />

                        <NormalForm.Item>
                            <NormalForm.Input
                                prefix={<FaUser/>}
                                name='username'
                                type='text' 
                                placeholder='username'
                                validation={{required: true}}
                                clearData
                            />
                        </NormalForm.Item>

                        <NormalForm.Item>
                            <NormalForm.Input
                                prefix={<AiFillLock/>}
                                name='password' 
                                type='password' 
                                placeholder='password'
                                validation={{required: true}}
                                hideData
                            />
                        </NormalForm.Item>

                        <NormalForm.Item layout="space-between">
                            <NormalForm.CheckBox name="remember" label="Remember Me" defaultCheck={true}/>
                            <a href="/">forgot username/password?</a>
                        </NormalForm.Item>

                        <NormalForm.Item layout="flex-start">
                            <NormalForm.Submit>Sign In</NormalForm.Submit>
                        </NormalForm.Item>

                    </NormalForm>
                </div>
                <Divider>Or sign in with</Divider>
                <ButtonContainer>
                    <Button 
                        bgColor="#db3236" 
                        prefix={<FcGoogle/>}
                        textColor="white"
                    >
                        Continue with Google
                    </Button>
                    <Button 
                        bgColor="#1778F2"
                        prefix={<FaFacebookF style={{color:'#1778F2'}}/>}
                        textColor="white"
                    >
                        Continue with Facebook
                    </Button>
                    <Button
                        bgColor="#1DA1F2"
                        prefix={<BsTwitter style={{color:"#1DA1F2"}}/>}
                        textColor="white"
                    >
                        Continue with Twitter
                    </Button>
                </ButtonContainer>
                <div className="graph left">
                    <img alt="person" src={process.env.PUBLIC_URL + 'partying.svg'} />
                </div>

                <div className="graph right">
                    <img alt="person" src={process.env.PUBLIC_URL + 'withlove.svg'} />
                </div>
            </div>
        </>
        
        
    )
}

export default FrontPage
