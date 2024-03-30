import React from 'react'
import YoutubeEmbed from '../../../components/Common/YoutubeEmbed'
import videos from '../../../videos.json'
import styles from './Videos.module.css'

const Videos = ({ name, price, image, productKey }) => {
    return (
      <div className={styles['videos-container']}>
          {videos.videos.map(videoId => (
              <div key={videoId} className={styles.video}>
                  <YoutubeEmbed embedId={videoId} />
              </div>
          ))}
      </div>
  )
}

export default Videos
