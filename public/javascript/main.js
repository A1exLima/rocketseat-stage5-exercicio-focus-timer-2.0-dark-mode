import { querySelect } from "./querySelect.js"
import { controlButtons } from "./controlButton.js"
import { projectLogic} from "./projectLogic.js"
import { audioData } from "./audio.js"
import { screenMode } from "./screenMode.js"
import { controlVolume } from "./controlVolume.js"


export const startupControl = {
  buttonPlay(event) {
    event.preventDefault(event)
    audioData.buttonPressAudio.play()
    projectLogic.setTimerAndPlay()
  },

  buttonPause(event) {
    event.preventDefault(event)
    audioData.buttonPressAudio.play()
    controlButtons.pause()
    projectLogic.clearTimeout()
    projectLogic.resetIdTimerOut()
  },

  buttonStop(event) {
    event.preventDefault(event)
    audioData.buttonPressAudio.play()
    controlButtons.pause()
    projectLogic.StopDisplayTimer()
    projectLogic.resetIdTimerOut()
  },

  buttonEncrement(event) {
    event.preventDefault(event)
    audioData.buttonPressAudio.play()
    projectLogic.setEncrement()
    projectLogic.removeAlertContainerDisplay()
  },

  buttonDecrement(event) {
    event.preventDefault(event)
    audioData.buttonPressAudio.play()
    projectLogic.setDecrement()
    projectLogic.removeAlertContainerDisplay()
  },

  buttonLofiTree(event) {
    event.preventDefault(event)
    projectLogic.hideTree()
    projectLogic.pauseContentHideTree()
    controlButtons.lofiTree()
    audioData.buttonPressAudio.play()
  },

  buttonLofiCloud(event) {
    event.preventDefault(event)
    projectLogic.hideCloud()
    projectLogic.pauseContentHideCloud()
    controlButtons.LofiCloud()
    audioData.buttonPressAudio.play()
  },

  buttonLofiCoffe(event) {
    event.preventDefault(event)
    projectLogic.hideCoffe()
    projectLogic.pauseContentHideCoffe()
    controlButtons.LofiCoffe()
    audioData.buttonPressAudio.play()
  },

  buttonLofiFire(event) {
    event.preventDefault(event)
    projectLogic.hideFire()
    projectLogic.pauseContentHideFire()
    controlButtons.LofiFire()
    audioData.buttonPressAudio.play()
  },

  buttonScreenModeWhiteToBlack(event) {
    event.preventDefault(event)
    controlButtons.screenModeWhite()
    screenMode.backgroundWhiteToBlack()
    console.log("Branco para Preto")
  },

  buttonScreenModeBlackToWhite(event) {
    event.preventDefault(event)
    controlButtons.screenModeBlack()
    screenMode.backgroundBlackToWhite()
    console.log("Preto para Branco")
  },

  controlVolumeTree(event) {
    event.preventDefault(event)
    controlVolume.controlVolTree()
  },

  controlVolumeCloud(event) {
    event.preventDefault(event)
    controlVolume.controlVolCloud()
  },

  controlVolumeCoffe(event) {
    event.preventDefault(event)
    controlVolume.controlVolCoffe()
  },

  controlVolumeFire(event) {
    event.preventDefault(event)
    controlVolume.controlVolFire()
  },
}

querySelect.buttonPlay.addEventListener("click", startupControl.buttonPlay)
querySelect.buttonPause.addEventListener("click", startupControl.buttonPause)
querySelect.buttonStop.addEventListener("click", startupControl.buttonStop)
querySelect.buttonEncrement.addEventListener("click",startupControl.buttonEncrement)
querySelect.buttonDecrement.addEventListener("click",startupControl.buttonDecrement)

querySelect.buttonLofiTree.addEventListener("click",startupControl.buttonLofiTree)
querySelect.buttonLofiCloud.addEventListener("click",startupControl.buttonLofiCloud)
querySelect.buttonLofiCoffe.addEventListener("click",startupControl.buttonLofiCoffe)
querySelect.buttonLofiFire.addEventListener("click",startupControl.buttonLofiFire)

querySelect.screenModeWhiteToBlack.addEventListener("click", startupControl.buttonScreenModeWhiteToBlack)
querySelect.screenModeBlackToWhite.addEventListener("click", startupControl.buttonScreenModeBlackToWhite)

querySelect.controlVolTree.addEventListener("input", startupControl.controlVolumeTree)
querySelect.controlVolCloud.addEventListener("input", startupControl.controlVolumeCloud)
querySelect.controlVolCoffe.addEventListener("input", startupControl.controlVolumeCoffe)
querySelect.controlVolFire.addEventListener("input", startupControl.controlVolumeFire)