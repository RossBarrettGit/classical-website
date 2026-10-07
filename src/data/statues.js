// All photographs are public domain, via Wikimedia Commons.
export const featured = [
  {
    id: 'venus',
    numeral: 'I',
    name: 'Venus de Milo',
    culture: 'Hellenistic Greek',
    date: 'c. 150–125 BC',
    material: 'Parian marble',
    location: 'Musée du Louvre, Paris',
    image: '/images/venus.jpg',
    text: 'Found in pieces on the island of Milos in 1820, she has never had arms in living memory — and somehow needs none. The twist of the body carries every gesture the missing hands might have made.',
  },
  {
    id: 'augustus',
    numeral: 'II',
    name: 'Augustus of Prima Porta',
    culture: 'Roman',
    date: '1st century AD',
    material: 'Marble, once painted',
    location: 'Vatican Museums, Rome',
    image: '/images/augustus.jpg',
    text: 'The first emperor addresses his troops, barefoot like a hero of myth. Every detail of the breastplate is an argument for peace — and for the man who claimed to have made it.',
  },
]

export const procession = [
  {
    id: 'laocoon',
    name: 'Laocoön and His Sons',
    date: 'c. 40–30 BC',
    location: 'Vatican Museums',
    image: '/images/laocoon.jpg',
  },
  {
    id: 'apollo',
    name: 'Apollo Belvedere',
    date: 'c. AD 120–140',
    location: 'Vatican Museums',
    image: '/images/apollo.jpg',
  },
  {
    id: 'marcus',
    name: 'Marcus Aurelius',
    date: 'c. AD 161–180',
    location: 'Glyptothek, Munich',
    image: '/images/marcus-aurelius.jpg',
  },
]

const commons = (file) => `https://commons.wikimedia.org/wiki/File:${file}`

export const credits = [
  ['Winged Victory of Samothrace', commons('Nike_of_Samothrake_Louvre_Ma2369_n4.jpg')],
  ['Venus de Milo', commons('Venus_de_Milo_Louvre_Ma399_n4.jpg')],
  ['Augustus of Prima Porta', commons('Statue-Augustus.jpg')],
  ['Laocoön and His Sons', commons('Laocoon_Pio-Clementino_Inv1059-1064-1067.jpg')],
  ['Apollo Belvedere', commons('Belvedere_Apollo_Pio-Clementino_Inv1015.jpg')],
  ['Marcus Aurelius', commons('Marcus_Aurelius_Glyptothek_Munich.jpg')],
  ['The Dying Gaul', commons('Dying_Gaul_Musei_Capitolini_MC747.jpg')],
]
