export interface Driver {
  name: string;
  team: string;
  points: number;
}

// Edit this list to match your dashboard figures. Points are sample values.
export const drivers: Driver[] = [
  { name: "Max Verstappen", team: "Red Bull Racing", points: 437 },
  { name: "Lewis Hamilton", team: "Mercedes", points: 356 },
  { name: "Charles Leclerc", team: "Ferrari", points: 319 },
  { name: "Lando Norris", team: "McLaren", points: 308 },
  { name: "George Russell", team: "Mercedes", points: 275 },
  { name: "Oscar Piastri", team: "McLaren", points: 242 },
  { name: "Carlos Sainz", team: "Ferrari", points: 196 },
  { name: "Sergio Perez", team: "Red Bull Racing", points: 152 },
];
