import React, { useEffect, useState } from 'react'
import { fetchCount } from './api.jsx'

const useCountApi = (props) => {
  let { apiSwitch } = props
  const [count, setCount] = useState(0)
  const [loader, setLoader] = useState(false)
  const countApiCall = async () => {
    setLoader(true)
    let res = await fetchCount()
    // console.log('count->', res)
    if (res?.status == 200) {
      setCount(res?.data?.data?.[0]?.count)
    }
    setLoader(false)
  }
  useEffect(() => {
    countApiCall()
  }, [apiSwitch])
  return { count, loader }
}
export default useCountApi
