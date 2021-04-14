const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    image: 'oceans8_img.jpg',
    date: "2018",
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    image: 'midnightsun_img.jpg',
    date: "2018",
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    image: 'lesindestructibles2_img.jpg',
    date: "2018",
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    image: 'sansunbruit_img.jpg',
    date: "2018",
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    image: 'creed2_img.jpg',
    date: "2018",
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    image: 'pulpfiction_img.jpg',
    date: "1994",
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    image: 'pulpfiction_img.jpg',
    date: "1994",
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    image: 'seven_img.jpg',
    date: "1994",
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    image: 'inception_img.jpg',
    date: "2010",
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    image: 'gonegirl_img.jpg',
    date: "2014",
    likes: 22,
    dislikes: 12
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))