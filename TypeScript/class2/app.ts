// classes in typescript////

// class Student {
//   name: string;
//   rollNo: number;
//   private skills: string[] = [];

//   constructor(n: string, r: number) {
//     this.name = n;
//     this.rollNo = r;
//   }
//   addSkill(skill: string) {
//     this.skills.push(skill);
//   }

//   getSkills() {
//     return this.skills;
//   }
// }

// const Student1 = new Student("maani", 10002);
// Student1.addSkill("javaScript");

// class Student {
//     name : string;
//     age : number;
//     city : string;
//     private skills : string[] = []

//     constructor(n:string, a :number , c:string){
//      this.name = n;
//      this.age = a;
//      this.city = c
//     }

//     addSkill (skill : string){
//         this.skills.push(skill);
//     }
//     getSkills(){
//         return this.skills;
//     }

// }

// const student1 = new Student("rehman", 21,"karachi");
// student1.addSkill("javaScript");

///////////////////////New Approach////////////////////////
// short hand initialization

// class Student {
//   private skills: string[] = [];

//   constructor(public name: string, public age: number, public city: string) {}

//   addSkill(skill: string) {
//     this.skills.push(skill);
//   }
//   getSkills() {
//     return this.skills;
//   }
// }

// const student1 = new Student("rehman", 21, "karachi");
// student1.addSkill("javaScript");

//////////////////inheritence///////////

class Student {
  private skills: string[] = [];

  constructor(public name: string, public age: number) {}

  addSkill(skill: string) {
    this.skills.push(skill);
  }
  getSkills() {
    return this.skills;
  }
}

////////////////////////// new class inherit//////////

class VStudent extends Student {
  private canVolunterIn: string[] = [];
  static id: string = "78-py";
  constructor(public name: string, public readonly age: number) {
    super(name, age);
  }
  addVSkill(skill: string) {
    this.canVolunterIn.push(skill);
  }

  get willVolunter() {
    return this.canVolunterIn;
  }
  set willVolunter(skills: string[]) {
    for (const skill of skills) {
      if (!skill) {
        return;
      }
    }
    this.canVolunterIn = skills;
  }
}

const student1 = new VStudent("rehman", 21);
student1.addVSkill("Management");
student1.willVolunter = ["orange"];
console.log(student1.willVolunter);
console.log(VStudent.id);

//////////////difference b/w private and protected is that
// child cant access private keys as well as protected child access protected key

//////////////static///////
// ES6 includes static members and so does TypeScript. The static members of a class are accessed using the class name and dot notation, without creating an object e.g. <ClassName>.<StaticMember>.

//              Abstract Classes
// Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members. The abstract keyword is used to define abstract classes as well as abstract methods within an abstract clas




                    //   SINGLETONS
// singletons ek pattern ha jo kisi bhi class ko  resricted krdeta hain k uska
// sirf ek hi object bne