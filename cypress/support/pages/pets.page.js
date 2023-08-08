class PetsPage {
  createPet() {
    return cy.request({
      url: "https://petstore.swagger.io/v2/pet?authorization=special-key",
      method: "POST",
      body: {
        id: 0,
        category: {
          id: 0,
          name: "string",
        },
        name: "myCat",
        photoUrls: ["string"],
        tags: [
          {
            id: 0,
            name: "string",
          },
        ],
        status: "available",
      },
    });
  }
}

export const endpoinstPets = new PetsPage();
