const rides = [
  {
    id: 1,
    title: 'Lunch time loop',
    distance: '20.3'
  },
  {
    id: 2,
    title: 'Sunday Spin',
    distance: '80.91'
  },
  {
    id: 3,
    title: 'Cool down',
    distance: '10.17'
  },
  {
    id: 4,
    title: 'Crit Race',
    distance: '25.89'
  },
  {
    id: 5,
    title: 'Epic climb with Dave',
    distance: '17.07'
  }
];

exports.list = (req, res) => {
  res.json(rides);
};
