import Link from 'next/link';

export default function Header() {
  return (
    <div className='glass' style={{position: "relative", width: "100vw", height: "50px", zIndex:"1"}}>
        <div style={{"display":"flex", "justifyContent": "space-between"}}>
                <Link href="/">
                    <h1 style={{"display":"flex","flexDirection":"row","flexWrap":"nowrap","alignContent":"center","justifyContent":"flex-start","alignItems":"center", "margin":"6px"}}>Stephen OMarrah</h1>
                </Link>
                <div style={{"display":"flex","flexDirection":"row","flexWrap":"nowrap","alignContent":"center","justifyContent":"space-around","alignItems":"center"}}>
                    <Link href="/projects" style={{"margin":"6px"}}>Projects</Link>
                    <Link href="/about" style={{"margin":"6px"}}>About</Link>
                    <Link href="/contact" style={{"margin":"6px"}}>Contact</Link>
                </div>
            </div>
    </div>
    
  )
}
