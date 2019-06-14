const fs = require('fs')
const path = require('path')
const ytdl = require('ytdl-core')

const URL = 'https://www.youtube.com/watch?v=BaDrwNYuaOE'
const VIDEO_NAME = 'aula4.mp4'

console.log('Fetching video...')

ytdl(URL)
  .pipe(fs.createWriteStream(path.resolve(__dirname, '..', `videos/${VIDEO_NAME}`)))
