import util from '../utils/util'
import config from '../constants/config'

const serverURL = config.SERVER_URL
const request = util.wxPromisify(wx.request)

function getLawTypes() {
  return request({
      url: serverURL + '/get',
      data:{
        "key": "types",
        "type": "qlaw-getLawTypes"
      }});
}

function getLawsByType(typeId) {
  return request({
    url: serverURL + '/get', 
    data: {
      "key": typeId,
      "type": "qlaw-getLawsByType"
    }
  })
}

function getLawsBySearch(searchText) {
  return request({url: serverURL + '/law/list', data: {search: searchText}})
}

function getLawById(id) {
  return request({
    url: serverURL + '/get',
    data: {
      "key": id,
      "type": "qlaw-getLawById"
    }
  })
}

module.exports = {
  getLawTypes: getLawTypes,
  getLawsByType: getLawsByType,
  getLawsBySearch: getLawsBySearch,
  getLawById: getLawById
}