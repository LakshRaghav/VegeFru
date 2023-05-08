import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import ContextState from '@/components/context/contextState';

export default function App({ Component, pageProps }) {
  return <ContextState><Component {...pageProps} /></ContextState> 
  
}
