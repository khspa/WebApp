import React, { useState } from 'react'
import BasicLayout from 'components/Layout/BasicLayout'
import AnimatedBg from "components/Background/AnimatedBg";
import Locale from 'components/Buttons/Locale';
import NormalForm from 'components/Form/NormalForm';
import Divider from 'components/Others/Divider';
import { ButtonsGroup, CircleButton } from 'components/Buttons/Buttons';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsApple, BsTwitter, BsFillShieldLockFill } from 'react-icons/bs';
import { FaUser, FaLock, FaHandPaper } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import HyperText from 'components/Text/HyperText';
import Toggle from 'components/Others/Toggle';
import Transitor from 'components/Others/Transitor';
import Modal from 'components/Buttons/Modal';

const terms1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

function FrontPage() {

    const [active, setActive] = useState(true)

    return (
        <BasicLayout background={<AnimatedBg/>}>
            <BasicLayout.Header prefix={<Locale/>}/>
            <Transitor show={active}>
                <BasicLayout.Body centerItems>
                    <NormalForm formName="signin" w="340px" h="fit-content">
                        <NormalForm.Title 
                            logo={<img alt="logo" src={process.env.PUBLIC_URL + 'logo.svg'} />} 
                            title="online loan platform"
                        />
                        <NormalForm.Item>
                            <NormalForm.Input 
                                prefix={<FaUser/>}
                                name="username" 
                                type="text" 
                                placeholder="Username"
                                validation={{required:true}}
                                clearData
                            />
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Input 
                                prefix={<FaLock/>}
                                name="password" 
                                type="password" 
                                placeholder="Password"
                                validation={{required:true}}
                                hideData
                            />
                        </NormalForm.Item>
                        <NormalForm.Item layout="space-between">
                            <NormalForm.CheckBox name="remember" label="Remember Me" defaultCheck={true}/>
                            <HyperText href="/">forgot username/password?</HyperText>
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Submit value="Sign In"/>
                        </NormalForm.Item>
                    </NormalForm>
                    <Divider>Or sign in with</Divider>
                    <ButtonsGroup w="340px" h="80px" row>
                        <CircleButton icon={<FcGoogle/>}/>
                        <CircleButton icon={<BsFacebook style={{color:"#3b5998"}}/>}/>
                        <CircleButton icon={<BsApple style={{color:"#A2AAAD"}}/>}/>
                        <CircleButton icon={<BsTwitter style={{color: "#1DA1F2"}}/>}/>
                    </ButtonsGroup>
                </BasicLayout.Body>
                <BasicLayout.Body centerItems>
                    <NormalForm formName="signup" w="340px" h="fit-content">
                        <NormalForm.Title 
                            logo={<img alt="logo" src={process.env.PUBLIC_URL + 'reg.svg'} />} 
                            title="Sign Up Today"
                        />
                        <NormalForm.Item>
                            <NormalForm.Input
                                prefix={<FaUser/>}
                                name="registerName" 
                                type="text"
                                placeholder="Username"
                                clearData
                                validation={{
                                    required: true,
                                    include: "a-zA-Z0-9@!#"
                                }}
                            />
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Input
                                prefix={<HiMail/>}
                                name="email" 
                                type="email"
                                placeholder="Email"
                                clearData
                                validation={{
                                    required:true,
                                    email: true
                                }}
                            />
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Input
                                prefix={<FaLock/>}
                                name="registerPassword" 
                                type="password"
                                placeholder="Password"
                                hideData
                                validation={{required:true}}
                            />
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Input
                                prefix={<BsFillShieldLockFill/>}
                                name="ConfirmPassword" 
                                type="password"
                                placeholder="Confirm Password"
                                hideData
                                validation={{required:true}}
                            />
                        </NormalForm.Item>
                        <NormalForm.Item layout="flex-start">
                            <NormalForm.CheckBox 
                                name="agreement" 
                                defaultCheck={false}
                                mustCheck
                            />
                            <Modal
                                button={{
                                    closeMessage: "Agree",
                                    middleWare: ()=>{
                                        const checkbox = document.getElementById("agreement-check-bx")
                                        !checkbox.checked && checkbox.click()
                                    }
                                }}
                                messages={
                                    <>
                                        <h1>Terms And Conditions</h1>
                                        <p>{terms1}</p>
                                        <p>{terms1}</p>
                                        <p>{terms1}</p>
                                    </>
                                }
                            >
                                I acknowledge the  terms and conditions
                            </Modal>
                        </NormalForm.Item>
                        <NormalForm.Item>
                            <NormalForm.Submit value="Sign Up"/>
                        </NormalForm.Item>
                    </NormalForm>
                    <Divider>Or sign up with</Divider>
                    <ButtonsGroup w="340px" h="80px" row>
                        <CircleButton icon={<FcGoogle/>}/>
                        <CircleButton icon={<BsFacebook style={{color:"#3b5998"}}/>}/>
                        <CircleButton icon={<BsApple style={{color:"#A2AAAD"}}/>}/>
                        <CircleButton icon={<BsTwitter style={{color: "#1DA1F2"}}/>}/>
                    </ButtonsGroup>
                </BasicLayout.Body>
            </Transitor>
            <Toggle icon={<FaHandPaper/>} active={active} setActive={setActive} on="Sign Up" off="Sign In"/>
        </BasicLayout>
    )
}


export default FrontPage