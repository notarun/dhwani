export default interface Playable {
  url: string
  title: string
  thumbnail: string
  uploaderName: string
  duration: number
  audioStreams: Array<{url: string, mimeType: string}>
}
