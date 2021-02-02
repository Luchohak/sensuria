import React from 'react';
import {Row} from 'react-bootstrap';
import MusicItem from './MusicItem/MusicItem';

import monstersCover from '../../../assets/album-covers/monsters-cover.png';
import farCover from '../../../assets/album-covers/far-cover.png';
import riqCover from '../../../assets/album-covers/riquisimo-cover.jpeg';
import cynicalCover from '../../../assets/album-covers/cynical-cover.png'

import './MusicItems.css';

const MusicItems = () => {
    const musicItemsInfo = [
        {
            songTitle: 'Riquísimo',
            coverImg: riqCover,
            spotify: '',
            appMusic: '',
            amzMusic: '',
            audio: '',
            coverClass: ''
        },
        {
            songTitle: 'FAR',
            coverImg: farCover,
            spotify: '',
            appMusic: '',
            amzMusic: '',
            audio: '',
            coverClass: ''
        },
        {
            songTitle: 'Monsters',
            coverImg: monstersCover,
            spotify: '',
            appMusic: '',
            amzMusic: '',
            audio: '',
            coverClass: ''
        },
        {
            songTitle: 'Cynical',
            coverImg: cynicalCover,
            spotify: '',
            appMusic: '',
            amzMusic: '',
            audio: '',
            coverClass: ''
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
                            spotifyURL={item.spotify}
                            appMusicURL={item.appMusic}
                            amzMusicURL={item.amzMusicURL}
                            song={item.audio}
                            imgClass={item.coverClass}
                        />
                    );
                })
            }
        </Row>
    )
}

export default MusicItems