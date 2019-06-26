const Discord = require('discord.js')
const client = new Discord.Client();

const prefix = "!"

const config = require("./config.json")

/*
Maybe make this bot a DM only bot for solo play? Maybe it treats everyone on the server as one person?
Also, databases for keeping track of levels and things for each person/server

THE BELOW IS TO SHOW HOW THE LOGIC MIGHT FLOW
*/

var level = 1
var text = ["Welcome to Bug Destroyer adventure. You are about to enter into the realm of code, into Discord itself, specifically. You hear that there is great treasure, but that Evil Wumpus is protecting it with many bugs throughout his dungeon. Head forward into the portal to continue.","Entering the shiny room, binary flows along the walls of this dungeon. In front of you is a small bug, it's a slimy bug. It is the Broken Button Bug. Not pleaseant, but easy to deal wiht. Type !slash to attack with your iron sword. When you have defeated this creature, move on.","It's a new bug in this room, the Auto Correct! It crawls toward you like an ant. Attack and defeat the bug!","Oh no, in this room is a Button Broken and a Auto correct bug! Defeat them both and move on. You are well on your way to becoming a bug Destroyer.","You step inside, and see a completely new bug! It is the SpzZy VOIcE ChAT bug. This one is tougher than all you have encountered so far. Use you skill wisely and don't get hurt.","The bug has dropped a Knight's Sword! This is better than your puny iron sword. You take it and you are now using the Knight's Sword. Attack + 10","Here in this room lies the Image Crash bug. Like a skeleton, it clatters around, but it has suprising speed, popping up where you least expect it.","It.. It... It.. It.. Its the infinite reload bug! These bugs are getting pretty serious! Attack!","As you defeat the infinite reload bug, it drops the Assasin's blade. Encrustd with a diamond at the hilt, this sword is very powerful. You take it. Attack + 15","qnq uoᴉʇɐʇuǝᴉɹO, I mean, the Orientation bug enhibits this dungeon cell. It is very confusing to fight and very difficult to kill. But have hope! The Evil Wumpus is only on the next level. So close to treasure!","You enter the final room of the dungeon. It is dark, and you don't see anyting. Then, out of nowhere, pops the infamous STUCK PING BUG. You instantly know this as Evil Wumpus's form. Attack and Attack it. Your efforts may seem futile, but You believe in yourself.","You did it! You defeated the Evil Wumpus! You have cleared the land of Discord from these pesky bugs! Move forward to collect your treasure."."In this room lies... A Red Ruby for Brilliance, A Blue Diamond for Balance, and an Purple Amethyst for Bravery. Congratulations."]

client.on("message", (message) => {
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "start")) {
  	if (/* Player is initilized in DB*/) {
  		//Initilize player in DB with the following categories: level = 1, AttackBoost = 1, Enemy defeated = 1, Enemy Health = 0
    	message.reply('Get ready, I have sent a DM so you can play!');
    	data.push("Welcome to Bug Destroyer adventure. You are about to enter into the realm of code, into Discord itself, specifically. You hear that there is great treasure, but that Evil Wumpus is protecting it with many bugs throughout his dungeon. Head forward into the portal to continue.")
    }else{
    	message.reply('It appears you have already started a game!');
    }
  }else if (message.channel.type !== 'text') {
  	//Commands for the game
  	if (/*forward or alias of forward*/) {
  		if(/*Enemy defeated?*/) {
  			//User.level++
  		}else{
  			data.push("You must defeat the monster in your way first.")
  		}
  	}else if (/*attack*/) {
  		//code
  	}else if (/*block*/) {
  		//code
  	}
  }else{
  	message.channel.send("Play the game in your DMs!");
  }
});


client.login(config.token);