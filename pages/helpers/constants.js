const storiesR = [
  {
    title: 'Winter is nolonger here',
    body: "'There was a time,' she said, her eyes filled of melancholy.",
    meta: {
      author: 'dmithamo',
      publishedOn: 'Tue, 20th June 2018',
    },
  },
  {
    title: 'There was no room',
    body: 'But there was no room for Him in the world He came to save',
    meta: {
      author: 'dmithamo',
      publishedOn: 'Tue, 20th June 2018',
    },
  },
  {
    title: 'When I became a man',
    body: 'When I was a boy ... But when I became a man',
    meta: {
      author: 'dmithamo',
      publishedOn: 'Tue, 20th June 2018',
    },
  },
  {
    title: 'Master an ten',
    body:
      "'And which one of you was a master at ten?' He bellows, doing little to hide his displeasure at their scorn.",
    meta: {
      author: 'dmithamo',
      publishedOn: 'Tue, 20th June 2018',
    },
  },
];

const stories = storiesR.map(story => ({
  slug: story.title.toLowerCase().replace(/ /g, '-'),
  ...story,
}));

export default stories;
