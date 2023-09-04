# TaxApp
This project is a simple Angular application that calculates sale taxes for purchased items based on predefined rules.
The Tax Application is a web-based tool that calculates sales taxes for purchased items, taking into account basic sales tax, import duties, and exemptions for certain categories of goods. The application provides a receipt detailing the items, their prices (including tax), total cost, and total sales taxes paid.

![Alt text](src/assets/img-tax-app.png?raw=true)

## Prerequisites
Before you begin, ensure you have the following prerequisites installed:

## Installation
1. Clone the repository to your local machine:
```console
git clone https://github.com/chauvu183/tax-app.git
```
2. Navigate to the project's root directory:
```console
cd tax-app
```

3. Install project dependencies:
```console
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- [Unit test](src/app/receipt/receipt.component.spec.ts) for the receipt component( test the desired output as suggested in the code assignment)

## Features
- User add new items to the receipt. 
- Calculation of sales taxes for purchased items based on predefined rules.
- Support for basic sales tax, import duties, and exemptions for specific categories( food, medical, book)
- Detailed receipt generation with item names, prices (including tax), total cost, and total sales taxes paid.
 
## Developement Process
1. Write Tests with the desired results in the assignments.
2. Build Receipt Component to execute the tax calculation, return the total tax amount and total price.
3. Build template to interact with the user. User can add new items and calculate tax for his items
