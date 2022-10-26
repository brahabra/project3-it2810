describe("test test", () => {
  it("test test", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("textbox", { name: /movie title/i }).type("The");
    cy.findByRole("button", { name: /submit/i }).click();
  });
});
