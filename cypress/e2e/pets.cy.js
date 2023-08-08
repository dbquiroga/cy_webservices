import { endpoinstPets } from "../support/pages/pets.page";

describe("Webservices swagger petstore", () => {
  before(() => {
    // runs once before all tests
  });

  it("Put, get and put a pet", () => {
    endpoinstPets.createPet().then((result) => {
      expect(result.status).to.be.equal(200);
    });
  });
});

//  Agregar una mascota realizando un POST al path v2/pet
// Realizar un GET /v2/pet/{petId} para obtener una mascota existente.
// Modificar una mascota existente mediante PUT al path /v2/pet.

// validar Status code esperado.
// Schema del response.
