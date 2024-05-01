#! /usr/bin/env node

import inquirer  from "inquirer";  
import chalk from "chalk"; 
interface  Course {
    name: string;
    fee: number;
  }
  
  class Student {
    private name: string;
    private id: number;
    private courses: Course[];
    private balance: number;
  
    constructor(name: string) {
      this.name = name;
      this.id = this.generateUniqueID();
      this.courses = [];
      this.balance = 0;
    }
  
    private generateUniqueID(): number {
      // Improved unique ID generation with loop prevention
      let id: number;
      do {
        id = Math.floor(Math.random() * 100000) + 10000; // 5-digit range
      } while (this.checkForDuplicateID(id)); // Check for existing IDs
      return id;
    }
  
    private checkForDuplicateID(id: number): boolean {
      // Add code to check student list for duplicate IDs (replace with actual storage)
      // This example assumes a hypothetical student list for demonstration
      const studentList: Student[] = []; // Replace with your student storage mechanism
      return studentList.some(student => student.id === id);
    }
  
    public enroll(course: Course): void {
      this.courses.push(course);
      this.balance += course.fee;
    }
  
    public viewBalance(): number {
      return this.balance;
    }
  
    public payFees(amount: number): void {
      if (amount <= 0) {
        console.error ("\nInvalid payment amount. Please enter a positive value.");
        return;
      }
      this.balance -= amount;
      console.log(chalk.yellow.bold(`\nPayment of ${amount} received. Remaining balance: ${this.balance}`));
    }
  
    public showStatus(): void {
      console.log(chalk.green.bold(`Student Name: ${this.name}`));
      console.log(chalk.blue.bold (`Student ID: ${this.id}`));
      console.log(chalk.green.bold("Enrolled Courses:"));
      this.courses.forEach(course => console.log(chalk.blue.bold(`  - ${course.name}`)));
                                                            
      console.log(chalk.y.bold.red(`Balance: ${this.balance}`));
    }
  }
  
  // Example usage
  const course1: Course =  { name:("IT"), fee: 5000};
  const course2: Course = { name: "Science", fee: 500};
  const course3: Course = { name: "Math", fee: 1000};
  const course4: Course = { name: "English", fee: 2000};
 
  
const student1 = new Student("Warda");
student1.enroll(course1);
student1.enroll(course2);
student1.viewBalance(); 
student1.payFees(5000); 
student1.showStatus(); // Display student details with courses and balance
const student2 = new Student("Afifa");
student2.enroll(course3);
student2.enroll(course4);
student2.viewBalance();
student2.payFees(2000);
student2.showStatus(); // Display student details with courses and balance
const student3 = new Student("wahida");
student3.enroll(course1);
student3.enroll(course4);
student3.viewBalance(); 
student3.payFees(6000); 
student3.showStatus(); // Display student details with courses and balance
const student4 = new Student("moon");
student4.enroll(course3);
student4.enroll(course4);
student4.viewBalance();
student4.payFees(2000);
student4.showStatus(); // Display student details with courses and balance


