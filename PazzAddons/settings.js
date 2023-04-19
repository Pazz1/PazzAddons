import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SelectorProperty, Color} from 'Vigilance';

@Vigilant("PazzAddons", "PazzAddons", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})

class Settings {
        constructor() {
            this.initialize(this);
        }
    @SwitchProperty({
        name: "Ready Up Message",
        description: "Sends A Chat Message To Your Teamates To Tell Them To Ready Up!",
        category: "Dungeons",
        subcategory: "Chat Messages"
    })
    readyUpMessage = true;
}

export default new Settings();
