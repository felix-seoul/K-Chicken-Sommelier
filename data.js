// K-Chicken Sommelier - Data Model

// Taste Tags (15 total)
const TASTE_TAGS = [
  'Crunchy', 'Juicy', 'CleanSalty', 'SweetSpicy', 'Garlic',
  'SoyUmami', 'CheesyCreamy', 'SmokyPepper', 'Saucy', 'LightSauce',
  'NoSauce', 'Value', 'Filling', 'Shareable', 'LowMess'
];

// Quiz Questions
const QUIZ_QUESTIONS = [
  {
    id: 'crunch',
    title: 'How crunchy do you want it?',
    options: [
      { label: 'Ultra crunchy', value: 'Ultra', tags: { Crunchy: 3 } },
      { label: 'Crispy', value: 'Crispy', tags: { Crunchy: 2 } },
      { label: 'Balanced', value: 'Balanced', tags: { Crunchy: 1, Juicy: 1 } },
      { label: 'Soft & juicy', value: 'Juicy', tags: { Juicy: 3 } }
    ]
  },
  {
    id: 'heat',
    title: 'How spicy can you handle today?',
    options: [
      { label: 'No spice', value: 'None', tags: { CleanSalty: 2 } },
      { label: 'Mild', value: 'Mild', tags: { SweetSpicy: 1 } },
      { label: 'Medium', value: 'Medium', tags: { SweetSpicy: 2 } },
      { label: 'Hot', value: 'Hot', tags: { SweetSpicy: 3 } },
      { label: 'Danger', value: 'Danger', tags: { SweetSpicy: 4 } }
    ]
  },
  {
    id: 'mood',
    title: 'What flavor mood are you craving?',
    options: [
      { label: 'Clean & salty', value: 'Clean', tags: { CleanSalty: 3 } },
      { label: 'Sweet & spicy', value: 'SweetSpicy', tags: { SweetSpicy: 3 } },
      { label: 'Garlic & savory', value: 'Garlic', tags: { Garlic: 3 } },
      { label: 'Soy & umami', value: 'Soy', tags: { SoyUmami: 3 } },
      { label: 'Cheesy & creamy', value: 'Cheesy', tags: { CheesyCreamy: 3 } },
      { label: 'Smoky / peppery', value: 'Smoky', tags: { SmokyPepper: 3 } }
    ]
  },
  {
    id: 'sauce',
    title: 'Sauce or no sauce?',
    options: [
      { label: 'No sauce (pure fried)', value: 'NoSauce', tags: { NoSauce: 3, LowMess: 2 } },
      { label: 'Light sauce', value: 'Light', tags: { LightSauce: 3 } },
      { label: 'Saucy', value: 'Saucy', tags: { Saucy: 2 } },
      { label: 'Extra saucy', value: 'Extra', tags: { Saucy: 3 } }
    ]
  },
  {
    id: 'situation',
    title: 'Who are you eating with?',
    options: [
      { label: 'Solo', value: 'Solo', tags: { LowMess: 1 } },
      { label: 'Date', value: 'Date', tags: { LowMess: 2 } },
      { label: 'Friends (2–3)', value: 'Friends', tags: { Shareable: 2 } },
      { label: 'Group (4–6)', value: 'Group', tags: { Shareable: 3, Value: 1 } },
      { label: 'Office / team', value: 'Office', tags: { Shareable: 3, LowMess: 2 } }
    ]
  },
  {
    id: 'goal',
    title: 'What matters most right now?',
    options: [
      { label: 'Best taste match', value: 'Taste', tags: {} },
      { label: 'Best value', value: 'Value', tags: { Value: 3 } },
      { label: 'Most filling', value: 'Filling', tags: { Filling: 3 } },
      { label: 'Most shareable', value: 'Shareable', tags: { Shareable: 3 } },
      { label: 'Least messy', value: 'LowMess', tags: { LowMess: 3 } }
    ]
  }
];

// MVP Menu Items (3 starter items)
const MENU_ITEMS = [
  {
    id: 1,
    name: 'Ultra Crunch Wings',
    brand: 'BHC Chicken',
    badge: 'Top Pick',
    image: null,
    tags: {
      Crunchy: 4, Juicy: 1, CleanSalty: 2, Garlic: 2,
      NoSauce: 2, LightSauce: 1, LowMess: 2, Filling: 2
    },
    crunchLevel: 5,
    heatLevel: 1,
    sauceLevel: 1,
    reasons: [
      'Crispy-first bites with maximum crunch.',
      'Clean finish for mess-free eating.',
      'Perfect for crunch lovers who want pure fried flavor.'
    ]
  },
  {
    id: 2,
    name: 'Soy Garlic Classic',
    brand: 'Kyochon',
    badge: 'Low Mess',
    image: null,
    tags: {
      Crunchy: 2, Juicy: 2, SoyUmami: 4, Garlic: 3,
      LightSauce: 3, LowMess: 3, Shareable: 2
    },
    crunchLevel: 3,
    heatLevel: 0,
    sauceLevel: 2,
    reasons: [
      'Sauce level matches your mess tolerance.',
      'Soy & garlic umami for savory cravings.',
      'Clean finish that won\'t wreck your shirt.'
    ]
  },
  {
    id: 3,
    name: 'Half & Half Set',
    brand: 'BBQ Chicken',
    badge: 'Best Value',
    image: null,
    tags: {
      Crunchy: 2, Juicy: 2, SweetSpicy: 2, SoyUmami: 2,
      Saucy: 2, Value: 4, Filling: 3, Shareable: 4
    },
    crunchLevel: 3,
    heatLevel: 2,
    sauceLevel: 3,
    reasons: [
      'Perfect for your situation: quick and shareable.',
      'Best value for groups who can\'t decide.',
      'Two flavors, one order, no drama.'
    ]
  },
  {
    id: 4,
    name: 'Honey Butter Wings',
    brand: 'Nene Chicken',
    badge: 'New',
    image: null,
    tags: {
      Crunchy: 3, Juicy: 2, SweetSpicy: 1, CheesyCreamy: 2,
      LightSauce: 2, Shareable: 2
    },
    crunchLevel: 4,
    heatLevel: 0,
    sauceLevel: 2,
    reasons: [
      'Sweet and buttery for dessert-like cravings.',
      'Crispy coating with creamy finish.',
      'Great for those who skip the spice.'
    ]
  },
  {
    id: 5,
    name: 'Hot Pepper Blazer',
    brand: 'Pelicana',
    badge: 'Spicy',
    image: null,
    tags: {
      Crunchy: 2, Juicy: 3, SweetSpicy: 4, SmokyPepper: 3,
      Saucy: 3, Filling: 2
    },
    crunchLevel: 2,
    heatLevel: 5,
    sauceLevel: 4,
    reasons: [
      'Maximum heat for danger seekers.',
      'Smoky pepper kick that builds.',
      'Juicy bites that pack a punch.'
    ]
  }
];

// Badge types for styling
const BADGE_TYPES = ['Top Pick', 'Best Value', 'Low Mess', 'Spicy-safe', 'New', 'Spicy'];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TASTE_TAGS, QUIZ_QUESTIONS, MENU_ITEMS, BADGE_TYPES };
}
