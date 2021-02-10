import React from 'react';
import {Row} from 'react-bootstrap';
import MusicItem from './MusicItem/MusicItem';

import monstersCover from '../../../assets/album-covers/monsters-cover.png';
import farCover from '../../../assets/album-covers/far-cover.png';
import riqCover from '../../../assets/album-covers/riquisimo-cover.jpeg';
import cynicalCover from '../../../assets/album-covers/cynical-cover.png'

import './MusicItems.css';

const MusicItems = () => {

//Spotify Links 
const spotRiq = 'https://open.spotify.com/track/2ycdnfqQlths50dEitGCZ7?si=U3wY6t3GTM2DuPwLbYaEgQ';
const spotFar = 'https://open.spotify.com/track/66emZup8KqjJZTWPITFrFO?si=EEl66q0XRO-bI8E3c5hHQA';
const spotMonsters = 'https://open.spotify.com/track/4IcrvUaok7uyzkOCF19JFm?si=yxNNWxlvQLK0drlWg94gVA';
const spotCynical = '';
//Embeded Links
const riqEmbeded = 'https://open.spotify.com/embed/track/2ycdnfqQlths50dEitGCZ7'
const farEmbeded = 'https://open.spotify.com/embed/track/66emZup8KqjJZTWPITFrFO';
const monstersEmbeded = 'https://open.spotify.com/embed/track/4IcrvUaok7uyzkOCF19JFm';
const cynicalEmbeded = '';
//Itunes Links
const iRiq = 'https://music.apple.com/mx/album/riqu%C3%ADsimo/1547015670?i=1547015671';
const iFar = 'https://music.apple.com/mx/album/far/1547587437?i=1547587438';
const iMonsters = 'https://music.apple.com/mx/album/monsters/1547595145?i=1547595148';
const iCynical = '';
//Amazon Music Links 
const amzRiq = 'https://music.amazon.com.mx/albums/B08RSLFKVB?trackAsin=B08RSLV2JX';
const amzFar = 'https://music.amazon.com.mx/albums/B08S6PTDP4?trackAsin=B08S6KHKPD';
const amzMonsters = 'https://music.amazon.com.mx/albums/B08S74P8KQ?trackAsin=B08S77YTCW';
const amzCynical = '';

    const musicItemsInfo = [
        {
            songTitle: 'Riquísimo',
            coverImg: riqCover,
            spotifyEmbededURL: riqEmbeded,  
            spotify: spotRiq,
            appMusic: iRiq,
            amzMusic: amzRiq,
            released: true,
        },
        {
            songTitle: 'FAR',
            spotifyEmbededURL: farEmbeded,
            coverImg: farCover,
            spotify: spotFar,
            appMusic: iFar,
            amzMusic: amzFar,
            released: true,
        },
        {
            songTitle: 'Monsters',
            coverImg: monstersCover,
            spotifyEmbededURL: monstersEmbeded,
            spotify: spotMonsters,
            appMusic: iMonsters,
            amzMusic: amzMonsters,
            released: true,
        },
        {
            songTitle: 'Cynical',
            coverImg: cynicalCover,
            spotifyEmbededURL: cynicalEmbeded,
            spotify: spotCynical,
            appMusic: iCynical,
            amzMusic: amzCynical,
            released: false,
        }
    ]
    return (
        <Row className="music-items-container mx-auto d-flex justify-content-center">
            {
                musicItemsInfo.map(item => {
                    return (
                        <MusicItem
                            title={item.songTitle}
                            cover={item.coverImg}
                            embededURL={item.spotifyEmbededURL}
                            spotifyURL={item.spotify}
                            appMusicURL={item.appMusic}
                            amzMusicURL={item.amzMusic}
                            song={item.audio}
                            imgClass={item.coverClass}
                            isReleased={item.released}
                        />
                    );
                })
            }
        </Row>
    )
}

export default MusicItems