
export class Register {
  name: string;
  username: string;
  email: string;
  role: string[];
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  constructor(username: string, email: string, password: string, firstName: string, lastName: string,
              phoneNumber: string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = ['ROLE_CUSTOMER'];
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
}
