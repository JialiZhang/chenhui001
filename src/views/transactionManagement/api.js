import { httpFun } from '@/utils/httpFun'

const fetchData = (params = {}) => {
    return httpFun('get', './mock/transaction-management-data.json', params)
}

export default {
    fetchData,
}
