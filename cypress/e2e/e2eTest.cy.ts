describe("End2End testing for website", () => {
  it("MovieSearch app end2end test", () => {
    //Connects to client in browser.
    cy.visit("localhost:3000/project3");
    //Types "the" into searchbar.
    cy.findByRole('textbox', { name: /title of movie/i }).type("The");
    //Clickes on searchbutton.
    cy.findByText("Search").click();
    //Clicks on movie element with title "the taking of pelham one two three".
    cy.findByRole('heading', { name: /the taking of pelham one two three \(1974\) 7\.7★/i }).click();
    //Clicks on genre selector with invisible char U+200b.
    cy.findByRole('button', { name: /​/i }).click();
    //Selects drama genre in selector.
    cy.findByRole('option', { name: /drama/i }).click();
    //Clicks on movie element with title "kai po che!"
    cy.findByRole('heading', { name: /kai po che! \(2013\) 7\.7★/i }).click();
    //Clicks on genre selector.
    cy.findByRole('button', { name: /drama/i }).click();
    //Selects default value for genre.
    cy.findByRole('option', { name: /none \(default\)/i }).click();
    //Selects and removes text in search input field.
    cy.findByRole('textbox', { name: /title of movie/i }).type('{backspace}{backspace}{backspace}')
    //Clicks on search (to clear search).
    cy.findByText("Search").click();
    //Checks if the movie with title "the shawshank redemption" is present.
    cy.findByRole('heading', { name: /the shawshank redemption \(1994\) 9\.3★/i });
    //Clicks on next page button.
    cy.findByRole('button', {name: /next page/i}).click();
    //Checks if the movie with title "pulp fiction" is present.
    cy.findByRole('heading', {name: /pulp fiction \(1994\) 8\.9★/i});
    //Clicks on prev page button.
    cy.findByRole('button', {name: /prev page/i}).click();
    //Checks if the movie with title "the shawshank redemption" is present.
    cy.findByRole('heading', { name: /the shawshank redemption \(1994\) 9\.3★/i });
    //clicks on filter selector.
    cy.findByRole('button', { name: /highest imdb rating/i }).click()
    //Selects lowest imdb rating option.
    cy.findByRole('option', { name: /lowest imdb rating/i }).click();
    //Checks if movie "once upon a time" is present.
    cy.findByRole('heading', { name: /once upon a time\.\.\. in hollywood \(2019\) 7\.6★/i });
    //clicks on filter selector.
    cy.findByRole('button', { name: /lowest imdb rating/i }).click()
    //Selects highest imdb rating option.
    cy.findByRole('option', { name: /highest imdb rating/i }).click();
    //Clicks on "show search log" button.
    cy.findByRole('button', { name: /show search log/i }).click();
    //Clicks on "hide search log" button.
    cy.findByRole('button', {name: /hide search log/i}).click();
    //Clicks on "show search log" button.
    cy.findByRole('button', {name: /show search log/i}).click();
    //Clicks on first button (history item) with substring "the".
    cy.findAllByRole('button', { name: /the/i }).first().click();
    //Checks if movie element with title "the taking of pelham one two three" is present.
    cy.findByRole('heading', { name: /the taking of pelham one two three \(1974\) 7\.7★/i }).click();
    //Moves cursur over info icon.
    cy.findByTestId("InfoIcon").trigger("dragenter")
    //Checks if text "is always sorted by relevance first" is present.
    cy.findByText(/is always sorted by relevance first/i)
    const stub = cy.stub()
    //Checks if alert is thrown when user enters "!" in search input field.
    cy.on ('window:alert', stub)
    cy.findByRole('textbox', { name: /title of movie/i }).type("!")
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Invalid character typed! The character was not added to your search.')      
    })  


  });
});
