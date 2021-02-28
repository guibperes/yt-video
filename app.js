const fs = require('fs')
const path = require('path')
const ytdl = require('ytdl-core')

const list = [
  'URL_1',
  'URL_2',
  'URL_N'
]

function logger (message) {
  console.log(`[INFO] ${message}`)
}

async function saveAll (list) {
  for (let i = 0; i < list.length; i++) {
    const url = list[i]

    logger(`Video: ${i + 1}`)
    logger('Fetching video info')

    const info = await ytdl.getBasicInfo(url)
    const videoName = info.videoDetails.title

    logger('Saving video on local folder')

    await ytdl(url).pipe(
      fs.createWriteStream(
        path.resolve(__dirname, `videos/${videoName}.mp4`)
      )
    )
  }
}

saveAll(list)
