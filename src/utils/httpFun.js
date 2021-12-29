import http from '@/lib/http'

export const httpFun = (method, url, params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const rst = await http({
        method,
        url,
        params,
      })
      if (rst.code === 200) {
        resolve(rst.data)
      } else {
        reject(rst.message)
      }
    } catch (err) {
      reject(err)
    }
  })
}
