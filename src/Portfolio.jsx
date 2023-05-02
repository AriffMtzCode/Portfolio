import { AppRouter } from './router/AppRouter'
import { Navbar } from './ui/Navbar'
export const Portfolio = () => {
  return (
    <div className='font-Poppins bg-bg-page h-screen'>
      <Navbar />
      <AppRouter />
    </div>
  )
}
