import { UserModel } from "../main/users/model/UserModel"

export const sharedUsers: UserModel[] = [
    {
        id: 1,
        firstName : 'John',
        lastName: 'Doe',
        age: "27",
        company: 'Microsoft',
        department: 'Front-End',
        gender : 'male',
        email : 'JohnDoe@gmail.com',
        activated : true
      },
      {
        id: 2,
        firstName: 'Michael',
        lastName: 'Jackson',
        age: "37",
        company: 'Universal',
        department: 'Back-End',
        gender : 'male',
        email: 'MichaelJackson@gmail.com',
        activated : true
      },
      {
        id: 3,
        firstName: 'Phil',
        lastName: 'Buzz',
        age: "21",
        company: 'IsSoft',
        department: 'Front-End',
        gender : 'male',
        email: 'PhilBuzz@gmail.com',
        activated : true
      },
      {
        id: 4,
        firstName: 'Hanna',
        lastName: 'Montana',
        age : "33",
        company:'Pink-Software',
        department:'Back-End',
        gender : 'female',
        email: 'HannaMontana@gmail.com',
        activated : false
      },
      {
        id: 5,
        firstName: 'Nobody',
        lastName: 'Particular',
        age: "25",
        company: '',
        department: '',
        gender : 'male',
        email: 'NobodyParticular@gmail.com',
        activated : false
      }
]