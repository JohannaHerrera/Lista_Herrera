export class Alumno
{
    constructor
    (
        public id: number,
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public secondLastName: string,
        public age: number,
        public email: string,
        public status: boolean,
    ){}
}