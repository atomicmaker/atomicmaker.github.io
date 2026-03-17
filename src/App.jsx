import ProfileFrame from './components/ui/ProfileFrame.jsx'
import Sidebar from './components/ui/Sidebar.jsx'
import DesignButton from './components/ui/DesignButton.jsx'
import MusicPlayer from './components/ui/MusicPlayer.jsx'
import LinkCard from './components/ui/LinkCard.jsx'
import TimeCard from './components/ui/TimeCard.jsx'
import { AuroraText } from './components/ui/aurora-text.tsx'
import { PixelImage } from './components/ui/pixel-image.tsx'
import './App.css'

function App() {

  return (
    <div className="main">
      <div className="leftside">
          <div className="card-container selection">
            <div className="introduction">
              <img src="src/assets/profile.jpg" style={{width:"60px", borderRadius:"50px", margin:"0 15px 0 0"}}></img>
              <p>不会替身(开发中)</p>
            </div>
            <Sidebar></Sidebar>
          </div>
      </div>

      <div className="midside" style={{marginTop:"10%"}}>
        <div className="card-container">
          <PixelImage src="src/assets/card-picture.jpg" grid="8x8"></PixelImage>
        </div>

        <div className="card-container">
          <div><ProfileFrame></ProfileFrame></div>
          <p style={{fontSize:"20px"}}>A simple soul with a passion for</p>
          <p style={{fontSize:"30px"}}><AuroraText>Games</AuroraText> and <AuroraText>Code</AuroraText></p>
          <p style={{fontSize:"20px"}}><AuroraText>Welcome</AuroraText> to my <AuroraText>Blog</AuroraText></p>
        </div>

        <div style={{marginTop:"10%"}}>
          <LinkCard></LinkCard>
        </div>
      </div>

      <div className="rightside" >
        <div className="design">
          <DesignButton></DesignButton>
        </div>
        <TimeCard></TimeCard>
        
        <div className="music">
          <MusicPlayer></MusicPlayer>
        </div>
      </div>
    </div>
  )
}

export default App
