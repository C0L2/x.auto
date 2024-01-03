import { useSearchParams } from 'react-router-dom'

const useUrlDateInterval = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const formatDate = (date: Date | undefined): string | undefined => {
    return date
      ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        '0',
      )}-${String(date.getDate()).padStart(2, '0')}`
      : undefined
  }

  const parseDate = (dateStr: string | null): Date | undefined => {
    if (dateStr) {
      const [year, month, day] = dateStr
        .split('-')
        .map((num) => parseInt(num, 10))
      return new Date(year, month - 1, day)
    }
    return undefined
  }

  const getDate = (param: 'dateFrom' | 'dateTo'): Date | undefined => {
    return parseDate(searchParams.get(param))
  }

  const dateFrom = getDate('dateFrom')
  const dateTo = getDate('dateTo')

  const updateDateParam = (
    param: 'dateFrom' | 'dateTo',
    date: Date | undefined,
  ): void => {
    const formattedDate = formatDate(date)
    if (formattedDate) {
      searchParams.set(param, formattedDate)
    } else {
      searchParams.delete(param)
    }
    setSearchParams(searchParams)
  }

  return { dateFrom, dateTo, updateDateParam }
}

export default useUrlDateInterval
