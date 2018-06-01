describe("App", () => {
  const btn = document.querySelector('#click-me')
  const count = document.querySelector('#counter')
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
      btn.click();
      expect(count.textContent).toBe('120');
    })
  })

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      expect(btn.id).toBe('click-me')
    })
  })

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(5)).toBe(120)
    })

    it("returns 1 if the provided number is less than 1 ", () => {
      expect(factorial(-4)).toBe(1)
    })
  })

  describe("Computer", () => {
    let computer = new Computer();
    it("is created with a hard drive size of 512", () => {
      expect(computer.hardDriveSpace).toBe(512)
    })
  });

  describe("installProgram", () => {
    const computer = new Computer();
    beforeEach(done => {
      computer.installProgram(500, function () {
        done();
      })
    })
    it("can install a program if there is sufficient space", (done) => {
      expect(computer.hardDriveSpace).toBe(12);
      done();
    })
  })


  describe("install Program ", () => {
    const computer = new Computer();
    beforeEach(done => {
      computer.installProgram(600, function () {
        done();
      })
    })
    it("will not install the program if there is insufficient space", () => {
      expect(computer.hardDriveSpace).toBe(512);
    })
  })


  describe("format", () => {
    const computer = new Computer();
    it("resets the hard drive to 512, even after programs have been installed", () => {
      computer.hardDriveSpace = 500;
      computer.format();
      expect(computer.hardDriveSpace).toBe(512);
    })
  })
})