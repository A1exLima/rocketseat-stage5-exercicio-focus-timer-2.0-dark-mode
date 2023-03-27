import { querySelect } from "./querySelect.js"
import { audioData } from "./audio.js"
import { controlButtons } from "./controlButton.js"

let IdTimerOut
let minutes
let seconds
let displayMinute
let displaySecond

export const projectLogic = {
  verificationHideButtonLoFi() {
    let containsTree = querySelect.containsTree.classList.contains("hide")
    let containsCloud = querySelect.containsCloud.classList.contains("hide")
    let containsCoffe = querySelect.containsCoffe.classList.contains("hide")
    let containsFire = querySelect.containsFire.classList.contains("hide")

    let checkForHide =
      containsTree || containsCloud || containsCoffe || containsFire

    return checkForHide
  },

  hideTree() {
    let checkForHide = projectLogic.verificationHideButtonLoFi

    if (checkForHide) {
      querySelect.containsCloud.classList.remove("hide")
      querySelect.containsCloud2.classList.add("hide")
      querySelect.containsCoffe.classList.remove("hide")
      querySelect.containsCoffe2.classList.add("hide")
      querySelect.containsFire.classList.remove("hide")
      querySelect.containsFire2.classList.add("hide")

      // audio Play
      projectLogic.resetAudio()
      audioData.lofiAudioTree.play()
      audioData.lofiAudioTree.loop = true
      audioData.lofiAudioCloud.pause()
      audioData.lofiAudioCoffe.pause()
      audioData.lofiAudioFire.pause()

      //style Input Tree
      querySelect.controlVolTree.classList.toggle("control-volume-white")
      querySelect.controlVolCloud.classList.remove("control-volume-white")
      querySelect.controlVolCoffe.classList.remove("control-volume-white")
      querySelect.controlVolFire.classList.remove("control-volume-white")
    }
  },

  hideCloud() {
    let checkForCloud = projectLogic.verificationHideButtonLoFi

    if (checkForCloud) {
      querySelect.containsTree.classList.remove("hide")
      querySelect.containsTree2.classList.add("hide")
      querySelect.containsCoffe.classList.remove("hide")
      querySelect.containsCoffe2.classList.add("hide")
      querySelect.containsFire.classList.remove("hide")
      querySelect.containsFire2.classList.add("hide")

      // audio Play

      projectLogic.resetAudio()
      audioData.lofiAudioCloud.play()
      audioData.lofiAudioCloud.loop = true
      audioData.lofiAudioTree.pause()
      audioData.lofiAudioCoffe.pause()
      audioData.lofiAudioFire.pause()

      //style Input Cloud
      querySelect.controlVolCloud.classList.toggle("control-volume-white")
      querySelect.controlVolTree.classList.remove("control-volume-white")
      querySelect.controlVolCoffe.classList.remove("control-volume-white")
      querySelect.controlVolFire.classList.remove("control-volume-white")
    }
  },

  hideCoffe() {
    let checkForCoffe = projectLogic.verificationHideButtonLoFi

    if (checkForCoffe) {
      querySelect.containsTree.classList.remove("hide")
      querySelect.containsTree2.classList.add("hide")
      querySelect.containsCloud.classList.remove("hide")
      querySelect.containsCloud2.classList.add("hide")
      querySelect.containsFire.classList.remove("hide")
      querySelect.containsFire2.classList.add("hide")

      // audio Play

      projectLogic.resetAudio()
      audioData.lofiAudioCoffe.play()
      audioData.lofiAudioCoffe.loop = true
      audioData.lofiAudioCloud.pause()
      audioData.lofiAudioTree.pause()
      audioData.lofiAudioFire.pause()

      //style Input Coffe
      querySelect.controlVolCoffe.classList.toggle("control-volume-white")
      querySelect.controlVolCloud.classList.remove("control-volume-white")
      querySelect.controlVolTree.classList.remove("control-volume-white")
      querySelect.controlVolFire.classList.remove("control-volume-white")
    }
  },

  hideFire() {
    let checkForFire = projectLogic.verificationHideButtonLoFi

    if (checkForFire) {
      querySelect.containsTree.classList.remove("hide")
      querySelect.containsTree2.classList.add("hide")
      querySelect.containsCloud.classList.remove("hide")
      querySelect.containsCloud2.classList.add("hide")
      querySelect.containsCoffe.classList.remove("hide")
      querySelect.containsCoffe2.classList.add("hide")

      // audio Play

      projectLogic.resetAudio()
      audioData.lofiAudioFire.play()
      audioData.lofiAudioFire.loop = true
      audioData.lofiAudioCoffe.pause()
      audioData.lofiAudioCloud.pause()
      audioData.lofiAudioTree.pause()

      //style Input Fire
      querySelect.controlVolFire.classList.toggle("control-volume-white")
      querySelect.controlVolCoffe.classList.remove("control-volume-white")
      querySelect.controlVolCloud.classList.remove("control-volume-white")
      querySelect.controlVolTree.classList.remove("control-volume-white")
    }
  },

  resetAudio() {
    audioData.lofiAudioTree.volume = 0.5
    querySelect.controlVolTree.value = 0.5
    audioData.lofiAudioCloud.volume = 0.5
    querySelect.controlVolCloud.value = 0.5
    audioData.lofiAudioCoffe.volume = 0.5
    querySelect.controlVolCoffe.value = 0.5
    audioData.lofiAudioFire.volume = 0.5
    querySelect.controlVolFire.value = 0.5
  },

  pauseContentHideTree() {
    let containsTree = querySelect.containsTree.classList.contains("hide")

    if (containsTree) {
      audioData.lofiAudioTree.pause()
    }
  },

  pauseContentHideCloud() {
    let containsCloud = querySelect.containsCloud.classList.contains("hide")

    if (containsCloud) {
      audioData.lofiAudioCloud.pause()
    }
  },

  pauseContentHideCoffe() {
    let containsCoffe = querySelect.containsCoffe.classList.contains("hide")

    if (containsCoffe) {
      audioData.lofiAudioCoffe.pause()
    }
  },

  pauseContentHideFire() {
    let containsFire = querySelect.containsFire.classList.contains("hide")

    if (containsFire) {
      audioData.lofiAudioFire.pause()
    }
  },

  countDown() {
    IdTimerOut = setTimeout(function () {
      minutes = querySelect.displayMinute.textContent
      seconds = querySelect.displaySecond.textContent

      if (seconds <= 0) {
        seconds = 60
        querySelect.displayMinute.textContent = String(--minutes).padStart(
          2,
          "0"
        )
      }

      querySelect.displaySecond.textContent = String(--seconds).padStart(2, "0")

      if (minutes == 0 && seconds == 0) {
        projectLogic.clearTimeout(IdTimerOut)
        controlButtons.pause()
        audioData.kitchenTimer.play()
        IdTimerOut = 0
        return
      }

      projectLogic.countDown()
    }, 10)
  },

  clearTimeout() {
    clearTimeout(IdTimerOut)
  },

  StopDisplayTimer() {
    projectLogic.clearTimeout()
    querySelect.displaySecond.textContent = String(displaySecond).padStart(
      2,
      "0"
    )
    querySelect.displayMinute.textContent = String(displayMinute).padStart(
      2,
      "0"
    )
  },

  setTimerAndPlay() {
    minutes = querySelect.displayMinute.textContent
    seconds = querySelect.displaySecond.textContent

    let minAndSecReset = minutes == 0 && seconds == 0

    if (minAndSecReset) {
      querySelect.containerAlertMinSec.classList.add("hide-alert")
    } else {
      projectLogic.countDown()
      controlButtons.play()
      projectLogic.removeAlertContainerDisplay()
    }
  },

  removeAlertContainerDisplay() {
    querySelect.containerAlertMinSec.classList.remove("hide-alert")
  },

  setEncrement() {
    if (IdTimerOut > 0) {
      return
    }

    projectLogic.EncrementverificationPauseDisplayMinute()

    minutes = querySelect.displayMinute.textContent

    querySelect.displayMinute.textContent = String(
      Number(minutes) + 5
    ).padStart(2, "0")

    if (minutes >= 95) {
      querySelect.displayMinute.textContent = String(Number(0)).padStart(2, "0")
      querySelect.displaySecond.textContent = String(Number(0)).padStart(2, "0")
    }

    displayMinute = querySelect.displayMinute.textContent
    displaySecond = querySelect.displaySecond.textContent
  },

  setDecrement() {
    if (IdTimerOut > 0) {
      return
    }

    projectLogic.DecrementverificationPauseDisplayMinutesAndSeconds()

    minutes = querySelect.displayMinute.textContent

    querySelect.displayMinute.textContent = String(
      Number(minutes) - 5
    ).padStart(2, "0")

    if (minutes <= 0) {
      querySelect.displayMinute.textContent = String(Number(95)).padStart(
        2,
        "0"
      )
    }

    displayMinute = querySelect.displayMinute.textContent
    displaySecond = querySelect.displaySecond.textContent
  },

  EncrementverificationPauseDisplayMinute() {
    minutes = querySelect.displayMinute.textContent

    minutes = Array.from(minutes).pop()

    if (minutes != 0 && minutes != 5) {
      if (minutes >= 1 && minutes <= 4) {
        minutes = Array.from(querySelect.displayMinute.textContent).shift()
        querySelect.displayMinute.textContent = String(minutes + 0).padStart(
          2,
          "0"
        )
      }

      if (minutes >= 6 && minutes <= 9) {
        minutes = Array.from(querySelect.displayMinute.textContent).shift()
        querySelect.displayMinute.textContent = String(minutes + 5).padStart(
          2,
          "0"
        )
      }
    }
  },

  DecrementverificationPauseDisplayMinutesAndSeconds() {
    minutes = querySelect.displayMinute.textContent

    minutes = Array.from(minutes).pop()

    if (minutes != 0 && minutes != 5) {
      if (minutes >= 1 && minutes <= 4) {
        minutes = Array.from(querySelect.displayMinute.textContent).shift()
        querySelect.displayMinute.textContent = String(minutes + 5).padStart(
          2,
          "0"
        )
      }

      if (minutes >= 6 && minutes <= 9) {
        minutes = Array.from(querySelect.displayMinute.textContent).shift()
        Number(minutes++)
        querySelect.displayMinute.textContent = (String(minutes) + 0).padStart(
          2,
          "0"
        )
      }
    }
  },

  resetIdTimerOut() {
    IdTimerOut = 0
  },
}
