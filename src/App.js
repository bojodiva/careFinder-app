import './App.css';
import GeneralRouter from './components/GeneralRouter';
import ErrorBoundary from './components/ErrorBoundary.tsx'
// import DataForm from "./pages/AddHospital"
export default function App() {
  return (
    <>
    <ErrorBoundary>
      <GeneralRouter/>
    </ErrorBoundary>
    </>
  )
}


