import React, { useState, useEffect } from 'react'
import NormalForm from '../components/Form/NormalForm'
import Divider from '../components/Others/Divider'
import { ButtonContainer, Button } from '../components/Others/ButtonLink'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF, FaUser } from 'react-icons/fa'
import { BsTwitter, BsFillChatRightDotsFill } from 'react-icons/bs'
import { AiFillLock, AiFillMail } from 'react-icons/ai'
import { IoLanguage } from 'react-icons/io5'
import { BsLockFill, BsShieldLockFill} from 'react-icons/bs'
import { FcDocument, FcSignature } from 'react-icons/fc'
import CircleButton from 'components/Others/Button'
import './FrontPage.scss'
import AnimatedBg from 'components/Background/AnimatedBg'

function FrontPage() {

    const [flip, setFlip] = useState(false)
    const handleClick = () => setFlip(!flip)
    
    return (
        <>
            <div className="locale">
                <IoLanguage/>
            </div>

            <CircleButton show={!flip} onClick={handleClick}>Sign Un</CircleButton>
            <CircleButton show={flip} onClick={handleClick}>Sign In</CircleButton>

            <div className={`bg signin ${flip?"active":""}`}>
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
            <div className={`bg signup ${flip?"inactive":""}`}>
                
                <div className="form-container">

                    <div className="signup-title">
                        <h1> Sign Up </h1>
                    </div>

                    <NormalForm>
                        <NormalForm.Item style={{height:'fit-content'}}>
                            <h2>  <FcDocument/> Basic Information </h2>
                        </NormalForm.Item>
                        
                        <NormalForm.Item>
                            <NormalForm.Input
                                prefix={<FaUser/>}
                                name="register_username"
                                type="text"
                                placeholder="Username"
                                validation={{required:true, exclude:"#$%^&*()_=-"}}
                                clearData
                            />
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Input
                                prefix={<AiFillMail/>}
                                name="email"
                                type="email"
                                placeholder="Email"
                                validation={{required:true, email:true}}
                                clearData
                            />
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Input
                                prefix={<BsFillChatRightDotsFill/>}
                                name="Name"
                                type="text"
                                validation={{required:true, include:"A-Z"}}
                                placeholder="Name"
                            />

                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Input
                                prefix={<BsLockFill/>}
                                name="register_password"
                                type="password"
                                validation={{required:true}}
                                placeholder="Password"
                                hideData
                            />
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Input
                                prefix={<BsShieldLockFill/>}
                                name="confirmPassword"
                                type="password"
                                validation={{required:true}}
                                placeholder="Confirm Password"
                                hideData
                            />
                        </NormalForm.Item>
                        <NormalForm.Item layout="flex-start">
                            <NormalForm.CheckBox name="agreement" label={<span className="term"> I agree to the <a href="/">Terms and Conditions</a>  </span>}/>
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Submit/>
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <h2> <FcSignature/> Or sign up with social media </h2>
                        </NormalForm.Item>
                        
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

                <div className="graph left">
                    <img alt="person" src={process.env.PUBLIC_URL + 'emails.svg'} />
                </div>

                <div className="graph right">
                    <img alt="person" src={process.env.PUBLIC_URL + 'vault.svg'} />
                </div>
                
            </div>
            
        </>
        
        
    )
}

export default FrontPage
