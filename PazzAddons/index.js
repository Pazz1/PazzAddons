import Settings from "./settings";
const config = Settings

register("command", () => config.openGUI()).setName("pazz");
register("command", () => config.openGUI()).setName("pazzaddons");

if (config.readyUpMessage = true) {
    register("Chat", (event) => {
        var formattedMessage = ChatLib.getChatMessage(event, true);
        if(formattedMessage.includes("&a has started the dungeon countdown. The dungeon will begin in 1 minute.&r")){	
                    ChatLib.command("pc [✪PazzAddons✪] - Ready up!");
                    Client.showTitle("&bReady up!","", 1, 30, 1)};
                }, 1);
        }
