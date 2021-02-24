import { iteratee } from "lodash";
import Airplane from "../Airplane.js";

describe("an airplane", () => {
  let newAirplane;

  beforeEach(() => {
    newAirplane = new Airplane("Cesna", 10, 150);
  });

  describe("build an airplane", () => {
    it("returns the type of plane", () => {
      expect(newAirplane.type).toBe("Cesna");
    });
    it("returns the wing load", () => {
      expect(newAirplane.wingLoad).toBe(10);
    });
    it("returns the horsepower", () => {
      expect(newAirplane.horsepower).toBe(150);
    });
  });

  describe("do stuffs", () => {
    it("verify plane is not started", () => {
      expect(newAirplane.isStarted).toBe(false);
    });
    it("returns true if plane starts", () => {
      newAirplane.start();
      expect(newAirplane.isStarted).toBe(true);
    });
    it("can not takeoff if engine is not started", () => {
      newAirplane.takeOff();
      expect(newAirplane.isFlying).toBe(false);
    });
    it("can start the engine and takeoff", () => {
      newAirplane.start();
      newAirplane.takeOff();
      expect(newAirplane.isFlying).toBe(true);
    });

    describe("landing", () => {
      it("check that plane is started", () => {
        newAirplane.land();
        expect(newAirplane.isStarted).toBe(false);
      });
      it("if the plane has been started but hasn't taken off", () => {
        newAirplane.start();
        expect(newAirplane.isStarted).toBe(true);
        newAirplane.land();
        expect(newAirplane.isFlying).toBe(false);
      });
      it("if the plane is already in the air", () => {
        newAirplane.start();
        newAirplane.takeOff();
        expect(newAirplane.isFlying).toBe(true);
        newAirplane.land();
        expect(newAirplane.isStarted).toBe(true);
        expect(newAirplane.isFlying).toBe(false);
      });
    });
  });
});
