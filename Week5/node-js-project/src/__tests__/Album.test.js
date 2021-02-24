import Album from "../Album.js";

describe("An Album", () => {
  let album;
  let albumName;

  beforeEach(() => {
    albumName = "The Wall";
    album = new Album(albumName);
  });

  it.only("is instantiated with a name", () => {
    expect(album.name).toEqual(albumName);
  });

  // describe("#speak", () => {
  //   it("speaks its tagline", () => {
  //     expect(gorilla.speak()).toEqual("Bob got a bad feeling about this...");
  //   });
  // });

  // it("makes sure you didn't hardcode the gorilla's name", () => {
  //   let koko = new Gorilla("Koko");
  //   expect(koko.name).toEqual("Koko");
  // });
});
