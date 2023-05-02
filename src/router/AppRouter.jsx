import { Navigate, Route, Routes } from 'react-router-dom'
import { PackagesPage, ContactPage, PortfolioPage, AboutMePage, ResumePage } from '../pages'


export const AppRouter = () => {
  return (
    <>
        <Routes>
        <Route path='/' element={ <AboutMePage />}/>
        <Route path='resume' element={ <ResumePage />}/>
        <Route path='portfolio' element={ <PortfolioPage />}/>
        <Route path='contact' element={ <ContactPage />}/>
        <Route path='packages' element={ <PackagesPage />}/>

        <Route path='/*' element={ <Navigate to='/' /> } />
      </Routes>
    </>
  )
}
