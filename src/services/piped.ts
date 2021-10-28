import Playable from '../interfaces/playable'

export default (url: string) => {
  let instance: string

  try { instance = (new URL(url)).href }
  catch (e) { throw e }

  const search = async (query: string) =>
    (await (await fetch(`${instance}search?q=${query}&filter=all`)).json()) as {
      items: Playable,
      nextpage: string,
    }

  const streams = async (videoId: string) =>
    await (await fetch(`${instance}streams/${videoId}`)).json()

  return {
    instance,
    search,
    streams,
  }
}
