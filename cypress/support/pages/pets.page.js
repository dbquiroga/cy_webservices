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
  updatePet() {
    return cy.request({
      url: "https://petstore.swagger.io/v2/pet",
      method: "PUT",
      body: {
        id: 0,
        category: {
          id: 0,
          name: "string",
        },
        name: "myCuteCat",
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

  getPetStatus() {
    return cy.request({
      url: "https://petstore.swagger.io/v2/pet/findByStatus?status=pending",
      method: "GET",
    });
  }
}

export const endpoinstPets = new PetsPage();
