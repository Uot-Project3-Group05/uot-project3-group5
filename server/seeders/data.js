const CARD_DATA_ELEMENTS = [{ "front": "Hydrogen", "back": "H", "cardId": 1 }, { "front": "Helium", "back": "He", "cardId": 2 }, { "front": "Lithium", "back": "Li", "cardId": 3 }, { "front": "Beryllium", "back": "Be", "cardId": 4 }, { "front": "Boron", "back": "B", "cardId": 5 }, { "front": "Carbon", "back": "C", "cardId": 6 }, { "front": "Nitrogen", "back": "N", "cardId": 7 }, { "front": "Oxygen", "back": "O", "cardId": 8 }, { "front": "Fluorine", "back": "F", "cardId": 9 }, { "front": "Neon", "back": "Ne", "cardId": 10 }, { "front": "Sodium", "back": "Na", "cardId": 11 }, { "front": "Magnesium", "back": "Mg", "cardId": 12 }, { "front": "Aluminum", "back": "Al", "cardId": 13 }, { "front": "Silicon", "back": "Si", "cardId": 14 }, { "front": "Phosphorus", "back": "P", "cardId": 15 }, { "front": "Sulfur", "back": "S", "cardId": 16 }, { "front": "Chlorine", "back": "Cl", "cardId": 17 }, { "front": "Argon", "back": "Ar", "cardId": 18 }, { "front": "Potassium", "back": "K", "cardId": 19 }, { "front": "Calcium", "back": "Ca", "cardId": 20 }, { "front": "Scandium", "back": "Sc", "cardId": 21 }, { "front": "Titanium", "back": "Ti", "cardId": 22 }, { "front": "Vanadium", "back": "V", "cardId": 23 }, { "front": "Chromium", "back": "Cr", "cardId": 24 }, { "front": "Manganese", "back": "Mn", "cardId": 25 }, { "front": "Iron", "back": "Fe", "cardId": 26 }, { "front": "Cobalt", "back": "Co", "cardId": 27 }, { "front": "Nickel", "back": "Ni", "cardId": 28 }, { "front": "Copper", "back": "Cu", "cardId": 29 }, { "front": "Zinc", "back": "Zn", "cardId": 30 }, { "front": "Gallium", "back": "Ga", "cardId": 31 }, { "front": "Germanium", "back": "Ge", "cardId": 32 }, { "front": "Arsenic", "back": "As", "cardId": 33 }, { "front": "Selenium", "back": "Se", "cardId": 34 }, { "front": "Bromine", "back": "Br", "cardId": 35 }, { "front": "Krypton", "back": "Kr", "cardId": 36 }, { "front": "Rubidium", "back": "Rb", "cardId": 37 }, { "front": "Strontium", "back": "Sr", "cardId": 38 }, { "front": "Yttrium", "back": "Y", "cardId": 39 }, { "front": "Zirconium", "back": "Zr", "cardId": 40 }, { "front": "Niobium", "back": "Nb", "cardId": 41 }, { "front": "Molybdenum", "back": "Mo", "cardId": 42 }, { "front": "Technetium", "back": "Tc", "cardId": 43 }, { "front": "Ruthenium", "back": "Ru", "cardId": 44 }, { "front": "Rhodium", "back": "Rh", "cardId": 45 }, { "front": "Palladium", "back": "Pd", "cardId": 46 }, { "front": "Silver", "back": "Ag", "cardId": 47 }, { "front": "Cadmium", "back": "Cd", "cardId": 48 }, { "front": "Indium", "back": "In", "cardId": 49 }, { "front": "Tin", "back": "Sn", "cardId": 50 }, { "front": "Antimony", "back": "Sb", "cardId": 51 }, { "front": "Tellurium", "back": "Te", "cardId": 52 }, { "front": "Iodine", "back": "I", "cardId": 53 }, { "front": "Xenon", "back": "Xe", "cardId": 54 }, { "front": "Cesium", "back": "Cs", "cardId": 55 }, { "front": "Barium", "back": "Ba", "cardId": 56 }, { "front": "Lanthanum", "back": "La", "cardId": 57 }, { "front": "Cerium", "back": "Ce", "cardId": 58 }, { "front": "Praseodymium", "back": "Pr", "cardId": 59 }, { "front": "Neodymium", "back": "Nd", "cardId": 60 }, { "front": "Promethium", "back": "Pm", "cardId": 61 }, { "front": "Samarium", "back": "Sm", "cardId": 62 }, { "front": "Europium", "back": "Eu", "cardId": 63 }, { "front": "Gadolinium", "back": "Gd", "cardId": 64 }, { "front": "Terbium", "back": "Tb", "cardId": 65 }, { "front": "Dysprosium", "back": "Dy", "cardId": 66 }, { "front": "Holmium", "back": "Ho", "cardId": 67 }, { "front": "Erbium", "back": "Er", "cardId": 68 }, { "front": "Thulium", "back": "Tm", "cardId": 69 }, { "front": "Ytterbium", "back": "Yb", "cardId": 70 }, { "front": "Lutetium", "back": "Lu", "cardId": 71 }, { "front": "Hafnium", "back": "Hf", "cardId": 72 }, { "front": "Tantalum", "back": "Ta", "cardId": 73 }, { "front": "Tungsten", "back": "W", "cardId": 74 }, { "front": "Rhenium", "back": "Re", "cardId": 75 }, { "front": "Osmium", "back": "Os", "cardId": 76 }, { "front": "Iridium", "back": "Ir", "cardId": 77 }, { "front": "Platinum", "back": "Pt", "cardId": 78 }, { "front": "Gold", "back": "Au", "cardId": 79 }, { "front": "Mercury", "back": "Hg", "cardId": 80 }, { "front": "Thallium", "back": "Tl", "cardId": 81 }, { "front": "Lead", "back": "Pb", "cardId": 82 }, { "front": "Bismuth", "back": "Bi", "cardId": 83 }, { "front": "Polonium", "back": "Po", "cardId": 84 }, { "front": "Astatine", "back": "At", "cardId": 85 }, { "front": "Radon", "back": "Rn", "cardId": 86 }, { "front": "Francium", "back": "Fr", "cardId": 87 }, { "front": "Radium", "back": "Ra", "cardId": 88 }, { "front": "Actinium", "back": "Ac", "cardId": 89 }, { "front": "Thorium", "back": "Th", "cardId": 90 }, { "front": "Protactinium", "back": "Pa", "cardId": 91 }, { "front": "Uranium", "back": "U", "cardId": 92 }, { "front": "Neptunium", "back": "Np", "cardId": 93 }, { "front": "Plutonium", "back": "Pu", "cardId": 94 }, { "front": "Americium", "back": "Am", "cardId": 95 }, { "front": "Curium", "back": "Cm", "cardId": 96 }, { "front": "Berkelium", "back": "Bk", "cardId": 97 }, { "front": "Californium", "back": "Cf", "cardId": 98 }, { "front": "Einsteinium", "back": "Es", "cardId": 99 }, { "front": "Fermium", "back": "Fm", "cardId": 100 }, { "front": "Mendelevium", "back": "Md", "cardId": 101 }, { "front": "Nobelium", "back": "No", "cardId": 102 }, { "front": "Lawrencium", "back": "Lr", "cardId": 103 }, { "front": "Rutherfordium", "back": "Rf", "cardId": 104 }, { "front": "Dubnium", "back": "Db", "cardId": 105 }, { "front": "Seaborgium", "back": "Sg", "cardId": 106 }, { "front": "Bohrium", "back": "Bh", "cardId": 107 }, { "front": "Hassium", "back": "Hs", "cardId": 108 }, { "front": "Meitnerium", "back": "Mt", "cardId": 109 }, { "front": "Darmstadtium", "back": "Ds", "cardId": 110 }, { "front": "Roentgenium", "back": "Rg", "cardId": 111 }, { "front": "Copernicium", "back": "Cn", "cardId": 112 }, { "front": "Nihonium", "back": "Nh", "cardId": 113 }, { "front": "Flerovium", "back": "Fl", "cardId": 114 }, { "front": "Moscovium", "back": "Mc", "cardId": 115 }, { "front": "Livermorium", "back": "Lv", "cardId": 116 }, { "front": "Tennessine", "back": "Ts", "cardId": 117 }, { "front": "Oganesson", "back": "Og", "cardId": 118 }];
const CARD_DATA_FICTION = [{ "front": "To Kill a Mockingbird", "back": "Harper Lee", "cardId": 1 }, { "front": "Jane Eyre", "back": "Charlotte Brontë", "cardId": 2 }, { "front": "The Catcher in the Rye", "back": "J.D. Salinger", "cardId": 3 }, { "front": "Pride and Prejudice", "back": "Jane Austen", "cardId": 4 }, { "front": "1984", "back": "George Orwell", "cardId": 5 }, { "front": "Hamlet", "back": "William Shakespeare", "cardId": 6 }, { "front": "Fahrenheit 451", "back": "Ray Bradbury", "cardId": 7 }, { "front": "Brave New World", "back": "Aldous Huxley", "cardId": 8 }, { "front": "The Adventures of Huckleberry Finn", "back": "Mark Twain", "cardId": 9 }, { "front": "The Great Gatsby", "back": "F. Scott Fitzgerald", "cardId": 10 }, { "front": "Green Eggs and Ham", "back": "Dr. Seuss", "cardId": 11 }, { "front": "Wuthering Heights", "back": "Emily Brontë", "cardId": 12 }, { "front": "Lord of the Flies", "back": "William Golding", "cardId": 13 }, { "front": "Little Women", "back": "Louisa May Alcott", "cardId": 14 }, { "front": "Alice in Wonderland", "back": "Lewis Carroll", "cardId": 15 }, { "front": "The Secret Garden", "back": "Frances Hodgson Burnett", "cardId": 16 }, { "front": "Of Mice and Men", "back": "John Steinbeck", "cardId": 17 }, { "front": "Gone with the Wind", "back": "Margaret Mitchell", "cardId": 18 }, { "front": "Frankenstein", "back": "Mary Wollstonecraft Shelley", "cardId": 19 }, { "front": "Slaughterhouse-Five", "back": "Kurt Vonnegut Jr.", "cardId": 20 }, { "front": "The Little Prince", "back": "Antoine de Saint-Exupéry", "cardId": 21 }, { "front": "Where the Sidewalk Ends", "back": "Shel Silverstein", "cardId": 22 }, { "front": "The Princess Bride", "back": "William Goldman", "cardId": 23 }, { "front": "One Hundred Years of Solitude", "back": "Gabriel García Márquez", "cardId": 24 }, { "front": "The Picture of Dorian Gray", "back": "Oscar Wilde", "cardId": 25 }, { "front": "The Count of Monte Cristo", "back": "Alexandre Dumas", "cardId": 26 }, { "front": "One Flew Over the Cuckoo's Nest", "back": "Ken Kesey", "cardId": 27 }, { "front": "The Odyssey", "back": "Homer", "cardId": 28 }, { "front": "Dracula", "back": "Bram Stoker", "cardId": 29 }, { "front": "Life of Pi", "back": "Yann Martel", "cardId": 30 }, { "front": "War and Peace", "back": "Leo Tolstoy", "cardId": 31 }, { "front": "Memoirs of a Geisha", "back": "Arthur Golden", "cardId": 32 }, { "front": "The Kite Runner", "back": "Khaled Hosseini", "cardId": 33 }, { "front": "The Book Thief", "back": "Markus Zusak", "cardId": 34 }, { "front": "Crime and Punishment", "back": "Fyodor Dostoyevsky", "cardId": 35 }, { "front": "A Tale of Two Cities", "back": "Charles Dickens", "cardId": 36 }, { "front": "The Color Purple", "back": "Alice Walker", "cardId": 37 }, { "front": "And Then There Were None", "back": "Agatha Christie", "cardId": 38 }, { "front": "Catch-22", "back": "Joseph Heller", "cardId": 39 }, { "front": "Anne of Green Gables", "back": "L.M. Montgomery", "cardId": 40 }, { "front": "Les Misérables", "back": "Victor Hugo", "cardId": 41 }, { "front": "The Joy Luck Club", "back": "Amy Tan", "cardId": 42 }, { "front": "The Stranger", "back": "Albert Camus", "cardId": 43 }, { "front": "Lolita", "back": "Vladimir Nabokov", "cardId": 44 }, { "front": "The Stand", "back": "Stephen King", "cardId": 45 }, { "front": "The Bell Jar", "back": "Sylvia Plath", "cardId": 46 }, { "front": "The Sun Also Rises", "back": "Ernest Hemingway", "cardId": 47 }, { "front": "Invisible Man", "back": "Ralph Ellison", "cardId": 48 }, { "front": "The Brothers Karamazov", "back": "Fyodor Dostoyevsky", "cardId": 49 }, { "front": "The Wind-Up Bird Chronicle", "back": "Haruki Murakami", "cardId": 50 }, { "front": "Ulysses", "back": "James Joyce", "cardId": 51 }, { "front": "The Fountainhead", "back": "Ayn Rand", "cardId": 52 }, { "front": "Fight Club", "back": "Chuck Palahniuk", "cardId": 53 }, { "front": "Don Quixote", "back": "Miguel de Cervantes Saavedra", "cardId": 54 }, { "front": "Little House on the Prairie", "back": "Laura Ingalls Wilder", "cardId": 55 }, { "front": "The Lord of the Rings", "back": "J.R.R. Tolkien", "cardId": 56 }, { "front": "Cheaper by the Dozen", "back": "Frank B. Gilbreth Jr.", "cardId": 57 }, { "front": "All Quiet on the Western Front", "back": "Erich Maria Remarque", "cardId": 58 }, { "front": "The Namesake", "back": "Jhumpa Lahiri", "cardId": 59 }, { "front": "The Screwtape Letters", "back": "C.S. Lewis", "cardId": 60 }, { "front": "The Strange Case of Dr. Jekyll and Mr. Hyde", "back": "Robert Louis Stevenson", "cardId": 61 }, { "front": "The Time Machine", "back": "H.G. Wells", "cardId": 62 }, { "front": "The Swiss Family Robinson", "back": "Johann David Wyss", "cardId": 63 }, { "front": "The Outsiders", "back": "S.E. Hinton", "cardId": 64 }, { "front": "Heart of Darkness", "back": "Joseph Conrad", "cardId": 65 }, { "front": "The Last Lecture", "back": "Randy Pausch", "cardId": 66 }, { "front": "Gulliver's Travels", "back": "Jonathan Swift", "cardId": 67 }, { "front": "The Gift of the Magi", "back": "O. Henry", "cardId": 68 }, { "front": "Charlotte's Web", "back": "E.B. White", "cardId": 69 }, { "front": "Paradise Lost", "back": "John Milton", "cardId": 70 }, { "front": "Flowers for Algernon", "back": "Daniel Keyes", "cardId": 71 }, { "front": "Robinson Crusoe", "back": "Daniel Defoe", "cardId": 72 }, { "front": "V for Vendetta", "back": "Alan Moore", "cardId": 73 }, { "front": "Never Let Me Go", "back": "Kazuo Ishiguro", "cardId": 74 }, { "front": "The Alchemist", "back": "Paulo Coelho", "cardId": 75 }];
const CARD_DATA_USSTATES = [{ "front": "Montgomery", "back": "Alabama", "cardId": 1 }, { "front": "Juneau", "back": "Alaska", "cardId": 2 }, { "front": "Phoenix", "back": "Arizona", "cardId": 3 }, { "front": "Little Rock", "back": "Arkansas", "cardId": 4 }, { "front": "Sacramento", "back": "California", "cardId": 5 }, { "front": "Denver", "back": "Colorado", "cardId": 6 }, { "front": "Hartford", "back": "Connecticut", "cardId": 7 }, { "front": "Dover", "back": "Delaware", "cardId": 8 }, { "front": "Tallahassee", "back": "Florida", "cardId": 9 }, { "front": "Atlanta", "back": "Georgia", "cardId": 10 }, { "front": "Honolulu", "back": "Hawaii", "cardId": 11 }, { "front": "Boise", "back": "Idaho", "cardId": 12 }, { "front": "Springfield", "back": "Illinois", "cardId": 13 }, { "front": "Indianapolis", "back": "Indiana", "cardId": 14 }, { "front": "Des Moines", "back": "Iowa", "cardId": 15 }, { "front": "Topeka", "back": "Kansas", "cardId": 16 }, { "front": "Frankfort", "back": "Kentucky", "cardId": 17 }, { "front": "Baton Rouge", "back": "Louisiana", "cardId": 18 }, { "front": "Augusta", "back": "Maine", "cardId": 19 }, { "front": "Annapolis", "back": "Maryland", "cardId": 20 }, { "front": "Boston", "back": "Massachusetts", "cardId": 21 }, { "front": "Lansing", "back": "Michigan", "cardId": 22 }, { "front": "Saint Paul", "back": "Minnesota", "cardId": 23 }, { "front": "Jackson", "back": "Mississippi", "cardId": 24 }, { "front": "Jefferson City", "back": "Missouri", "cardId": 25 }, { "front": "Helana", "back": "Montana", "cardId": 26 }, { "front": "Lincoln", "back": "Nebraska", "cardId": 27 }, { "front": "Carson City", "back": "Nevada", "cardId": 28 }, { "front": "Concord", "back": "New Hampshire", "cardId": 29 }, { "front": "Trenton", "back": "New Jersey", "cardId": 30 }, { "front": "Santa Fe", "back": "New Mexico", "cardId": 31 }, { "front": "Albany", "back": "New York", "cardId": 32 }, { "front": "Raleigh", "back": "North Carolina", "cardId": 33 }, { "front": "Bismarck", "back": "North Dakota", "cardId": 34 }, { "front": "Columbus", "back": "Ohio", "cardId": 35 }, { "front": "Oklahoma City", "back": "Oklahoma", "cardId": 36 }, { "front": "Salem", "back": "Oregon", "cardId": 37 }, { "front": "Harrisburg", "back": "Pennsylvania", "cardId": 38 }, { "front": "Providence", "back": "Rhode Island", "cardId": 39 }, { "front": "Columbia", "back": "South Carolina", "cardId": 40 }, { "front": "Pierre", "back": "South Dakota", "cardId": 41 }, { "front": "Nashville", "back": "Tennessee", "cardId": 42 }, { "front": "Austin", "back": "Texas", "cardId": 43 }, { "front": "Salt Lake City", "back": "Utah", "cardId": 44 }, { "front": "Montpelier", "back": "Vermont", "cardId": 45 }, { "front": "Richmond", "back": "Virginia", "cardId": 46 }, { "front": "Olympia", "back": "Washington", "cardId": 47 }, { "front": "Charleston", "back": "West Virginia", "cardId": 48 }, { "front": "Madison", "back": "Wisconsin", "cardId": 49 }, { "front": "Cheyenne", "back": "Wyoming", "cardId": 50 }];

const DECK_DATA = [{
  deckname: "Periodic Table",
  description: "Memorize each of the 118 elements on the periodic table?",
  cards: CARD_DATA_ELEMENTS
},
{
  deckname: "Famous Fiction",
  description: "Match famous books with their associated authors.",
  cards: CARD_DATA_FICTION
},
{
  deckname: "US States and Capitols",
  description: "Can you name all 50 States with their capitals?",
  cards: CARD_DATA_USSTATES
}];

module.exports = DECK_DATA;