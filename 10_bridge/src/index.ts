import IPlatform from './platforms/IPlatform'
import Live from './transmissions/Live'
import AdvancedLive from './transmissions/AdvancedLive'
import YouTube from './platforms/YouTube'
import Twitch from './platforms/Twitch'
import FacebookLive from './platforms/FacebookLive'

function startLive(platform: IPlatform) {
    console.log('Aguarde...')

    const live = new Live(platform)

    live.broadcasting()
    live.result()
}

function startAdvancedLive(platform: IPlatform) {
    console.log('Aguarde...')

    const live = new AdvancedLive(platform)

    live.broadcasting()
    live.result()
    live.comments()
    live.subtitles()
}

// startAdvanced(new YouTube())
// startAdvanced(new Twitch())
// startAdvanced(new FacebookLive())

startAdvancedLive(new YouTube())
startAdvancedLive(new Twitch())
startAdvancedLive(new FacebookLive())