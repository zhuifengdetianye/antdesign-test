import { observable, action } from 'mobx'

export var appState = observable({
    timer: 0
})

appState.resetTimer = action(function reset() {
  appState.timer = 0
})

setInterval(function(){
  appState.timer += 1
}, 1000)

