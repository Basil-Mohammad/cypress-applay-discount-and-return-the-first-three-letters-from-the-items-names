/// <reference types = "Cypress"/>
beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage;
    cy.clearAllSessionStorage;
    cy.log('cach and cookies cleared');
    cy.reload();
});

describe("test the total amount", () => {
    it("mens-tops-hodies and Sweatshirts", () => {
      cy.visit(
        "https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html"
      );
  
      cy.get(":nth-child(5) > .field > .control > #limiter").select("24");
  
      cy.get(".price-box .price-final_price").as("priceoftheHodies");
  
      cy.get("@priceoftheHodies").find(".price").invoke("text").as("itemPrice");
  
      cy.get("@itemPrice").then((pricetext) => {
        let myPriceList = pricetext.split("$");
  
        
        for (let i = 0; i < myPriceList.length; i++) {
            let price = Number(myPriceList[i])
            cy.log('The price befor discount is '+price)   
            let priceAfterDiscount = price -(price * .1)
            cy.log('The price after discount is '+priceAfterDiscount)
   
        }
  
        
      });
    });

    it('test the first three letters from item name', () => {
        cy.visit(
            "https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html"
          );
          cy.get(":nth-child(5) > .field > .control > #limiter").select("24");

          cy.get('.product .details').as("mainClass")
          cy.get('@mainClass').find('.name').as("subclass")
          cy.get('@subclass').find('.product-item-link').invoke('text').as("itemsNames")
          cy.get('@itemsNames').then((nameText)=>{
            let mylistofnames = nameText.split('\n')
            //cy.log(mylistofnames)
            mylistofnames.forEach((name) => {
                const firstThreeLetters = name.substring(0, 3);
                cy.log(`First three letters: ${firstThreeLetters}`);
              });
            
            
            
     
        
})
      
        
    });
  });