const sandwiches = ['ham', 'blt', 'veg'] as const;

type Sandwich = typeof sandwiches[number];


const sandwich1: Sandwich = 'ham';
const sandwich2: Sandwich = 'blt';
const sandwich3: Sandwich = 'veg';