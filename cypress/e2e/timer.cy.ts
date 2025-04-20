describe("Test du timer", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/");
    });

    it("déroulement du temps", () => {
        cy.get("#timer").contains("00:00");
        cy.wait(1000);
        cy.get("#timer").contains("00:01");
    });

    it("Stop le timer", () => {
        cy.wait(1000);
        cy.get("#timer-stop").click();
        cy.get("#timer").contains("00:01");
        cy.wait(2000);
        cy.get("#timer").contains("00:01");
    });

    it("Reset le timer", () => {
        cy.wait(1000);
        cy.get("#timer").contains("00:01");
        cy.get("#timer-reset").click();
        cy.get("#timer").contains("00:00");
        cy.wait(2000);
        cy.get("#timer").contains("00:00");
    });

    it("Start le timer", () => {
        cy.get("#timer-stop").click();
        cy.get("#timer").contains("00:00");
        cy.wait(1000);
        cy.get("#timer").contains("00:00");

        cy.get("#timer-start").click();
        cy.wait(2000);
        cy.get("#timer").contains("00:02");
    });
});
