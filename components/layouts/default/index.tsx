import React from 'react'
import { Footer } from './footer'
import { Header } from './header'

interface DefaultLayoutProps extends React.PropsWithChildren { }

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
