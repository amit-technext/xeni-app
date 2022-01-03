export const Flight = {
  departure: [
    {
      departureAirport: 'EWR',
      departureCity: 'New York',
      departureTime: '01:30',
      departureDate: '29 Aug 2021',
      arrivalAirport: 'EMA',
      arrivalCity: 'United Kingdom',
      arrivalTime: '05:55'
    },
    {
      departureAirport: 'EMA',
      departureCity: 'United Kingdom',
      departureTime: '07:30',
      departureDate: '29 Aug 2021',
      arrivalAirport: 'SFO',
      arrivalCity: 'San Francisco',
      arrivalTime: '12:55'
    }
  ],
  return: [
    {
      departureAirport: 'SFO',
      departureCity: 'San Francisco',
      departureTime: '01:30',
      departureDate: '31 Aug 2021',
      arrivalAirport: 'EMA',
      arrivalCity: 'United Kingdom',
      arrivalTime: '05:55'
    },
    {
      departureAirport: 'EMA',
      departureCity: 'United Kingdom',
      departureTime: '07:30',
      departureDate: '31 Aug 2021',
      arrivalAirport: 'EWR',
      arrivalCity: 'New York',
      arrivalTime: '12:55'
    }
  ]
};

export const Hotel = {
  departure: [
    {
      departureAirport: 'SFO',
      departureCity: 'San Francisco',
      departureTime: '01:30',
      departureDate: '31 Aug 2021',
      arrivalAirport: 'EMA',
      arrivalCity: 'United Kingdom',
      arrivalTime: '05:55'
    },
    {
      departureAirport: 'EMA',
      departureCity: 'United Kingdom',
      departureTime: '07:30',
      departureDate: '31 Aug 2021',
      arrivalAirport: 'EWR',
      arrivalCity: 'New York',
      arrivalTime: '12:55'
    }
  ],
  return: [
    {
      departureAirport: 'EWR',
      departureCity: 'New York',
      departureTime: '01:30',
      departureDate: '29 Aug 2021',
      arrivalAirport: 'EMA',
      arrivalCity: 'United Kingdom',
      arrivalTime: '05:55'
    },
    {
      departureAirport: 'EMA',
      departureCity: 'United Kingdom',
      departureTime: '07:30',
      departureDate: '29 Aug 2021',
      arrivalAirport: 'SFO',
      arrivalCity: 'San Francisco',
      arrivalTime: '12:55'
    }
  ]
};

export const Car = {
  departure: [
    {
      departureAirport: 'EWR',
      departureCity: 'New York',
      departureTime: '01:30',
      departureDate: '29 Aug 2021',
      arrivalAirport: 'EMA',
      arrivalCity: 'United Kingdom',
      arrivalTime: '05:55'
    },
    {
      departureAirport: 'EMA',
      departureCity: 'United Kingdom',
      departureTime: '07:30',
      departureDate: '29 Aug 2021',
      arrivalAirport: 'SFO',
      arrivalCity: 'San Francisco',
      arrivalTime: '12:55'
    }
  ],
  return: [
    {
      departureAirport: 'SFO',
      departureCity: 'San Francisco',
      departureTime: '01:30',
      departureDate: '31 Aug 2021',
      arrivalAirport: 'EMA',
      arrivalCity: 'United Kingdom',
      arrivalTime: '05:55'
    },
    {
      departureAirport: 'EMA',
      departureCity: 'United Kingdom',
      departureTime: '07:30',
      departureDate: '31 Aug 2021',
      arrivalAirport: 'EWR',
      arrivalCity: 'New York',
      arrivalTime: '12:55'
    }
  ]
};

export const passengers = [
  { type: 'Adults', age: '18-64', seatCount: 1 },
  { type: 'Students', age: 'over 18', seatCount: 0 },
  { type: 'Youth', age: '12-17', seatCount: 0 },
  { type: 'Child', age: '2-11', seatCount: 0 },
  { type: 'Toddler in own seat', age: 'under 2', seatCount: 0 },
  { type: 'Infant on lap', age: 'under 2', seatCount: 0 }
];

export const flightOnType = [
  { id: '1', label: 'Commercial', value: 'commercial' },
  { id: '2', label: 'Private Charter', value: 'private_charter' },
  { id: '3', label: 'Helicopters', value: 'helicopters' }
];
