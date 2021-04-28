import { useQuery } from 'react-query'

import apiClient from '../util/apiClient'

const defaultCacheTime = 900000

const useTeacherCourses = (options = {}) => {
  const queryKey = 'teacherCourses'

  const queryFn = async () => {
    const { data } = await apiClient.get('/course-units/responsible')

    return data
  }

  const { data: courseUnits, ...rest } = useQuery(queryKey, queryFn, {
    cacheTime: defaultCacheTime,
    staleTime: defaultCacheTime,
    ...options,
  })

  return { courseUnits, ...rest }
}

export default useTeacherCourses
