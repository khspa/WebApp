import React, { useState } from 'react'
import NormalForm from '../components/Form/NormalForm'
import Divider from '../components/Others/Divider'
import { ButtonContainer, Button } from '../components/Others/ButtonLink'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF, FaUser } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiFillLock, AiFillMail } from 'react-icons/ai'
import { IoLanguage } from 'react-icons/io5'
import { BsLockFill, BsShieldLockFill} from 'react-icons/bs'
import { FcDocument, FcSignature } from 'react-icons/fc'
import CircleButton from 'components/Others/Button'
import './FrontPage.scss'
import AnimatedBg from 'components/Background/AnimatedBg'

function FrontPage() {

    const [flip, setFlip] = useState(true)
    const handleClick = () => setFlip(!flip)
    
    return (
        <>
            <div className="locale">
                <IoLanguage/>
            </div>

            <div className={`bg signin ${flip?"active":"inactive"}`}>
                <CircleButton onClick={handleClick}>Sign Up</CircleButton>
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
                <ButtonContainer direction="column">
                    <Button
                        shape="bar"
                        bgColor="#db3236" 
                        prefix={<FcGoogle/>}
                        textColor="white"
                    >
                        Continue with Google
                    </Button>
                    <Button 
                        shape="bar"
                        bgColor="#1778F2"
                        prefix={<FaFacebookF style={{color:'#1778F2'}}/>}
                        textColor="white"
                    >
                        Continue with Facebook
                    </Button>
                    <Button
                        shape="bar"
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
            <div className={`bg signup ${flip?"inactive":"active"}`}>
                <CircleButton onClick={handleClick}>Sign In</CircleButton>

                <div className="form-container">

                    <h1> Sign Up </h1>
                    
                    <NormalForm>
                        <h2>  <FcDocument/> Basic Information </h2>
                        <NormalForm.Item>
                            <NormalForm.Input
                                prefix={<FaUser/>}
                                name="username"
                                type="text"
                                placeholder="Username"
                                validation={{requied:true, exclude:"#$%^&*()_=-"}}
                                clearData
                            />
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Input
                                prefix={<AiFillMail/>}
                                name="email"
                                type="email"
                                placeholder="Email"
                                validation={{requied:true, email:true}}
                                clearData
                            />
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Input
                                name="firstName"
                                type="text"
                                validation={{requied:true, include:"A-Z"}}
                                placeholder="First Name"
                            />
                            <NormalForm.Input
                                name="lastName"
                                type="email"
                                placeholder="Last Name"
                                validation={{requied:true, include:"A-Z"}}
                            />
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Input
                                prefix={<BsLockFill/>}
                                name="password"
                                type="password"
                                validation={{requied:true}}
                                placeholder="Password"
                                hideData
                            />
                            <NormalForm.Input
                                prefix={<BsShieldLockFill/>}
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                validation={{requied:true}}
                                hideData
                            />
                        </NormalForm.Item>
                        <h2> <FcSignature/> Agreement </h2>
                        <NormalForm.Item layout="flex-start">
                            <NormalForm.CheckBox name="agreement" label={<span className="term">By signing, you agree to the Terms and Conditions of <a href="/">this</a> </span>}/>
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Submit/>
                        </NormalForm.Item> 
                        <h2> Or sign up with social Media</h2>
                    </NormalForm>

                    <ButtonContainer direction="row">
                        <Button
                            shape="circle"
                            bgColor="#db3236" 
                            prefix={<FcGoogle/>}
                            textColor="white"
                        >
                        </Button>
                        <Button 
                            shape="circle"
                            bgColor="#1778F2"
                            prefix={<FaFacebookF style={{color:'#1778F2'}}/>}
                            textColor="white"
                        >
                        </Button>
                        <Button
                            shape="circle"
                            bgColor="#1DA1F2"
                            prefix={<BsTwitter style={{color:"#1DA1F2"}}/>}
                            textColor="white"
                        >
                        </Button>
                    </ButtonContainer>

                </div>
            </div>
            
        </>
        
        
    )
}

export default FrontPage
