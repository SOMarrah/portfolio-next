import "../styles/globals.css";
import Spline from '@splinetool/react-spline';
import Header from "./component/Header";

function MyApp({ Component, pageProps, ...appProps }) {
  const getContent = () => {
    if ([`/about`].includes(appProps.router.pathname)){
      return (
        <>
          <Header/>
          <Component {...pageProps}/>
        </>
      )}
      else if ([`/contact`].includes(appProps.router.pathname)){
        return (
          <>
            <Header/>
            <Component {...pageProps}/>
          </>
        )}
      else{
      return (
        <>
          <Header/>
          <Component {...pageProps} />
          <div style={{ width: "100%", height: "100%", position:"absolute", zIndex:"0", top:"0px"}}>
            <Spline scene="https://prod.spline.design/x-0dOPrwauNvnY-b/scene.splinecode" />
          </div>
        </>
      )}
  };
  
  return (<>{getContent()}</>)
 
}

export default MyApp
