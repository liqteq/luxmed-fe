import React from 'react'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props
  return (
    <div>{children}</div>
  )
}

export default RootLayout