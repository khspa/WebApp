import React, { useState } from 'react'
import BasicLayout from 'components/Layout/BasicLayout'
import AnimatedBg from "components/Background/AnimatedBg";
import Locale from 'components/Buttons/Locale';
import NormalForm from 'components/Form/NormalForm';
import Divider from 'components/Others/Divider';
import { ButtonsGroup, CircleButton } from 'components/Buttons/Buttons';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsApple, BsTwitter } from 'react-icons/bs';
import { FaUser, FaLock, FaHandPaper } from 'react-icons/fa'
import HyperText from 'components/Text/HyperText';
import Toggle from 'components/Others/Toggle';
import Transitor from 'components/Others/Transitor';

function FrontPage() {

    const [active, setActive] = useState(false)

    return (
        <BasicLayout background={<AnimatedBg/>}>
            <BasicLayout.Header prefix={<Locale/>}/>
            <Transitor show={active}>
                <BasicLayout.Body centerItems>
                    <NormalForm w="320px" h="fit-content">
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
                    <ButtonsGroup w="320px" h="80px" row>
                        <CircleButton icon={<FcGoogle/>}/>
                        <CircleButton icon={<BsFacebook style={{color:"#3b5998"}}/>}/>
                        <CircleButton icon={<BsApple style={{color:"#A2AAAD"}}/>}/>
                        <CircleButton icon={<BsTwitter style={{color: "#1DA1F2"}}/>}/>
                    </ButtonsGroup>
                </BasicLayout.Body>
                <BasicLayout.Body centerItems>
                    <NormalForm w="320px" h="fit-content">
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
                    <ButtonsGroup w="320px" h="80px" row>
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