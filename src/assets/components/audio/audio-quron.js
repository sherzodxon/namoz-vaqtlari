import {
    useState,
    useEffect
} from 'react';
import {
    useLocation
} from '../../../contexts/context';

import '../audio/audio.scss'

const PlayerQuron = ({url,control,to }) => {
 
    const [audio] = useState(new Audio(url));
   
    const {
        location,
        setLocation
    } = useLocation()
    let [play, setPlay] = useState(false);
    
    function toggled() {
        let find = location.quronApi.find((el) => el.number == to)

        location.quronApi.forEach(element => {
            element.playing = false
        });

        find.playing = !find.playing
        const findIn = location.quronApi.findIndex((el) => el.number == to)

        setLocation({
            ...location,
            ...location.quronApi.splice(findIn, 1, find)
        })

        control = !control
        setPlay(!play)
    };

    if (!control) {
        audio.pause();
        play = false
    }
   

    useEffect(() => {   
        play ? audio.play() : audio.pause();
    }, [play]);
    return (
      <div>
        <audio id='audio' preload='auto' src={url}></audio>
        <button onClick={toggled} className={play? `audio-button-play ` : `audio-button-pause`}></button>
      </div>
    )   
}
export default PlayerQuron