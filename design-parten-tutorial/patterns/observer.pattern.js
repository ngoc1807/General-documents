/* 
Example :
    -  In the game LOL, for every 1 person ping, the rest will get a notification, because the rest have already registered (subscribed) this person and they can cancel registration(unsubscribe) to that event
    - In traffic at the intersection, everyone is look(subscribed) traffic light (as a event )
*/

class Observer {
  constructor(name) {
    //sniper, riki
    this.namePick = name;
  }
  updateStatus(location) {
    this.goToHelp(location);
  }
  goToHelp(location) {
    console.log(`${this.namePick} :::PING:::${JSON.stringify(location)}`);
  }
}

class Subject {
  constructor() {
    this.observerList = [];
  }
  addObserver(observer) {
    this.observerList.push(observer);
  }
  notify(location) {
    this.observerList.forEach((observer) => observer.updateStatus(location));
  }
}

const subject = new Subject();

// your pick
const riki = new Observer("Riki");
const sniper = new Observer("Sniper");
const pudge = new Observer("pudge");

// add riki and sniper to Team
subject.addObserver(riki);
subject.addObserver(sniper);
subject.addObserver(pudge);

// push notification to team
subject.notify({ long: 123, lat: 245 });
