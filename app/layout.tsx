import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/SideBar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/functions/getSongsByUserId'
import Player from '@/components/Player'


const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'That Music Box',
  description: 'Lets buy and sell some melodies!',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const userSongs = await getSongsByUserId();
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
              <SideBar songs={userSongs}>
                  {children}
              </SideBar>
              <Player />
            </UserProvider>
        </SupabaseProvider>
        
      </body>
    </html>
  )
}
