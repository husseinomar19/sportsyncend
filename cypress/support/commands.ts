/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
declare namespace Cypress {
    interface Chainable<Subject = any> {
      uploadFile(selector: string, fileUrl: string, fileType?: string): Chainable<Subject>;
    }
  }
  
Cypress.Commands.add('uploadFile', (selector: string, fileUrl: string, fileType = '') => {
    cy.get(selector).then(subject => {
      cy.fixture(fileUrl, 'base64').then(content => {
        const el = subject[0] as HTMLInputElement;
        const blob = Cypress.Blob.base64StringToBlob(content, fileType);
        const testFile = new File([blob], fileUrl, { type: fileType });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(testFile);
        el.files = dataTransfer.files;
        el.dispatchEvent(new Event('change', { bubbles: true }));
      });
    });
  });
  