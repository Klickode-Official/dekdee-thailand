export interface School {
  id: string
  name: string
  slug: string
  location: string
  city: string
  coordinates: {
    lat: number
    lng: number
  }
  curriculum: string[]
  fees: {
    min: number
    max: number
    currency: string
  }
  rating: number
  reviewCount: number
  image: string
  description: string
  facilities: string[]
  featured: boolean
  promoted: boolean
  type: 'international' | 'private' | 'islamic' | 'public'
  students: number
  established: number
  admissionOpen: boolean
  website?: string
  contactPhone?: string
  languages?: string[]
  classSize?: number
  studentTeacherRatio?: string
  accreditations?: string[]
  extracurriculars?: string[]
  transportation?: boolean
}

export interface Review {
  id: string
  schoolId: string
  author: string
  rating: number
  date: string
  title: string
  content: string
  helpful: number
  avatar?: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  category: string
  readTime: number
}

export const locations = [
  'Bangkok',
  'Phuket',
  'Chiang Mai',
  'Pattaya',
  'Hua Hin',
  'Koh Samui',
  'Khon Kaen',
  'Nakhon Ratchasima',
]

export const curriculums = [
  'Thai National',
  'International (British)',
  'International (American)',
  'IB (International Baccalaureate)',
  'Islamic',
  'Bilingual',
  'Montessori',
  'Cambridge',
]

export const budgetRanges = [
  { label: 'Under 100,000 THB', min: 0, max: 100000 },
  { label: '100,000 - 300,000 THB', min: 100000, max: 300000 },
  { label: '300,000 - 500,000 THB', min: 300000, max: 500000 },
  { label: '500,000 - 800,000 THB', min: 500000, max: 800000 },
  { label: 'Above 800,000 THB', min: 800000, max: Infinity },
]

