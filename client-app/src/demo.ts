export interface ICar {
  color: string;
  model: string;
  topSpeed?: number;
}

const car: ICar = {
  color: 'blue',
  model: 'BMW',
};
const car2: ICar = {
  color: 'red',
  model: 'Mercedes',
};

const multiply = (x: number, y: number): string => {
  return (x * y).toString();
};


export const cars = [car,car2]