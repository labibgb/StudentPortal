export interface Student {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: Date;
  address: {
    [key: string]: Address
  };
  gradeId: number;
  grade?: {
    [key: string]: Grade
  };
}

export interface Address{
  id: number;
  address1?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface Grade {
  id: number;
  standard?: string;
  section?: string;
}
