
export class Student {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: Date;
  address: Address = new Address();
  gradeId: number;
  grade?: Grade;

  constructor() { };
}

export class Address {
  id: number;
  address1?: string;
  city?: string;
  state?: string;
  country?: string;
}

export class Grade  {
  id: number;
  name: string;
  section: string;
}
