const getDay = (dateTxt: string | Date = new Date()) => {
  const dt = new Date(dateTxt)
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return weekDays[dt.getDay()]
}

export { getDay }
