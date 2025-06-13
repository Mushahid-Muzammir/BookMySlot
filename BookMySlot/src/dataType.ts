

export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  fullName: string;
  email: string;
  password: string;
}

export type Sport = {
  sportId: number;
  name: string;
  imageUrl: string;
};

export type Court = {
  courtId: number;
  name: string;
  location: string;
  price: number;
  sportId: number;
  imageUrl: string;
};

export type CourtImage = {
  courtId: number;
  imageUrl: string;
};

