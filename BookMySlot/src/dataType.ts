

export interface LoginForm {
  email: string;
  password: string;
}

export interface User {
  id : number,
  email: string;
  name: string;
}

export interface RegisterForm {
  fullName: string;
  email: string;
  password: string;
}

export type Testimonial = {
  image: string;
  name: string;
  role: string;
  text: string;
}

export type Sport = {
  sportId: number;
  name: string;
  imageUrl: string;
};

export type Court = {
  courtId: number;
  name: string;
  description : string;
  location: string;
  contactNumber: string;
  price: number;
  sportId: number;
  imageUrl: string;
};

export type CourtImage = {
  courtId: number;
  imageUrl: string;
};

export type AvailableSlots = {
  startTime : string,
  endTime : string,
  status : string
};

export type Booking = {
  courtId: number;
  sportName: string;
  name: string;
  date : string,
  startTime : string,
  endTime : string, 
  bookingId : number, 
  contact : string, 
  sport : string, 
};

export type BookingCountByDate = {
  date: string;
  count: number;
};


