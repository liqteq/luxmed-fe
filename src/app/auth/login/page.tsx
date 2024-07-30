import LoginForm from '@/components/LoginForm'
import React from 'react'

interface LoginProps { }

const Login: React.FC<LoginProps> = () => {
    return (
        <div><LoginForm /></div>
    )
}

export default Login