export const schools: School[] = [
  {
    id: '1',
    name: 'NIST International School',
    slug: 'nist-international-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7431, lng: 100.5594 },
    curriculum: ['IB (International Baccalaureate)'],
    fees: { min: 567000, max: 1020000, currency: 'THB' },
    rating: 4.9,
    reviewCount: 312,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    description: 'Top IB school in the heart of Bangkok. Non-profit foundation offering PYP, MYP, and DP.',
    facilities: ['Olympic Pool', 'Sports Complex', 'Science Labs', 'Arts Center', 'Library'],
    featured: true,
    promoted: true,
    type: 'international',
    students: 1800,
    established: 1992,
    admissionOpen: true,
    website: 'https://www.nist.ac.th',
    contactPhone: '+66 2 017 5888',
    languages: ['English', 'Thai', 'Mandarin', 'French', 'Spanish', 'German'],
    classSize: 20,
    studentTeacherRatio: '8:1',
    accreditations: ['CIS', 'NEASC', 'IB World School'],
    extracurriculars: ['Model UN', 'Robotics', 'Debate', 'Swimming', 'Orchestra'],
    transportation: true,
  },
  {
    id: '2',
    name: 'International School Bangkok (ISB)',
    slug: 'international-school-bangkok',
    location: 'Nonthaburi, Thailand',
    city: 'Nonthaburi',
    coordinates: { lat: 13.8860, lng: 100.5283 },
    curriculum: ['International (American)', 'IB (International Baccalaureate)'],
    fees: { min: 650000, max: 1100000, currency: 'THB' },
    rating: 4.8,
    reviewCount: 289,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    description: 'Oldest international school in Thailand. Offers a premier American and IB curriculum in a family-friendly community.',
    facilities: ['Olympic Pool', 'Football Field', 'Tennis Courts', 'Theater', 'Library', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'international',
    students: 1900,
    established: 1951,
    admissionOpen: true,
    website: 'https://www.isb.ac.th',
    contactPhone: '+66 2 963 5800',
    languages: ['English', 'Thai', 'Spanish', 'Mandarin', 'French'],
    classSize: 21,
    studentTeacherRatio: '7:1',
    accreditations: ['WASC', 'IB World School', 'CIS'],
    extracurriculars: ['Robotics', 'Varsity Sports', 'Theater', 'Habitat for Humanity'],
    transportation: true,
  },
  {
    id: '3',
    name: 'KIS International School',
    slug: 'kis-international-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7661, lng: 100.5960 },
    curriculum: ['IB (International Baccalaureate)'],
    fees: { min: 500000, max: 700000, currency: 'THB' },
    rating: 4.7,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'Full IB continuum school known for strong academics and a close-knit community.',
    facilities: ['Swimming Pool', 'Sports Fields', 'Science Labs', 'Library', 'Music Academy'],
    featured: true,
    promoted: false,
    type: 'international',
    students: 800,
    established: 1998,
    admissionOpen: true,
    website: 'https://www.kis.ac.th',
    contactPhone: '+66 2 274 3444',
    languages: ['English', 'Thai', 'Mandarin', 'Spanish'],
    classSize: 18,
    studentTeacherRatio: '8:1',
    accreditations: ['CIS', 'IB World School'],
    extracurriculars: ['Arts', 'Music', 'Swimming', 'Coding'],
    transportation: true,
  },
  {
    id: '4',
    name: 'VERSO International School',
    slug: 'verso-international-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.6520, lng: 100.7300 },
    curriculum: ['International (American)'],
    fees: { min: 600000, max: 900000, currency: 'THB' },
    rating: 4.8,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
    description: 'A modern, future-ready campus designed by IDEO. Focuses on project-based learning and American curriculum.',
    facilities: ['Indoor Stadium', 'Olympic Pool', 'Makerspaces', 'Co-working spaces', 'Gym'],
    featured: false,
    promoted: true,
    type: 'international',
    students: 237,
    established: 2020,
    admissionOpen: true,
    website: 'https://www.verso.ac.th',
    contactPhone: '+66 2 080 4000',
    languages: ['English', 'Thai', 'Mandarin'],
    classSize: 15,
    studentTeacherRatio: '6:1',
    accreditations: ['WASC'],
    extracurriculars: ['Design Thinking', 'Esports', 'Makerspace', 'Swimming'],
    transportation: true,
  },
  {
    id: '5',
    name: 'Garden International School Bangkok',
    slug: 'garden-international-school-bangkok',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7170, lng: 100.5360 },
    curriculum: ['International (British)'],
    fees: { min: 400000, max: 600000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Boutique British curriculum school offering a personalized learning approach.',
    facilities: ['Swimming Pool', 'Library', 'Computer Lab', 'Sports Field', 'Cafeteria'],
    featured: false,
    promoted: false,
    type: 'international',
    students: 390,
    established: 1999,
    admissionOpen: true,
    website: 'https://www.gardenbangkok.com',
    contactPhone: '+66 2 249 1880',
    languages: ['English', 'Thai', 'Mandarin'],
    classSize: 20,
    studentTeacherRatio: '10:1',
    accreditations: ['FOBISIA', 'Cambridge'],
    extracurriculars: ['Football', 'Drama', 'Choir', 'Coding'],
    transportation: true,
  },
  {
    id: '6',
    name: 'Lanna International School',
    slug: 'lanna-international-school',
    location: 'Chiang Mai, Thailand',
    city: 'Chiang Mai',
    coordinates: { lat: 18.7300, lng: 98.9600 },
    curriculum: ['International (British)'],
    fees: { min: 350000, max: 600000, currency: 'THB' },
    rating: 4.6,
    reviewCount: 134,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    description: 'Leading British curriculum school in Northern Thailand with strong academic traditions.',
    facilities: ['Sports Field', 'Library', 'Science Labs', 'Art Studio'],
    featured: true,
    promoted: false,
    type: 'international',
    students: 800,
    established: 1993,
    admissionOpen: true,
    website: 'https://www.lannaist.ac.th',
    contactPhone: '+66 53 806 230',
    languages: ['English', 'Thai', 'Mandarin'],
    classSize: 22,
    studentTeacherRatio: '10:1',
    accreditations: ['WASC', 'Cambridge'],
    extracurriculars: ['Basketball', 'Debate', 'Music', 'Community Service'],
    transportation: true,
  },
  {
    id: '7',
    name: 'Bangkok Patana School',
    slug: 'bangkok-patana-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.6601, lng: 100.6272 },
    curriculum: ['International (British)'],
    fees: { min: 500000, max: 1000000, currency: 'THB' },
    rating: 4.8,
    reviewCount: 342,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    description: 'Large, established non-profit British school with exceptional sports and arts facilities.',
    facilities: ['Olympic Pool', 'Tennis Courts', 'Theater', 'Science Labs', 'Football Fields'],
    featured: true,
    promoted: false,
    type: 'international',
    students: 2200,
    established: 1957,
    admissionOpen: true,
    website: 'https://www.patana.ac.th',
    contactPhone: '+66 2 398 0200',
    languages: ['English', 'Thai', 'French', 'Mandarin', 'Spanish'],
    classSize: 22,
    studentTeacherRatio: '10:1',
    accreditations: ['CIS', 'IB World School'],
    extracurriculars: ['Gymnastics', 'Swimming', 'Orchestra', 'Duke of Edinburgh'],
    transportation: true,
  },
  {
    id: '8',
    name: 'Shrewsbury International School',
    slug: 'shrewsbury-international-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7107, lng: 100.5097 },
    curriculum: ['International (British)'],
    fees: { min: 450000, max: 700000, currency: 'THB' },
    rating: 4.9,
    reviewCount: 265,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    description: 'Prestigious UK brand offering exceptional academics right on the Chao Phraya River.',
    facilities: ['Swimming Pool', 'Tennis Courts', 'Art Center', 'Music Room', 'Theater'],
    featured: true,
    promoted: true,
    type: 'international',
    students: 2000,
    established: 2003,
    admissionOpen: true,
    website: 'https://www.shrewsbury.ac.th',
    contactPhone: '+66 2 675 1888',
    languages: ['English', 'Thai', 'Mandarin', 'French'],
    classSize: 20,
    studentTeacherRatio: '9:1',
    accreditations: ['CIS', 'FOBISIA'],
    extracurriculars: ['Rowing', 'Music Academy', 'Drama', 'Tennis'],
    transportation: true,
  },
  {
    id: '9',
    name: 'Harrow International School Bangkok',
    slug: 'harrow-international-school-bangkok',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.9113, lng: 100.5852 },
    curriculum: ['International (British)'],
    fees: { min: 600000, max: 1000000, currency: 'THB' },
    rating: 4.7,
    reviewCount: 201,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'Premium British boarding school on a beautiful lake-side campus.',
    facilities: ['Lake', 'Boarding Houses', 'Swimming Pool', 'Sports Fields'],
    featured: false,
    promoted: false,
    type: 'international',
    students: 1600,
    established: 1998,
    admissionOpen: true,
    website: 'https://www.harrowschool.ac.th',
    contactPhone: '+66 2 503 7222',
    languages: ['English', 'Thai', 'Mandarin', 'French', 'Japanese'],
    classSize: 20,
    studentTeacherRatio: '9:1',
    accreditations: ['CIS', 'FOBISIA'],
    extracurriculars: ['Golf', 'Tennis', 'Leadership Academies', 'Sailing'],
    transportation: true,
  },
  {
    id: '10',
    name: 'Ruamrudee International School',
    slug: 'ruamrudee-international-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7800, lng: 100.7300 },
    curriculum: ['International (American)', 'IB (International Baccalaureate)'],
    fees: { min: 500000, max: 750000, currency: 'THB' },
    rating: 4.6,
    reviewCount: 178,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Historic school offering both American and IB pathways with strong academic traditions.',
    facilities: ['Sports Fields', 'Science Labs', 'Library', 'Swimming Pool'],
    featured: false,
    promoted: false,
    type: 'international',
    students: 1200,
    established: 1957,
    admissionOpen: true,
    website: 'https://www.rism.ac.th',
    contactPhone: '+66 2 791 8900',
    languages: ['English', 'Thai', 'Mandarin', 'Spanish'],
    classSize: 20,
    studentTeacherRatio: '8:1',
    accreditations: ['WASC', 'IB World School'],
    extracurriculars: ['Robotics', 'Model UN', 'Varsity Sports', 'Arts'],
    transportation: true,
  },
  {
    id: '11',
    name: 'St Andrews International School',
    slug: 'st-andrews-international-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7150, lng: 100.5900 },
    curriculum: ['International (British)'],
    fees: { min: 400000, max: 600000, currency: 'THB' },
    rating: 4.6,
    reviewCount: 190,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    description: 'Premium British boarding school on a beautiful lake-side campus.',
    facilities: ['Swimming Pool', 'Sports Hall', 'Science Labs', 'Library'],
    featured: false,
    promoted: true,
    type: 'international',
    students: 2000,
    established: 1997,
    admissionOpen: true,
    website: 'https://www.standrews.ac.th',
    contactPhone: '+66 2 381 2387',
    languages: ['English', 'Thai', 'Mandarin', 'French', 'German'],
    classSize: 22,
    studentTeacherRatio: '10:1',
    accreditations: ['CIS', 'IB World School'],
    extracurriculars: ['Football', 'Swimming', 'Performing Arts', 'Coding'],
    transportation: true,
  },
  {
    id: '12',
    name: 'British International School Phuket',
    slug: 'british-international-school-phuket',
    location: 'Phuket, Thailand',
    city: 'Phuket',
    coordinates: { lat: 7.9400, lng: 98.3500 },
    curriculum: ['International (British)'],
    fees: { min: 600000, max: 1000000, currency: 'THB' },
    rating: 4.8,
    reviewCount: 145,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    description: 'Boutique British curriculum school offering a personalized learning approach.',
    facilities: ['Olympic Pool', 'Tennis Academy', 'Golf Center', 'Boarding', 'Football Fields'],
    featured: true,
    promoted: false,
    type: 'international',
    students: 900,
    established: 1996,
    admissionOpen: true,
    website: 'https://www.bisphuket.ac.th',
    contactPhone: '+66 76 336 000',
    languages: ['English', 'Thai', 'Mandarin', 'Russian', 'French', 'Spanish'],
    classSize: 20,
    studentTeacherRatio: '8:1',
    accreditations: ['CIS', 'IB World School', 'FOBISIA'],
    extracurriculars: ['High Performance Tennis', 'Swimming Academy', 'Golf Academy', 'Football Academy'],
    transportation: true,
  },
  {
    id: '13',
    name: 'UWC Thailand',
    slug: 'uwc-thailand',
    location: 'Phuket, Thailand',
    city: 'Phuket',
    coordinates: { lat: 8.0400, lng: 98.3300 },
    curriculum: ['IB (International Baccalaureate)'],
    fees: { min: 800000, max: 1200000, currency: 'THB' },
    rating: 4.9,
    reviewCount: 110,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    description: 'Trilingual IB school (English, Chinese, Thai) with excellent university placements.',
    facilities: ['Mindfulness Center', 'Sports Center', 'Boarding', 'Library'],
    featured: true,
    promoted: false,
    type: 'international',
    students: 500,
    established: 2008,
    admissionOpen: false,
    website: 'https://www.uwcthailand.ac.th',
    contactPhone: '+66 76 336 076',
    languages: ['English', 'Thai', 'Mandarin', 'Spanish'],
    classSize: 18,
    studentTeacherRatio: '7:1',
    accreditations: ['CIS', 'IB World School', 'WASC'],
    extracurriculars: ['Mindfulness', 'Sailing', 'Environmental Service', 'Outdoor Education'],
    transportation: true,
  },
  {
    id: '14',
    name: 'Prem Tinsulanonda International School',
    slug: 'prem-international-school',
    location: 'Chiang Mai, Thailand',
    city: 'Chiang Mai',
    coordinates: { lat: 18.9100, lng: 98.9400 },
    curriculum: ['IB (International Baccalaureate)'],
    fees: { min: 800000, max: 1200000, currency: 'THB' },
    rating: 4.7,
    reviewCount: 95,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'Premium IB boarding school set on a massive, lush campus in Northern Thailand.',
    facilities: ['Golf Center', 'Farm', 'Boarding', 'Olympic Pool', 'Theater'],
    featured: true,
    promoted: false,
    type: 'international',
    students: 500,
    established: 2001,
    admissionOpen: true,
  },
  {
    id: '15',
    name: 'Rugby School Thailand',
    slug: 'rugby-school-thailand',
    location: 'Chonburi, Thailand',
    city: 'Pattaya',
    coordinates: { lat: 12.9800, lng: 101.0500 },
    curriculum: ['International (British)'],
    fees: { min: 800000, max: 1200000, currency: 'THB' },
    rating: 4.8,
    reviewCount: 120,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Sprawling premium boarding school bringing the British public school ethos to Thailand.',
    facilities: ['Boarding', 'Lakes', 'Equestrian Center', 'Sports Fields'],
    featured: true,
    promoted: false,
    type: 'international',
    students: 800,
    established: 2017,
    admissionOpen: true,
  },
  {
    id: '16',
    name: 'Bangkok Prep',
    slug: 'bangkok-prep',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7200, lng: 100.5800 },
    curriculum: ['International (British)'],
    fees: { min: 300000, max: 500000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    description: 'Mid-tier British school with two campuses, offering excellent value and community feel.',
    facilities: ['Swimming Pool', 'Sports Hall', 'Library', 'Science Labs'],
    featured: false,
    promoted: false,
    type: 'international',
    students: 1000,
    established: 2003,
    admissionOpen: true,
  },
  {
    id: '17',
    name: 'Denla British School',
    slug: 'denla-british-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.9100, lng: 100.4500 },
    curriculum: ['International (British)'],
    fees: { min: 500000, max: 900000, currency: 'THB' },
    rating: 4.7,
    reviewCount: 85,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
    description: 'Modern, premium British school focused on preparing students for global success.',
    facilities: ['Makerspaces', 'Theater', 'Sports Complex', 'Swimming Pool'],
    featured: false,
    promoted: false,
    type: 'international',
    students: 1000,
    established: 2017,
    admissionOpen: true,
    website: 'https://www.rugbyschool.ac.th',
    contactPhone: '+66 33 141 800',
    languages: ['English', 'Thai', 'Mandarin', 'Spanish'],
    classSize: 20,
    studentTeacherRatio: '9:1',
    accreditations: ['CIS', 'FOBISIA'],
    extracurriculars: ['Equestrian', 'Sailing', 'Rugby', 'Outdoor Education'],
    transportation: true,
  },
  {
    id: '18',
    name: 'Concordian International School',
    slug: 'concordian-international-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.6300, lng: 100.6700 },
    curriculum: ['IB (International Baccalaureate)', 'Bilingual'],
    fees: { min: 500000, max: 900000, currency: 'THB' },
    rating: 4.8,
    reviewCount: 110,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    description: 'Trilingual IB school (English, Chinese, Thai) with excellent university placements.',
    facilities: ['Library', 'Chinese Center', 'Sports Field', 'Swimming Pool'],
    featured: false,
    promoted: false,
    type: 'international',
    students: 800,
    established: 2001,
    admissionOpen: true,
  },
  {
    id: '19',
    name: 'Hua Hin International School',
    slug: 'hua-hin-international-school',
    location: 'Hua Hin, Thailand',
    city: 'Hua Hin',
    coordinates: { lat: 12.5900, lng: 99.9300 },
    curriculum: ['International (British)'],
    fees: { min: 300000, max: 600000, currency: 'THB' },
    rating: 4.6,
    reviewCount: 65,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    description: 'Rapidly expanding British school in the coastal town of Hua Hin, great community focus.',
    facilities: ['Sports Field', 'Library', 'Science Labs', 'Art Center'],
    featured: false,
    promoted: true,
    type: 'international',
    students: 500,
    established: 2012,
    admissionOpen: true,
  },
  {
    id: '20',
    name: 'Mahidol International Demonstration School',
    slug: 'mahidol-demonstration-school',
    location: 'Nakhon Pathom, Thailand',
    city: 'Nakhon Ratchasima',
    coordinates: { lat: 13.7900, lng: 100.3200 },
    curriculum: ['IB (International Baccalaureate)'],
    fees: { min: 400000, max: 700000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 55,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'University-linked IB school known for rigorous academics and science programs.',
    facilities: ['University Labs', 'Library', 'Sports Complex'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 500,
    established: 2013,
    admissionOpen: true,
  },
  {
    id: '21',
    name: 'Triam Udom Suksa School',
    slug: 'triam-udom-suksa-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7367, lng: 100.5331 },
    curriculum: ['Thai National', 'Science/Math', 'Bilingual'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.9,
    reviewCount: 450,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Top ranked Thailand public school offering Science-Math/Language for grades 10-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'public',
    students: 4000,
    established: 1938,
    admissionOpen: true,
  },
  {
    id: '22',
    name: 'Triam Udom Suksa Pattanakarn',
    slug: 'triam-udom-suksa-pattanakarn',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7380, lng: 100.6450 },
    curriculum: ['Thai National', 'Bilingual'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.8,
    reviewCount: 320,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'Top university entry public school offering Gifted/Language for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'public',
    students: 4000,
    established: 1978,
    admissionOpen: true,
  },
  {
    id: '23',
    name: 'Mahidol Wittayanusorn School',
    slug: 'mahidol-wittayanusorn-school',
    location: 'Nakhon Pathom, Thailand',
    city: 'Nakhon Pathom',
    coordinates: { lat: 13.7934, lng: 100.3236 },
    curriculum: ['Thai National', 'Science/Math'],
    fees: { min: 0, max: 0, currency: 'THB' },
    rating: 4.9,
    reviewCount: 210,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    description: 'Top STEM school offering Science gifted program for grades 10-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'public',
    students: 500,
    established: 2000,
    admissionOpen: true,
  },
  {
    id: '24',
    name: 'Satit Chula Demonstration School',
    slug: 'satit-chula-demonstration-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7360, lng: 100.5280 },
    curriculum: ['Thai National', 'Bilingual'],
    fees: { min: 30000, max: 100000, currency: 'THB' },
    rating: 4.9,
    reviewCount: 315,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    description: 'Elite satit school offering Bilingual/Experimental programs for grades 1-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'public',
    students: 2000,
    established: 1958,
    admissionOpen: true,
  },
  {
    id: '25',
    name: 'Satit Kasetsart School',
    slug: 'satit-kasetsart-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.8440, lng: 100.5690 },
    curriculum: ['Thai National'],
    fees: { min: 30000, max: 80000, currency: 'THB' },
    rating: 4.8,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    description: 'Top satit offering Research-based programs for grades 1-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'public',
    students: 2000,
    established: 1971,
    admissionOpen: true,
  },
  {
    id: '26',
    name: 'Potisarnpittayakorn School',
    slug: 'potisarnpittayakorn-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7650, lng: 100.4350 },
    curriculum: ['Thai National', 'Bilingual'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
    description: 'Well-known public school offering Standard+EP for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 3000,
    established: 1956,
    admissionOpen: true,
  },
  {
    id: '27',
    name: 'Rittiyawannalai School',
    slug: 'rittiyawannalai-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.9180, lng: 100.6270 },
    curriculum: ['Thai National', 'Bilingual'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.4,
    reviewCount: 130,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Large public school offering Standard+EP for grades 1-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 4000,
    established: 1947,
    admissionOpen: true,
  },
  {
    id: '28',
    name: 'Horwang School',
    slug: 'horwang-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.8180, lng: 100.5610 },
    curriculum: ['Thai National', 'Science/Math'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.7,
    reviewCount: 220,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'Top Bangkok public school offering Science/Math for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'public',
    students: 3000,
    established: 1913,
    admissionOpen: true,
  },
  {
    id: '29',
    name: 'Suankularb Wittayalai',
    slug: 'suankularb-wittayalai',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7420, lng: 100.4980 },
    curriculum: ['Thai National', 'Science/Math'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.9,
    reviewCount: 500,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    description: 'Historic elite public school offering Science/Math for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'public',
    students: 4000,
    established: 1882,
    admissionOpen: true,
  },
  {
    id: '30',
    name: 'Debsirin School',
    slug: 'debsirin-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7450, lng: 100.5150 },
    curriculum: ['Thai National', 'Science/Math'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.8,
    reviewCount: 340,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    description: 'Top boys school offering Science/Math for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 3000,
    established: 1885,
    admissionOpen: true,
  },
  {
    id: '31',
    name: 'Bodindecha School',
    slug: 'bodindecha-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7680, lng: 100.6150 },
    curriculum: ['Thai National', 'Bilingual'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.7,
    reviewCount: 290,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    description: 'Highly competitive public school offering Gifted/EP for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'public',
    students: 4000,
    established: 1971,
    admissionOpen: true,
  },
  {
    id: '32',
    name: 'Samsen Wittayalai School',
    slug: 'samsen-wittayalai-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7820, lng: 100.5330 },
    curriculum: ['Thai National', 'Bilingual'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.8,
    reviewCount: 310,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
    description: 'Top ranked public school offering Gifted/EP for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 4000,
    established: 1953,
    admissionOpen: true,
  },
  {
    id: '33',
    name: 'Horbun School',
    slug: 'horbun-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7200, lng: 100.5200 },
    curriculum: ['Thai National'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.3,
    reviewCount: 110,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Mid-tier public school offering Standard curriculum for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 2000,
    established: 1960,
    admissionOpen: true,
  },
  {
    id: '34',
    name: 'Visuttharangsi School',
    slug: 'visuttharangsi-school',
    location: 'Kanchanaburi, Thailand',
    city: 'Kanchanaburi',
    coordinates: { lat: 14.0200, lng: 99.5300 },
    curriculum: ['Thai National', 'Bilingual', 'Science/Math'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.6,
    reviewCount: 180,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'Top province public school offering Science/EP for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 2800,
    established: 1904,
    admissionOpen: true,
  },
  {
    id: '35',
    name: 'Yupparaj Wittayalai School',
    slug: 'yupparaj-wittayalai-school',
    location: 'Chiang Mai, Thailand',
    city: 'Chiang Mai',
    coordinates: { lat: 18.7910, lng: 98.9880 },
    curriculum: ['Thai National', 'Science/Math'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.7,
    reviewCount: 260,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    description: 'Top north public school offering Science/Math for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'public',
    students: 3000,
    established: 1899,
    admissionOpen: true,
  },
  {
    id: '36',
    name: 'Montfort College',
    slug: 'montfort-college',
    location: 'Chiang Mai, Thailand',
    city: 'Chiang Mai',
    coordinates: { lat: 18.7750, lng: 99.0060 },
    curriculum: ['Thai National', 'Bilingual'],
    fees: { min: 80000, max: 150000, currency: 'THB' },
    rating: 4.8,
    reviewCount: 310,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    description: 'Top private bilingual school offering excellent facilities for grades 1-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'private',
    students: 2000,
    established: 1932,
    admissionOpen: true,
  },
  {
    id: '37',
    name: 'Assumption College',
    slug: 'assumption-college',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7230, lng: 100.5150 },
    curriculum: ['Thai National', 'Bilingual'],
    fees: { min: 100000, max: 200000, currency: 'THB' },
    rating: 4.9,
    reviewCount: 420,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    description: 'Elite private boys school offering Bilingual programs for grades 1-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'private',
    students: 3000,
    established: 1885,
    admissionOpen: true,
  },
  {
    id: '38',
    name: 'Bangkok Christian College',
    slug: 'bangkok-christian-college',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7200, lng: 100.5230 },
    curriculum: ['Thai National', 'Bilingual'],
    fees: { min: 100000, max: 200000, currency: 'THB' },
    rating: 4.8,
    reviewCount: 380,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
    description: 'Top boys private school offering Bilingual curriculum for grades 1-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'private',
    students: 4000,
    established: 1852,
    admissionOpen: true,
  },
  {
    id: '39',
    name: 'Phuket Wittayalai School',
    slug: 'phuket-wittayalai-school',
    location: 'Phuket, Thailand',
    city: 'Phuket',
    coordinates: { lat: 7.8900, lng: 98.3900 },
    curriculum: ['Thai National'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.6,
    reviewCount: 190,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Top Phuket public school offering Standard curriculum for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 3000,
    established: 1909,
    admissionOpen: true,
  },
  {
    id: '40',
    name: 'Udon Pittayanukool School',
    slug: 'udon-pittayanukool-school',
    location: 'Udon Thani, Thailand',
    city: 'Udon Thani',
    coordinates: { lat: 17.4100, lng: 102.7900 },
    curriculum: ['Thai National', 'Science/Math'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 160,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'Top northeast public school offering Science curriculum for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 3000,
    established: 1920,
    admissionOpen: true,
  },
  {
    id: '41',
    name: 'Sangkhom Islam Wittaya School',
    slug: 'sangkhom-islam-wittaya-school',
    location: 'Sadao, Thailand',
    city: 'Songkhla',
    coordinates: { lat: 6.6333, lng: 100.4167 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 20000, max: 60000, currency: 'THB' },
    rating: 4.8,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Large award-winning school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field', 'Computer Lab'],
    featured: true,
    promoted: false,
    type: 'islamic',
    students: 1900,
    established: 1980,
    admissionOpen: true,
  },
  {
    id: '42',
    name: 'Thamavitya Mulniti School',
    slug: 'thamavitya-mulniti-school',
    location: 'Yala, Thailand',
    city: 'Yala',
    coordinates: { lat: 6.5411, lng: 101.2804 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.7,
    reviewCount: 220,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'Government supported school offering Tahfiz+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field', 'Computer Lab'],
    featured: true,
    promoted: false,
    type: 'islamic',
    students: 6000,
    established: 1975,
    admissionOpen: true,
  },
  {
    id: '43',
    name: 'Islamic College of Thailand',
    slug: 'islamic-college-of-thailand',
    location: 'Thung Khru, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.6264, lng: 100.5055 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 30000, max: 80000, currency: 'THB' },
    rating: 4.6,
    reviewCount: 180,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    description: 'Major Bangkok school offering Islamic+Academic programs for Secondary grades.',
    facilities: ['Library', 'Mosque', 'Sports Field', 'Computer Lab'],
    featured: true,
    promoted: false,
    type: 'islamic',
    students: 1000,
    established: 1950,
    admissionOpen: true,
  },
  {
    id: '44',
    name: 'Narawit Islamic School',
    slug: 'narawit-islamic-school',
    location: 'Mueang, Thailand',
    city: 'Narathiwat',
    coordinates: { lat: 6.4255, lng: 101.8253 },
    curriculum: ['Islamic'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 90,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    description: 'Local community school offering Islamic studies for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 500,
    established: 1985,
    admissionOpen: true,
  },
  {
    id: '45',
    name: 'Islamic School of Thailand',
    slug: 'islamic-school-of-thailand',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7563, lng: 100.5018 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 30000, max: 80000, currency: 'THB' },
    rating: 4.7,
    reviewCount: 140,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    description: 'Association school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field', 'Computer Lab'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 1000,
    established: 1960,
    admissionOpen: true,
  },
  {
    id: '46',
    name: 'Darul Maaref Foundation School',
    slug: 'darul-maaref-foundation-school',
    location: 'Pattani, Thailand',
    city: 'Pattani',
    coordinates: { lat: 6.8673, lng: 101.2501 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.6,
    reviewCount: 110,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
    description: 'Well known school offering Tahfiz+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field', 'Computer Lab'],
    featured: true,
    promoted: false,
    type: 'islamic',
    students: 2000,
    established: 1970,
    admissionOpen: true,
  },
  {
    id: '47',
    name: 'Saengtham Islam School',
    slug: 'saengtham-islam-school',
    location: 'Yala, Thailand',
    city: 'Yala',
    coordinates: { lat: 6.5411, lng: 101.2804 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 95,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Regional school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 1500,
    established: 1982,
    admissionOpen: true,
  },
  {
    id: '48',
    name: 'Darul Quran School',
    slug: 'darul-quran-school',
    location: 'Narathiwat, Thailand',
    city: 'Narathiwat',
    coordinates: { lat: 6.4255, lng: 101.8253 },
    curriculum: ['Islamic'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.7,
    reviewCount: 130,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'Quran focused school offering Tahfiz programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 1200,
    established: 1988,
    admissionOpen: true,
  },
  {
    id: '49',
    name: 'Nurul Iman School',
    slug: 'nurul-iman-school',
    location: 'Yala, Thailand',
    city: 'Yala',
    coordinates: { lat: 6.5411, lng: 101.2804 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.4,
    reviewCount: 85,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    description: 'Popular school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 1000,
    established: 1990,
    admissionOpen: true,
  },
  {
    id: '50',
    name: 'Al-Hidayah School',
    slug: 'al-hidayah-school',
    location: 'Pattani, Thailand',
    city: 'Pattani',
    coordinates: { lat: 6.8673, lng: 101.2501 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.3,
    reviewCount: 75,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    description: 'Community school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 900,
    established: 1995,
    admissionOpen: true,
  },
  {
    id: '51',
    name: 'Al-Furqan School',
    slug: 'al-furqan-school',
    location: 'Yala, Thailand',
    city: 'Yala',
    coordinates: { lat: 6.5411, lng: 101.2804 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.4,
    reviewCount: 80,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    description: 'Mid-size school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 900,
    established: 1992,
    admissionOpen: true,
  },
  {
    id: '52',
    name: 'Darussalam School',
    slug: 'darussalam-school',
    location: 'Narathiwat, Thailand',
    city: 'Narathiwat',
    coordinates: { lat: 6.4255, lng: 101.8253 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.6,
    reviewCount: 120,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
    description: 'Large school offering Tahfiz+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field', 'Computer Lab'],
    featured: true,
    promoted: false,
    type: 'islamic',
    students: 1200,
    established: 1985,
    admissionOpen: true,
  },
  {
    id: '53',
    name: 'Al-Madinah School',
    slug: 'al-madinah-school',
    location: 'Yala, Thailand',
    city: 'Yala',
    coordinates: { lat: 6.5411, lng: 101.2804 },
    curriculum: ['Islamic'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 90,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Community school offering Tahfiz programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 700,
    established: 1998,
    admissionOpen: true,
  },
  {
    id: '54',
    name: 'Darul Hikmah School',
    slug: 'darul-hikmah-school',
    location: 'Pattani, Thailand',
    city: 'Pattani',
    coordinates: { lat: 6.8673, lng: 101.2501 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.4,
    reviewCount: 85,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'Regional school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 900,
    established: 1993,
    admissionOpen: true,
  },
  {
    id: '55',
    name: 'Nurul Quran School',
    slug: 'nurul-quran-school',
    location: 'Narathiwat, Thailand',
    city: 'Narathiwat',
    coordinates: { lat: 6.4255, lng: 101.8253 },
    curriculum: ['Islamic'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.7,
    reviewCount: 110,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    description: 'Quran school offering Tahfiz programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 800,
    established: 1996,
    admissionOpen: true,
  },
  {
    id: '56',
    name: 'Al-Islah School',
    slug: 'al-islah-school',
    location: 'Yala, Thailand',
    city: 'Yala',
    coordinates: { lat: 6.5411, lng: 101.2804 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.3,
    reviewCount: 70,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    description: 'Mid-tier school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 900,
    established: 1997,
    admissionOpen: true,
  },
  {
    id: '57',
    name: 'Darul Aman School',
    slug: 'darul-aman-school',
    location: 'Pattani, Thailand',
    city: 'Pattani',
    coordinates: { lat: 6.8673, lng: 101.2501 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.6,
    reviewCount: 105,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    description: 'Large school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 1000,
    established: 1989,
    admissionOpen: true,
  },
  {
    id: '58',
    name: 'Al-Barakah School',
    slug: 'al-barakah-school',
    location: 'Yala, Thailand',
    city: 'Yala',
    coordinates: { lat: 6.5411, lng: 101.2804 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.4,
    reviewCount: 80,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
    description: 'Community school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 800,
    established: 1999,
    admissionOpen: true,
  },
  {
    id: '59',
    name: 'Al-Hikmah School',
    slug: 'al-hikmah-school',
    location: 'Narathiwat, Thailand',
    city: 'Narathiwat',
    coordinates: { lat: 6.4255, lng: 101.8253 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 95,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Regional school offering Tahfiz+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 900,
    established: 1994,
    admissionOpen: true,
  },
  {
    id: '60',
    name: 'Darul Ulum Pattani',
    slug: 'darul-ulum-pattani',
    location: 'Pattani, Thailand',
    city: 'Pattani',
    coordinates: { lat: 6.8673, lng: 101.2501 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 0, max: 30000, currency: 'THB' },
    rating: 4.7,
    reviewCount: 140,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'Well known school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field', 'Computer Lab'],
    featured: true,
    promoted: false,
    type: 'islamic',
    students: 1100,
    established: 1978,
    admissionOpen: true,
  },
  {
    id: '61',
    name: 'Attaqwa Islamic School',
    slug: 'attaqwa-islamic-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7563, lng: 100.5018 },
    curriculum: ['Islamic'],
    fees: { min: 20000, max: 50000, currency: 'THB' },
    rating: 4.6,
    reviewCount: 110,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    description: 'Community school offering Islamic studies for Primary grades.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: true,
    promoted: false,
    type: 'islamic',
    students: 300,
    established: 2005,
    admissionOpen: true,
  },
  {
    id: '62',
    name: 'Al-Huda School Bangkok',
    slug: 'al-huda-school-bangkok',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7563, lng: 100.5018 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 30000, max: 80000, currency: 'THB' },
    rating: 4.7,
    reviewCount: 125,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    description: 'Urban school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field', 'Computer Lab'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 600,
    established: 2000,
    admissionOpen: true,
  },
  {
    id: '63',
    name: 'Phuket Islamic School',
    slug: 'phuket-islamic-school',
    location: 'Phuket, Thailand',
    city: 'Phuket',
    coordinates: { lat: 7.8900, lng: 98.3900 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 30000, max: 70000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 95,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    description: 'Island school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 500,
    established: 1995,
    admissionOpen: true,
  },
  {
    id: '64',
    name: 'Krabi Islamic School',
    slug: 'krabi-islamic-school',
    location: 'Krabi, Thailand',
    city: 'Krabi',
    coordinates: { lat: 8.0863, lng: 98.9063 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 30000, max: 60000, currency: 'THB' },
    rating: 4.4,
    reviewCount: 80,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
    description: 'Regional school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 400,
    established: 1998,
    admissionOpen: true,
  },
  {
    id: '65',
    name: 'Hat Yai Islamic School',
    slug: 'hat-yai-islamic-school',
    location: 'Hat Yai, Thailand',
    city: 'Songkhla',
    coordinates: { lat: 7.0087, lng: 100.4747 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 30000, max: 60000, currency: 'THB' },
    rating: 4.6,
    reviewCount: 135,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Major city school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field', 'Computer Lab'],
    featured: true,
    promoted: false,
    type: 'islamic',
    students: 800,
    established: 1985,
    admissionOpen: true,
  },
  {
    id: '66',
    name: 'Chiang Mai Islamic School',
    slug: 'chiang-mai-islamic-school',
    location: 'Chiang Mai, Thailand',
    city: 'Chiang Mai',
    coordinates: { lat: 18.7910, lng: 98.9880 },
    curriculum: ['Thai National', 'Islamic'],
    fees: { min: 30000, max: 60000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 90,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'North regional school offering Islamic+Academic programs for grades K-12.',
    facilities: ['Library', 'Mosque', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'islamic',
    students: 300,
    established: 2002,
    admissionOpen: true,
  },
  {
    id: '67',
    name: 'Watrachathiwat School',
    slug: 'watrachathiwat-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.7800, lng: 100.5060 },
    curriculum: ['Thai National'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.3,
    reviewCount: 90,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Urban public school offering Standard programs for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 2000,
    established: 1960,
    admissionOpen: true,
  },
  {
    id: '68',
    name: 'Bangmod Wittaya School',
    slug: 'bangmod-wittaya-school',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.6550, lng: 100.4850 },
    curriculum: ['Thai National'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.2,
    reviewCount: 85,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'Local public school offering Standard programs for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 2000,
    established: 1965,
    admissionOpen: true,
  },
  {
    id: '69',
    name: 'Latphrao Wittayakom',
    slug: 'latphrao-wittayakom',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.8050, lng: 100.5900 },
    curriculum: ['Thai National'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.3,
    reviewCount: 95,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    description: 'Community public school offering Standard programs for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 2000,
    established: 1970,
    admissionOpen: true,
  },
  {
    id: '70',
    name: 'Don Mueang Thaharnargardbumrung',
    slug: 'don-mueang-thaharnargardbumrung',
    location: 'Bangkok, Thailand',
    city: 'Bangkok',
    coordinates: { lat: 13.9130, lng: 100.6050 },
    curriculum: ['Thai National'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.4,
    reviewCount: 110,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    description: 'Local public school offering Standard programs for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 2000,
    established: 1955,
    admissionOpen: true,
  },
  {
    id: '71',
    name: 'Chiang Mai Rajabhat Demonstration School',
    slug: 'chiang-mai-rajabhat-demonstration-school',
    location: 'Chiang Mai, Thailand',
    city: 'Chiang Mai',
    coordinates: { lat: 18.8050, lng: 98.9800 },
    curriculum: ['Thai National', 'Bilingual'],
    fees: { min: 30000, max: 80000, currency: 'THB' },
    rating: 4.6,
    reviewCount: 160,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    description: 'Satit public school offering Bilingual programs for grades 1-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'public',
    students: 1500,
    established: 1980,
    admissionOpen: true,
  },
  {
    id: '72',
    name: 'Lamphun Wittayakom',
    slug: 'lamphun-wittayakom',
    location: 'Lamphun, Thailand',
    city: 'Lamphun',
    coordinates: { lat: 18.5750, lng: 99.0100 },
    curriculum: ['Thai National'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 130,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
    description: 'Provincial public school offering Standard programs for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 2000,
    established: 1910,
    admissionOpen: true,
  },
  {
    id: '73',
    name: 'Phayao Wittayakom',
    slug: 'phayao-wittayakom',
    location: 'Phayao, Thailand',
    city: 'Phayao',
    coordinates: { lat: 19.1650, lng: 99.9000 },
    curriculum: ['Thai National'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 120,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Regional public school offering Standard programs for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 2000,
    established: 1950,
    admissionOpen: true,
  },
  {
    id: '74',
    name: 'Nakhon Ratchasima School',
    slug: 'nakhon-ratchasima-school',
    location: 'Nakhon Ratchasima, Thailand',
    city: 'Nakhon Ratchasima',
    coordinates: { lat: 14.9700, lng: 102.1000 },
    curriculum: ['Thai National', 'Science/Math'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.7,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    description: 'Major city public school offering Science programs for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field', 'Science Labs'],
    featured: true,
    promoted: false,
    type: 'public',
    students: 3000,
    established: 1905,
    admissionOpen: true,
  },
  {
    id: '75',
    name: 'Buriram Pittayakom',
    slug: 'buriram-pittayakom',
    location: 'Buriram, Thailand',
    city: 'Buriram',
    coordinates: { lat: 14.9900, lng: 103.1100 },
    curriculum: ['Thai National'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 140,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    description: 'Regional public school offering Standard programs for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 2000,
    established: 1952,
    admissionOpen: true,
  },
  {
    id: '76',
    name: 'Sisaket Wittayalai',
    slug: 'sisaket-wittayalai',
    location: 'Sisaket, Thailand',
    city: 'Sisaket',
    coordinates: { lat: 15.1150, lng: 104.3200 },
    curriculum: ['Thai National'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.4,
    reviewCount: 125,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    description: 'Regional public school offering Standard programs for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 2000,
    established: 1960,
    admissionOpen: true,
  },
  {
    id: '77',
    name: 'Chaiyaphum Wittayalai',
    slug: 'chaiyaphum-wittayalai',
    location: 'Chaiyaphum, Thailand',
    city: 'Chaiyaphum',
    coordinates: { lat: 15.8100, lng: 102.0300 },
    curriculum: ['Thai National'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.4,
    reviewCount: 110,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    description: 'Regional public school offering Standard programs for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 2000,
    established: 1958,
    admissionOpen: true,
  },
  {
    id: '78',
    name: 'Kalasin Pittayakom',
    slug: 'kalasin-pittayakom',
    location: 'Kalasin, Thailand',
    city: 'Kalasin',
    coordinates: { lat: 16.4300, lng: 103.5000 },
    curriculum: ['Thai National'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.4,
    reviewCount: 105,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
    description: 'Regional public school offering Standard programs for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 2000,
    established: 1962,
    admissionOpen: true,
  },
  {
    id: '79',
    name: 'Loei Wittayakom',
    slug: 'loei-wittayakom',
    location: 'Loei, Thailand',
    city: 'Loei',
    coordinates: { lat: 17.4900, lng: 101.7300 },
    curriculum: ['Thai National'],
    fees: { min: 0, max: 20000, currency: 'THB' },
    rating: 4.5,
    reviewCount: 115,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    description: 'Regional public school offering Standard programs for grades 7-12.',
    facilities: ['Library', 'Computer Lab', 'Sports Field'],
    featured: false,
    promoted: false,
    type: 'public',
    students: 2000,
    established: 1965,
    admissionOpen: true,
  }
]

export const reviews: Review[] = [
  {
    id: '1',
    schoolId: '1', // NIST
    author: 'Sarah Johnson',
    rating: 5,
    date: '2026-03-15',
    title: 'A Truly International Community',
    content: 'My children have been attending NIST for 3 years and the education quality is outstanding. The teachers are dedicated, the facilities are world-class, and the cultural diversity is truly celebrated. The central location is incredibly convenient for us.',
    helpful: 45,
  },
  {
    id: '2',
    schoolId: '7', // Patana
    author: 'Michael Chen',
    rating: 4,
    date: '2026-02-28',
    title: 'Exceptional Sports and Academics',
    content: 'The campus is massive and the facilities are unparalleled, especially for sports. The British curriculum is rigorous. The only downside is the traffic getting in and out of the campus during rush hour.',
    helpful: 32,
  },
  {
    id: '3',
    schoolId: '9', // Harrow
    author: 'Lisa Thompson',
    rating: 5,
    date: '2026-03-10',
    title: 'Traditional Excellence',
    content: 'Harrow has been a second home for our family. The focus on leadership and extracurriculars is fantastic. The lake side campus provides such a peaceful environment for learning.',
    helpful: 28,
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'best-international-schools-bangkok-2026',
    title: 'Best International Schools in Bangkok 2026: The Complete Guide for Families',
    excerpt: 'Relocating to Bangkok? We rank the top international schools by curriculum, fees, reputation, and admissions process — so you can make a confident decision.',
    content: `
## Finding the Right International School in Bangkok

Bangkok is home to over 60 international schools — from world-class IB institutions to British-curriculum boarding schools. With fees ranging from ฿150,000 to over ฿800,000 per year, choosing the right one is one of the biggest decisions an expat family will make.

This guide ranks the top international schools in Bangkok for 2026, covering what each school excels at, who it's best suited for, and how to apply.

## Why Bangkok's International School Scene Is Elite

Bangkok consistently ranks among Asia's top cities for international education. The city attracts highly qualified teachers, benefits from strong expat demand, and hosts globally accredited institutions like:

- **NIST International School** — Triple-accredited (IB, CIS, NEASC), widely considered Bangkok's most prestigious
- **International School Bangkok (ISB)** — Established in 1951, the oldest American-curriculum school in Thailand
- **Bangkok Patana School** — Leading British curriculum school with 2,200+ students
- **Shrewsbury International School** — Award-winning British school on the Chaophraya River

## How to Choose the Right School

**Step 1: Choose your curriculum** — IB, British (IGCSE/A-Level), American (AP), or Bilingual Thai-English?

**Step 2: Set your budget** — Entry-level international schools start at ฿150,000/year; elite schools run ฿500,000–฿800,000+.

**Step 3: Check accreditation** — Look for CIS, WASC, or NEASC accreditation to ensure global recognition.

**Step 4: Visit and assess** — Request a school tour, ask about class sizes and teacher turnover.

## Top 5 International Schools in Bangkok (2026)

| School | Curriculum | Annual Fees | Rating |
|--------|-----------|-------------|--------|
| NIST International School | IB | ฿490,000–฿690,000 | 4.9 ⭐ |
| ISB | American | ฿480,000–฿680,000 | 4.8 ⭐ |
| Bangkok Patana | British | ฿400,000–฿600,000 | 4.8 ⭐ |
| Shrewsbury International | British | ฿420,000–฿630,000 | 4.7 ⭐ |
| KIS International | IB | ฿390,000–฿560,000 | 4.7 ⭐ |

## Final Verdict

Bangkok offers world-class international education at every price point. For top IB: NIST. For British heritage: Shrewsbury. For American curriculum: ISB. Start your applications early — top schools fill up fast.
`,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    author: 'DekDee Editorial Team',
    date: '2026-04-15',
    category: 'School Guides',
    readTime: 7,
  },
  {
    id: '2',
    slug: 'ib-vs-british-curriculum-thailand',
    title: 'IB vs British Curriculum: Which is Better for Your Child in Thailand?',
    excerpt: 'Two of the most popular international curricula in Thailand explained side by side. Find out which program fits your child\'s learning style and your family\'s goals.',
    content: `
## The Big Debate: IB or British Curriculum?

If you're choosing an international school in Thailand, you'll almost certainly face this choice. Both the International Baccalaureate (IB) and the British (IGCSE/A-Level) curriculum are globally respected — but they're fundamentally different in philosophy and structure.

## The IB Programme

The IB is a four-programme framework: PYP (ages 3–12), MYP (ages 11–16), Diploma (ages 16–19), and Career-related Programme.

**Strengths:**
- Holistic, inquiry-based learning
- Internationally portable and recognized
- Encourages critical thinking and global citizenship
- Strong university acceptance worldwide

**Challenges:**
- Heavy workload, especially in the Diploma Programme
- Not suited to all learning styles
- Can be more expensive

## The British Curriculum (IGCSE / A-Level)

British curriculum schools follow a structured approach: Primary → Secondary (GCSE/IGCSE) → Sixth Form (A-Levels).

**Strengths:**
- Clear subject specialization at A-Level
- Strong UK and Commonwealth university pathway
- Well-structured and familiar to many families
- Strong track record in Thailand

**Challenges:**
- Less flexible than IB
- Primary focus on exams

## Head-to-Head Comparison

| Factor | IB | British |
|--------|-----|---------|
| Learning Style | Inquiry/project-based | Structured/syllabus |
| University Recognition | Global | Excellent UK/Commonwealth |
| Workload | Very high (Diploma) | Moderate-high |
| Flexibility | High | Moderate |
| Cost in Thailand | ฿350K–฿800K | ฿250K–฿700K |

## Our Recommendation

Choose **IB** if your child is globally mobile, self-motivated, and loves research. Choose **British** if your child thrives with structure, prefers depth over breadth, or plans to study in the UK.

Many top schools in Bangkok — like NIST and Shrewsbury — offer both pathways, giving you flexibility as your child grows.
`,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    author: 'Priya Anand, Head of Research',
    date: '2026-04-10',
    category: 'Curriculum Guides',
    readTime: 6,
  },
  {
    id: '3',
    slug: 'top-islamic-schools-southern-thailand',
    title: 'Top Islamic Schools in Southern Thailand: A Complete Guide for Muslim Families',
    excerpt: 'Southern Thailand is home to over 300 Islamic schools. We highlight the best Pondok and academic Islamic schools across Pattani, Yala, Narathiwat, and Songkhla.',
    content: `
## Islamic Education in Southern Thailand

Southern Thailand — particularly the provinces of Pattani, Yala, Narathiwat, and Satun — has one of the highest concentrations of Islamic schools in Southeast Asia. These schools blend traditional Islamic education with modern academic programs, creating graduates who excel in both religious knowledge and worldly subjects.

## Types of Islamic Schools in Thailand

**1. Pondok Schools (Traditional):** Focus on Quran, Hadith, Fiqh, and Arabic. Often residential. Limited formal academic content.

**2. Private Islamic Schools (Modern):** Combine Thai National Curriculum with Islamic Studies, Arabic, and Malay. Government-supported. Most common type for families.

**3. Tahfiz Schools:** Specialized in Quran memorization alongside academics.

## Top Verified Islamic Schools

### Thamavitya Mulniti School (Yala)
One of the most respected Islamic schools in Thailand. Government-supported with Tahfiz + full academic program. Over 6,000 students. Known for exceptional university placement results.

### Darul Maaref Foundation School (Pattani)
A well-established school with 2,000+ students offering Tahfiz + Academic programs for K-12. Highly regarded in the community.

### Sangkhom Islam Wittaya School (Songkhla)
Large award-winning Islamic school in Sadao. Approximately 1,900 students. Known for balancing Islamic values with strong academic outcomes.

### Islamic College of Thailand (Bangkok)
One of the few major Islamic secondary schools in Bangkok. Serves Bangkok's Muslim community with an Islamic + Academic curriculum for 1,000 students.

## What to Look For

- Government registration and accreditation
- Balance of Islamic and academic subjects
- Teacher qualifications and experience
- Boarding options (if needed)
- Community reputation and graduate outcomes

## Finding an Islamic School in Thailand

Use DekDee's Islamic school filter to browse verified Islamic schools by province, program type, and fees.
`,
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=500&fit=crop',
    author: 'Ahmad Hassan, Community Contributor',
    date: '2026-04-05',
    category: 'Islamic Education',
    readTime: 6,
  },
  {
    id: '4',
    slug: 'how-to-get-into-triam-udom-suksa',
    title: 'How to Get Into Triam Udom Suksa: Thailand\'s Most Competitive Public School',
    excerpt: 'Triam Udom Suksa accepts fewer than 1% of applicants. Here\'s what you need to know — from entrance exam preparation to program selection.',
    content: `
## Thailand's Most Prestigious Public High School

Triam Udom Suksa (เตรียมอุดมศึกษา) is consistently ranked Thailand's number one high school. Its graduates dominate Thailand's top universities — Chulalongkorn, Thammasat, Mahidol — and win international academic competitions year after year.

And it costs almost nothing to attend.

## Why Is It So Hard to Get In?

The school accepts around 1,200 students per year across its programs. With tens of thousands of applicants competing for these spots, the acceptance rate is estimated at under 1%.

The entrance exam (the national *O-NET* and Triam Udom's own internal exam) is notoriously difficult, testing Mathematics, Sciences, Thai, Social Studies, and English at a level far above the national standard.

## Programs Offered

- **Science-Math Program** — For future doctors, engineers, and scientists
- **Language Program** — For linguists and liberal arts paths
- **Special Programs** — Additional tracks through affiliated networks

## How to Prepare

**Start Early:** Serious students begin exam preparation in Mathayom 2 (Grade 8).

**Top Prep Courses:** Bangkok has a thriving tutoring industry built around Triam Udom. Popular prep centers include OnDemand, PTC, and IPST affiliated programs.

**Practice Past Exams:** 5–7 years of past entrance exams are available online. Drilling these is essential.

**Math is Non-Negotiable:** Triam Udom's math exam is exceptionally difficult. Students need to score near-perfect to be competitive.

## Alternative: Triam Udom Suksa Pattanakarn

A separate school (same prestigious reputation), Triam Udom Pattanakarn offers Gifted and Language programs for Grades 7–12, with slightly less intense competition than the main campus.

## Final Tips

- Register early — deadlines are strict
- Focus 70% of prep time on Math and Science
- Consider hiring a private tutor who specializes in these exams
- Have a backup plan — apply to Bodindecha, Suankularb, or other top public schools simultaneously
`,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop',
    author: 'Somchai Rattana, Founder',
    date: '2026-03-28',
    category: 'Admissions Tips',
    readTime: 7,
  },
  {
    id: '5',
    slug: 'cost-of-international-school-phuket',
    title: 'Cost of International Schooling in Phuket: The 2026 Complete Breakdown',
    excerpt: 'Phuket has a booming international school market. We break down annual tuition, registration fees, uniforms, and hidden costs — so you can budget accurately.',
    content: `
## International Schools in Phuket: What Does It Really Cost?

Phuket is increasingly popular with remote workers, digital nomads, and expat families. Its international school market has grown significantly, with 10+ accredited international schools serving the island.

But what does it really cost to send your child to an international school in Phuket?

## Annual Tuition Ranges (2026)

| School Tier | Annual Tuition |
|-------------|---------------|
| Budget International | ฿100,000–฿200,000 |
| Mid-range | ฿200,000–฿400,000 |
| Premium | ฿400,000–฿700,000 |
| Elite (BISP, UWC) | ฿600,000–฿900,000+ |

## Top Schools in Phuket

**British International School Phuket (BISP)** — The island's most prestigious school. IB + British curriculum, world-class sports academies. Fees: ~฿550,000–฿800,000/yr.

**UWC Thailand** — A United World College offering the IB Diploma. Highly selective. Fees: ~฿600,000–฿850,000/yr.

**HeadStart International** — Great mid-range option with British curriculum. Fees: ~฿250,000–฿400,000/yr.

## Hidden Costs to Budget For

- **Registration/Application Fee:** ฿5,000–฿30,000 (often non-refundable)
- **Capital Levy / Building Fee:** ฿50,000–฿200,000 (one-time, paid on enrollment)
- **Uniforms:** ฿5,000–฿15,000/year
- **School Bus:** ฿30,000–฿60,000/year
- **Extracurricular Activities:** ฿10,000–฿50,000/year
- **School Trips:** ฿5,000–฿30,000/year

## Total Annual Cost Estimate (All-In)

For a premium school like BISP, expect to budget **฿700,000–฿1,000,000+ per year** when all costs are included.

## Tips for Managing Costs

1. Apply for scholarships — many Phuket schools offer merit-based awards
2. Pay in full annually for a 2–5% discount
3. Check if your employer provides an education allowance
4. Compare the cost-to-quality ratio — mid-range schools often deliver excellent outcomes
`,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop',
    author: 'James Whitfield, Product Lead',
    date: '2026-03-20',
    category: 'School Fees',
    readTime: 6,
  },
  {
    id: '6',
    slug: 'affordable-schools-bangkok-under-100000-thb',
    title: 'Best Affordable Schools in Bangkok Under ฿100,000/Year (2026)',
    excerpt: 'Quality education doesn\'t have to cost a fortune. We list Bangkok\'s top affordable schools — public, bilingual, and private — with verified fees and real parent reviews.',
    content: `
## Great Schools Don't Have to Be Expensive

Bangkok is famous for its elite international schools with astronomical tuition fees. But thousands of families — both Thai and expat — are looking for quality education at a more accessible price point.

This guide covers Bangkok's best schools under ฿100,000 per year — from elite public schools to affordable bilingual private options.

## Top Public Schools (Nearly Free)

Thailand's top public schools are free or charge minimal fees for Thai citizens and permanent residents. They compete fiercely with expensive private schools on academic outcomes.

**Triam Udom Suksa** — Free. The most competitive school in Thailand. Near-impossible to enter, but life-changing for those who do.

**Suankularb Wittayalai** — Free. Historic elite school, consistently produces top university entrants. Strong science-math program.

**Bodindecha School** — Free–฿30,000. Top co-ed public school with Gifted and EP (English Program) tracks.

**Srinakharinwirot Prasarnmit** — Free–฿50,000. Prestigious demonstration school (satit) affiliated with Srinakharinwirot University.

## English Program (EP) Public Schools

Most top public schools offer an English Program track at ฿20,000–฿80,000/year. These programs deliver core subjects in English with Thai teachers and visiting native English instructors.

## Affordable Private Schools (Under ฿100,000)

- **Bangkok Christian College** — ~฿60,000–฿90,000/yr. Strong academic track record.
- **Assumption College Bangrak** — ~฿50,000–฿80,000/yr. Catholic boys school, excellent discipline and outcomes.
- **Mater Dei School** — ~฿60,000–฿80,000/yr. Well-regarded Catholic private school.

## What to Expect at This Price Range

Expect larger class sizes (30–40 students), fewer modern facilities, and less English instruction than at international schools. However, academic outcomes — especially at elite public schools — can rival the best international schools in the country.

## Key Takeaway

For Thai families or expats seeking the best value, Thailand's top public schools are unrivaled. Competition for entry is fierce, but the investment in preparation pays dividends for life.
`,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
    author: 'DekDee Editorial Team',
    date: '2026-03-15',
    category: 'Budget Education',
    readTime: 5,
  },
  {
    id: '7',
    slug: 'chiang-mai-international-schools-guide',
    title: 'International Schools in Chiang Mai: The 2026 Family Guide',
    excerpt: 'Chiang Mai is a favourite destination for digital nomad families. Here\'s our complete guide to international schools in the city, covering fees, curriculum, and community.',
    content: `
## Why Families Are Choosing Chiang Mai

Chiang Mai has evolved from a tourist destination into a world-class base for remote-working families. Lower cost of living, cooler climate, and a welcoming expat community make it increasingly attractive. And the international school scene has grown to match.

## Overview of International Schools in Chiang Mai

Chiang Mai has approximately 8–10 accredited international schools, significantly fewer than Bangkok — but quality is high and class sizes tend to be smaller.

## Top International Schools in Chiang Mai

**Lanna International School Thailand (LIST)**
- Curriculum: WASC-accredited, Cambridge/American hybrid
- Ages: Pre-K to Grade 12
- Fees: ~฿180,000–฿350,000/yr
- Standout: Beautiful campus, strong arts and outdoor education programs

**Chiang Mai International School (CMIS)**
- Curriculum: American (ACSI accredited)
- Ages: Pre-K to Grade 12  
- Fees: ~฿150,000–฿280,000/yr
- Standout: Strong Christian values community, active parent network

**International School Chiang Rai (ISCR)**
- Curriculum: IB
- Ages: 2–18
- Fees: ~฿200,000–฿350,000/yr
- Standout: Small class sizes, genuine IB community feel

**Prem Tinsulanonda International School**
- Curriculum: IB (residential)
- Ages: 11–18
- Fees: ~฿500,000–฿750,000/yr
- Standout: Beautiful lake-side campus, boarding school, strong outdoor programme

## Chiang Mai vs Bangkok: Which is Better for Families?

| Factor | Chiang Mai | Bangkok |
|--------|-----------|---------|
| Cost of Living | Much lower | Higher |
| School Choice | Limited | Extensive |
| Class Sizes | Smaller | Varies |
| Nature Access | Excellent | Limited |
| Career Opportunities | Limited | Extensive |

## Verdict

Chiang Mai is ideal for families prioritising lifestyle, nature, and smaller community feel over breadth of school choice. The international school fees are significantly lower than Bangkok, and the quality at top schools like LIST and Prem Tinsulanonda is genuinely excellent.
`,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    author: 'Napat Limcharoen, Community Manager',
    date: '2026-03-08',
    category: 'School Guides',
    readTime: 6,
  },
  {
    id: '8',
    slug: 'thailand-school-admission-timeline',
    title: 'Thailand International School Admission Timeline: When to Apply and What to Expect',
    excerpt: 'Miss the application window and you could lose your spot at the best schools. Here\'s the complete annual admissions calendar for international schools in Thailand.',
    content: `
## Why Timing Is Everything for School Admissions in Thailand

International schools in Thailand operate on a first-come, first-served basis for many year groups. Popular schools — NIST, ISB, Patana — regularly have waiting lists for certain grade levels. Applying late means being waitlisted at your preferred school.

This guide gives you the complete timeline so you never miss a window.

## The Thailand Academic Year

Thailand's international schools generally follow two calendar systems:

- **International Calendar:** August/September start, June/July end (most international schools)
- **Thai Academic Calendar:** May start, March end (public schools)

## Annual Admissions Calendar

### August–October (Current Year)
- Begin researching schools for the following year
- Attend open houses and information sessions
- Request prospectuses and fee schedules

### November–December
- ⭐ **Priority application window opens at most top schools**
- Submit applications for the following August intake
- Submit supporting documents: school reports, passport copies, vaccination records

### January–February
- Assessments and interviews take place
- Schools review applications and issue conditional offers
- Parents receive placement offers

### February–March
- ⭐ **Deadline to accept placement offers** (often with deposit)
- Paying the deposit (typically ฿30,000–฿100,000) secures the spot

### April–May
- Complete enrollment paperwork
- Uniform fittings and school orientation sign-ups
- International families apply for student visas (ED visa)

### July–August
- New student orientation days
- Academic year begins

## Key Documents You'll Need

- Birth certificate (translated to English if required)
- Previous school reports (last 2 years)
- Recommendation letters from current teachers
- Medical records and vaccination history
- Passport (student and parents)
- Proof of residence in Thailand (for visa purposes)

## Tips for a Smooth Application

1. Apply to 2–3 schools simultaneously — never just one
2. Be honest on school reports; assessments verify academic levels
3. For students with learning support needs, disclose early and honestly
4. Ask about the waiting list policy — some schools offer very transparent waitlist communication

## Summary

Start your research in August, submit applications by November/December, and have your deposit ready by March. Following this timeline gives you the best chance of securing your preferred school.
`,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=500&fit=crop',
    author: 'Priya Anand, Head of Research',
    date: '2026-02-25',
    category: 'Admissions Tips',
    readTime: 6,
  },
  {
    id: '9',
    slug: 'thai-vs-international-school-which-is-better',
    title: 'Thai School vs International School: Which Is Right for Your Child?',
    excerpt: 'Should you send your child to a Thai national school or an international school? We break down the key differences in culture, curriculum, cost, and outcomes.',
    content: `
## The Question Every Expat Parent Faces

When you move to Thailand, one of the first big decisions is whether to enroll your child in an international school or a Thai national school. Both have real merit — and the right choice depends heavily on your family's situation.

## Thai National Schools: What to Expect

Thai national schools follow the curriculum set by the Ministry of Education. Classes are predominantly in Thai, with English taught as a second language.

**Advantages:**
- Free (or very low fees) for most families
- Full cultural immersion — your child will learn Thai quickly
- Strong community bonds
- Excellent academic outcomes at top public schools (Triam Udom, Suankularb)

**Disadvantages:**
- Primarily in Thai — hard for non-Thai-speaking children initially
- Large class sizes (40+ students)
- Curriculum less internationally portable

## International Schools: What to Expect

International schools teach primarily in English using globally recognised curricula (IB, British, American).

**Advantages:**
- English-medium instruction
- Globally portable qualification (IB Diploma, IGCSE, AP)
- Smaller class sizes
- Familiar environment for expat children
- Easier transition if you relocate again

**Disadvantages:**
- Very high fees (฿150,000–฿800,000+/year)
- Less Thai cultural immersion
- Can create an expat bubble

## The Hybrid Option: Thai Bilingual Schools

An increasingly popular middle ground. Schools like Satit Chula and several private bilingual institutions offer English-medium instruction at a fraction of international school fees.

Fees typically range from ฿30,000–฿150,000/year. Curriculum is Thai national-accredited with substantial English content.

## Which Should You Choose?

| Situation | Recommendation |
|-----------|---------------|
| Short-term stay (1–2 years) | International school |
| Long-term stay in Thailand | Thai or Bilingual |
| Child aged 5 or under | Thai immersion works well |
| Teenager mid-high school | International for continuity |
| Budget-conscious family | Thai public (top schools) |
| Globally mobile family | International (IB) |

## The Bottom Line

There's no universally right answer. Young children adapt remarkably well to Thai schools. Older children or those who may relocate again benefit from the consistency of international education. Use DekDee's comparison tool to evaluate specific schools side by side.
`,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    author: 'James Whitfield, Product Lead',
    date: '2026-02-15',
    category: 'Parenting Advice',
    readTime: 7,
  },
  {
    id: '10',
    slug: 'relocating-to-thailand-school-guide-expats',
    title: 'Relocating to Thailand? Your Complete School Guide for Expat Families (2026)',
    excerpt: 'Moving to Thailand is exciting — but finding the right school for your children can be overwhelming. This step-by-step guide covers everything you need to know before you arrive.',
    content: `
## Welcome to Thailand: Your Children's Education Sorted

Thailand attracts thousands of expat families every year — drawn by the lifestyle, culture, warm weather, and lower cost of living. But among the many logistics of relocation, finding the right school is always the most emotionally charged task.

This guide is your step-by-step roadmap.

## Step 1: Research Before You Arrive

Don't wait until you land in Thailand to start researching schools. Begin at least 6 months before your planned move date.

- Use DekDee to browse schools by city, curriculum, and budget
- Join expat parent Facebook groups (Bangkok Expats, ISB Parent Community, etc.)
- Contact 3–5 schools and request prospectuses and fee schedules

## Step 2: Choose Your City First

School quality and availability varies significantly by location:

- **Bangkok:** Largest selection, every curriculum available, fees are highest
- **Chiang Mai:** Excellent international schools, significantly lower fees, smaller community
- **Phuket:** Growing school scene, beach lifestyle, BISP and UWC are world-class
- **Pattaya:** Limited options, primarily for short-term or budget families

## Step 3: Understand the Visa Requirements

Children attending school in Thailand require an **Education (ED) Visa**, which is tied to school enrollment. Most international schools manage this process for you, but you'll need:

- Enrollment letter from the school
- Passport with sufficient validity
- Passport photos
- Application fee (approx. ฿2,000)

## Step 4: Budget Realistically

Beyond tuition, budget for:
- One-time registration/capital levy: ฿50,000–฿200,000
- Annual tuition: ฿150,000–฿800,000+
- Uniforms, activities, trips: ฿30,000–฿100,000/year
- School bus: ฿30,000–฿60,000/year

## Step 5: Visit Schools in Person

If possible, schedule school visits before making a final decision. Look for:
- Classroom atmosphere and student engagement
- Teacher qualifications and experience
- Facilities (labs, sports, library)
- Communication with parents

## Step 6: Apply Early

Top schools fill up quickly. Apply at least 6 months before your intended start date. Bring all required documents (previous school reports, medical records, birth certificate).

## Common Mistakes Expat Parents Make

1. **Applying too late** and being waitlisted at preferred schools
2. **Choosing a school solely based on a friend's recommendation** without visiting
3. **Underestimating the total cost** of schooling (ignoring one-time fees)
4. **Not considering the child's social needs** — some children thrive in large schools, others in small communities

## DekDee Is Here to Help

Use our comparison tool to shortlist 2–3 schools, read verified parent reviews, and request information directly from schools. We've helped 50,000+ families navigate Thailand's education landscape — and we're here to help yours too.
`,
    image: 'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?w=800&h=500&fit=crop',
    author: 'DekDee Editorial Team',
    date: '2026-02-05',
    category: 'Expat Guide',
    readTime: 8,
  },
]




export const testimonials = [
  {
    id: '1',
    name: 'Sompong Tanaka',
    role: 'Dad of 2 kids',
    content: 'We spent months visiting schools before finding DekDee. Wish we had found it sooner - would have saved us so many Saturday mornings driving around Bangkok!',
    avatar: 'ST',
  },
  {
    id: '2',
    name: 'Jennifer Martinez',
    role: 'Moved from California',
    content: 'My husband got transferred to Bangkok and I panicked about schools. A friend sent me DekDee and within a week, we had shortlisted 3 schools. Total lifesaver.',
    avatar: 'JM',
  },
  {
    id: '3',
    name: 'Ahmad Hassan',
    role: 'Father of 3',
    content: 'So hard to find good info about Islamic schools in Thailand. This site actually has real reviews from other Muslim families. Our daughter starts next semester!',
    avatar: 'AH',
  },
]

export const stats = [
  { label: 'Schools Listed', value: '100+' },
  { label: 'Happy Families', value: '5,000+' },
  { label: 'Reviews', value: '1,500+' },
  { label: 'Cities Covered', value: '10+' },
]
