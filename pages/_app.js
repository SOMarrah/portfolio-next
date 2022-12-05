import "../styles/globals.css";
import Spline from '@splinetool/react-spline';
import Header from "./component/Header";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
      <div className='bg' style={{ width: "100vw", height: "100vh", position:"absolute", zIndex:"-1", top:"0px"}}>
          <Spline scene="https://prod.spline.design/g6MWV2TyeW6Emrqe/scene.splinecode" />
      </div>
    </div>
  )
 
}

export default MyApp
