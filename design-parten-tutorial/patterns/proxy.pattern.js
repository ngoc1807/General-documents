// multi client  -> proxy (được đb ủy quyền ) -> db
// example : john (client ) ->  atm (proxy) -> bank (db)

class Leader {
  receiveRequest(offer) {
    console.log("Boss said OK::::" + offer);
  }
}

class Secretary {
  constructor() {
    this.leader = new Leader();
  }
  receiveRequest(offer) {
    // soft date , location ...
    // send
    this.leader.receiveRequest(offer);
  }
}

class Developer {
  constructor(offer) {
    this.offer = offer;
  }
  applyFor(target) {
    target.receiveRequest(this.offer);
  }
}
// How to use

const devs = new Developer("john upto 6k USD");
devs.applyFor(new Secretary());
