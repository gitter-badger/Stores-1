function player(name) {
    this.money = 15,
    this.properties = 1,
    this.workers = 0,
    this.name = name,
    this.shares = 5
}


var me = new player("You");
var ai1 = new player("AI1");
var ai2 = new player("AI2");
var ai3 = new player("AI3");
var winner;