class People {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  info(){
    console.log(`my name is ${this.name} my age is ${this.age}`);
  }
}


class Student extends People {
  constructor(name, age, school){
    super(...arguments)
    this.school = school
    // this.talk = this.talk.bind(this)
  }

  talk(){
    this.info();
    console.log(`my school is ${this.school}`);
  }
}

const gjr = new Student('gjr', '24', 'hnu');
gjr.talk()
// gjr.info()
