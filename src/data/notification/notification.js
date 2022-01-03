// import team1 from 'assets/img/team/1.jpg';
// import team2 from 'assets/img/team/2.jpg';
// import team3 from 'assets/img/team/3.jpg';
// import team4 from 'assets/img/team/4.jpg';
// import team5 from 'assets/img/team/5.jpg';
// import logosHarvard from 'assets/img/logos/harvard.png';
// import team7 from 'assets/img/team/7.jpg';
// import team8 from 'assets/img/team/8.jpg';
// import team9 from 'assets/img/team/9.jpg';
// import team10 from 'assets/img/team/10.jpg';
// import logosOxford from 'assets/img/logos/oxford.png';
// import weather from 'assets/img/icons/weather.jpg';

export const notifications = [
  {
    id: 1,
    avatar: {
      src: 'team1',
      size: 'xl'
    },
    children:
      'Announcing the winners of the <strong>The only book awards</strong> decided by you, the readers. Check out the champions and runners-up in all 21 categories now!',
    time: 'Just Now',
    emoji: '📢',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    to: '#!'
  },
  {
    id: 2,
    avatar: {
      src: 'team2',
      size: 'xl'
    },
    children:
      'Last chance to vote in <strong>The 2018 Falcon Choice Awards</strong>! See what made it to the Final Round and help your favorites take home the win. Voting closes on November 26',
    time: '15m',
    emoji: '🏆',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    unread: true,
    to: '#!'
  },
  {
    id: 3,
    avatar: {
      src: 'team3',
      size: 'xl'
    },
    children:
      '<strong>Jennifer Kent</strong> declared you as a <strong>President</strong> of Computer Science and Engineering Society',
    time: '1h',
    emoji: '📢',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    to: '#!'
  },
  {
    id: 4,
    avatar: {
      src: 'team4',
      size: 'xl'
    },
    children:
      'Congratulate <strong>Woody Allen</strong> for starting a new position as Business Development Manager &amp; Implementation Engineer at <strong>Hewlett Packard Enterprise(HP)</strong>',
    time: '6h',
    emoji: '🎁',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    unread: true,
    to: '#!'
  },
  {
    id: 5,
    avatar: {
      src: 'team5',
      size: 'xl'
    },
    children:
      '<strong>Christopher Nolan</strong> Mentioned you in a comment : "Congratulations! Wishing you a great future. Proud fo you ❤️"',
    time: '8h',
    emoji: '💬',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    unread: true,
    to: '#!'
  }
];

export const activities = [
  {
    id: 1,
    avatar: { emoji: '🔍', size: 'xl' },
    children: `<strong>Anthony Hopkins</strong> Followed <strong>Massachusetts Institute of Technology</strong>`,
    time: 'Just Now',
    to: '#!'
  },
  {
    id: 2,
    avatar: { emoji: '📌', size: 'xl' },
    children: `<strong>Anthony Hopkins</strong> Save a <strong>Life Event</strong>`,
    time: 'Yesterday',
    to: '#!'
  },
  {
    id: 3,
    avatar: { emoji: '🏷️', size: 'xl' },
    children: `<strong>Rowan Atkinson</strong> Tagged <strong>Anthony Hopkins</strong> in a live video`,
    time: 'December 1, 8:00 PM',
    to: '#!'
  },
  {
    id: 4,
    avatar: { emoji: '💬', size: 'xl' },
    children: `<strong>Robert Downey</strong> mention <strong>Anthony Hopkins</strong> in a comment`,
    time: 'November 27, 12:00 AM',
    to: '#!'
  },
  {
    id: 5,
    avatar: { emoji: '😂', size: 'xl' },
    children: `<strong>Anthony Hopkins</strong> reacted to a comment of <strong>Anna Karinina</strong>`,
    time: 'November 20, 8:00 Am',
    to: '#!'
  },
  {
    id: 6,
    avatar: { emoji: '🎁', size: 'xl' },
    children: `<strong>Jennifer Kent</strong> Congratulated <strong>Anthony Hopkins</strong>`,
    time: 'November 13, 5:00 Am',
    to: '#!'
  },
  {
    id: 7,
    avatar: { emoji: '🏷️', size: 'xl' },
    children: `<strong>California Institute of Technology</strong> tagged <strong>Anthony Hopkins</strong> in a post.`,
    time: 'November 8, 5:00 PM',
    to: '#!'
  },
  {
    id: 8,
    avatar: { emoji: '📋️', size: 'xl' },
    children:
      '<strong>Anthony Hopkins</strong> joined <strong>Victory day cultural Program</strong> with <strong>Tony Stark</strong>',
    time: 'November 01, 11:30 AM',
    to: '#!'
  },
  {
    id: 9,
    avatar: { emoji: '📅️', size: 'xl' },
    children:
      '<strong>Massachusetts Institute of Technology</strong> invited <strong>Anthony Hopkin</strong> to an event',
    time: 'October 28, 12:00 PM',
    to: '#!'
  }
];

export const rawNewNotifications = [
  {
    id: 1,
    avatar: {
      src: 'team1',
      size: '2xl'
    },
    children:
      '<strong>Emma Watson</strong> replied to your comment : "Hello world 😍"',
    time: 'Just Now',
    emoji: '💬',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    to: '#!',
    unread: true
  },

  {
    id: 2,
    avatar: {
      name: 'Albert Brooks',
      size: '2xl'
    },
    children:
      "<strong>Albert Brooks</strong> reacted to <strong>Mia Khalifa's</strong> status",
    time: '9hr',
    emoji: '❤️',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    to: '#!',
    unread: true
  }
];

export const rawEarlierNotifications = [
  {
    id: 1,
    avatar: {
      src: 'weather',
      size: '2xl'
    },
    children:
      "The forecast today shows a low of 20&#8451; in California. See today's weather.",
    time: '9hr',
    emoji: '🌤️',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    to: '#!'
  }
];
