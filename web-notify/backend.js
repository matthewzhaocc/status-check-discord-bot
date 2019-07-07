const ping = require('ping');
const Discord = require('discord.js');
const token = "";
const client = new Discord.Client();
client.on("message", (message)=>{
  if (message.content.startsWith('$status')){
  var hosts = ['10.20.0.60', '10.20.0.70', '10.20.0.80','10.20.0.90','10.20.0.100'];
  hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
      var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
      console.log(msg);
      msg+="\r\n";
      message.channel.send(msg);
      });

    });}
  });

client.login(token)
