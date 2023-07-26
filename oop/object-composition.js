// class Developer {
//   constructor(name) {
//     this.name = name;
//   }
//   commitChange() {
//     console.log(`${this.name} commit change`);
//   }
// }

// class FrontEnd extends Developer {
//   buildUI() {
//     console.log(`${this.name} build UI`);
//   }
// }

// class BackEnd extends Developer {
//   buildAPI() {
//     console.log(`${this.name} bild API`);
//   }
// }

// const dev = new Developer("hafizh");
// console.log(dev);
// dev.commitChange();

// const fe = new FrontEnd("Nabil");
// console.log(fe);
// fe.buildUI();

// const be = new BackEnd("Adam");
// console.log(be);
// be.buildAPI();

class Developer {
  constructor(name) {
    this.name = name;
  }

  commitChange() {
    console.log(`${this.name} is commit change`);
  }
}

function canBuildUI(developer) {
  return {
    buildUI: () => {
      console.log(`${developer.name} is building UI`);
    },
  };
}

function canBuildAPI(developer) {
  return {
    buildAPI: () => {
      console.log(`${developer.name} is building API`);
    },
  };
}

function canDeployAPP(developer) {
  return {
    deployAPP: () => {
      console.log(`${developer.name} is deploying app`);
    },
  };
}

function createFrontEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canDeployAPP(developer));
}

function createFullStackDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(
    developer,
    canBuildUI(developer),
    canBuildAPI(developer),
    canDeployAPP(developer)
  );
}

const frontEndDeveloper = createFrontEndDeveloper("Nabil");
frontEndDeveloper.commitChange();
frontEndDeveloper.buildUI();
console.log(
  `is ${frontEndDeveloper.name} developere?`,
  frontEndDeveloper instanceof Developer
);

const backEndDeveloper = createBackEndDeveloper("Adam");
backEndDeveloper.commitChange();
backEndDeveloper.buildAPI();
console.log(
  `is ${backEndDeveloper.name} developer? `,
  backEndDeveloper instanceof Developer
);

const devOpsDeveloper = createDevOps("gatau");
devOpsDeveloper.commitChange();
devOpsDeveloper.deployAPP();
console.log(
  `is ${devOpsDeveloper.name} developer? `,
  devOpsDeveloper instanceof Developer
);

const fullStackDeveloper = createFullStackDeveloper("Ajoy");
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployAPP();
console.log(
  `is ${fullStackDeveloper.name} developer? `,
  fullStackDeveloper instanceof Developer
);
