const fs = require('fs')
const path = require('path')
const ytdl = require('ytdl-core')

const URL = 'VIDEO_URL'
const VIDEO_NAME = 'VIDEO_NAME.mp4'

console.log('Fetching video...')

ytdl(URL).pipe(
  fs.createWriteStream(
    path.resolve(__dirname, `videos/${VIDEO_NAME}`)
  )
)
