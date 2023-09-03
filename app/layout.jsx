import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: "Promptinator",
  description: "Speed up your dev & AI skills!"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Provider>

          <div className="main">
            <div className="gradient" />
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>



        </Provider>

      </body>
    </html>
  )
}
