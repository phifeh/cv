const jobs = [{
  company: 'Chatlayer',
  startDate: new Date('2018-06-20'),
  endDate: new Date('2022-05-10')
}]
export default (req, res) => {
  res.status(200).json(jobs)
}
