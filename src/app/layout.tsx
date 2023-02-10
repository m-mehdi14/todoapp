"use client";
import './globals.css'
import ChakraWrapper from './component/chakra';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body>
        {/* <h1>Awesome Todo App </h1> */}
        <ChakraWrapper>
        {children}
        </ChakraWrapper>
        
        </body>
    </html>
  )
}
