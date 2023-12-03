class human{
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends human{
    name = 'Max';
    gender = 'female';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();