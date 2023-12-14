<script lang="ts" setup>
import {plainToInstance} from 'class-transformer'

class User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;

    constructor(id: number, firstName: string, lastName: string, age: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

const jsonData=[
  {
    "id": 1,
    "firstName": "Johny",
    "lastName": "Cage",
    "age": 27
  },
  {
    "id": 2,
    "firstName": "Ismoil",
    "lastName": "Somoni",
    "age": 50
  },
  {
    "id": 3,
    "firstName": "Luke",
    "lastName": "Dacascos",
    "age": 12
  }
]

const resultUser: User[]=plainToInstance(User,jsonData);

console.log(resultUser)

</script>