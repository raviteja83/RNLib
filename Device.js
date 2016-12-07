'use strict'

import { Dimensions, Platform } from 'react-native'

class Device { }

Object.defineProperties(Device, {
  width: {
    get: () => Dimensions.get('window').width
  },

  height: {
    get: () => Dimensions.get('window').height
  },

  platform: {
    get: () => Platform
  }
})

export default Device
