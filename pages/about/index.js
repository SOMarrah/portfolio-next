import Spline from '@splinetool/react-spline';

export default function index() {
  return (
    <>
    <div className="glass" style={{width:"50%", height:"30%", position:"absolute", top:"30%", left:"50%", margin:"0"}}>
      <div style={{position:"relative"}}>
        About Page
      </div>
    </div>
    <div style={{ width: "100vw", height: "100vh", position:"absolute", zIndex:"0", top:"0px"}}>
    <Spline scene="https://prod.spline.design/qQl4PKhy6wbKVbAM/scene.splinecode" />
  </div>
  </>
  )
}



