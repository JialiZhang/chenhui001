import { httpFun } from '@/utils/httpFun'

const fetchData = (params = {}) => {
    return httpFun('get', './mock/home-data.json', params)
}

export default {
    fetchData,
}
