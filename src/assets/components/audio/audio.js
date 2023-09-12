import {useState,useEffect} from 'react';
import { useLocation} from '../../../contexts/context';
import '../audio/audio.scss'
const Audios = (url, control, to) => {
    const [audio] = useState(new Audio(url));
    let [playing, setPlaying] = useState(false);
    const {
        location,
        setLocation
    } = useLocation()

    function toggle() {

        let finded = location.mentionApi.morningMention.find((el) => el.id == to)

        location.mentionApi.morningMention.forEach(element => {
            element.playing = false
        });

        finded.playing = !finded.playing
       
        const findIndex = location.mentionApi.morningMention.findIndex((el) => el.id == to)
        setLocation({
            ...location,
            ...location.mentionApi.morningMention.splice(findIndex, 1, finded)
        })
        control = !control
        setPlaying(!playing)
    };
    if (!control) {
        audio.pause()
        playing = false
    }
    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    return [playing, toggle];
};

const Player = ({url,control,to}) => {
    const [playing, toggle] = Audios(url, control, to);

    return (
      <div className='audio'>
        <input type='button' onClick={toggle} className={playing  ? "audio-button-play" : "audio-button-pause"}></input>
      </div>
    )   
}
export default Player