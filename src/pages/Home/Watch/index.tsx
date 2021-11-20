import { ArrowBack } from "@material-ui/icons"
import { WatchContainer, BackBtn, Video } from "./watchStyle"

 const Watch = () => {
    return (
        <WatchContainer>
            <BackBtn>
                <ArrowBack />
                Home
            </BackBtn>
             <Video className="video" autoPlay controls src='https://player.vimeo.com/external/407770910.sd.mp4?s=a667f5343dce9d3928dd32302a6f3d5e65362893&profile_id=165&oauth2_token_id=57447761' />
            
        </WatchContainer>
    )
}

export default Watch
