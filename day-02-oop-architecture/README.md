# Day 2 - OOP, Collections and Application Architecture

## What This Project Demonstrates
A small Java console program modeling a booking domain (User, Customer,
Service, Booking) to practice OOP principles and Java Collections.

## OOP Concepts Used
- **Class & Object:** User, Customer, Service, Booking
- **Inheritance:** Customer extends User
- **Encapsulation:** private fields with public getters, and a
  controlled confirm() method on Booking
- **Polymorphism:** overridden toString() methods on Customer and
  Booking
- **Abstraction:** NotificationService interface with EmailNotification
  as its implementation

## Collections Used
- **ArrayList** — stores all Booking objects in order
- **HashSet** — stores unique service category names
- **HashMap** — looks up a Booking by its bookingId

## How to Run
cd day-02-oop-architecture/src
javac *.java
java Main

## What I Learned
This was my first time writing Java. Building the classes step by step
made sense once I saw the pattern (fields, constructor, getters), so
that part felt manageable. Inheritance and the `super()` keyword took
more explaining before it clicked. I also learned that in Java the
filename has to exactly match the class name, which caused a compile
error until I fixed it