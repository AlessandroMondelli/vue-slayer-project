new Vue({
    el: "#app",
    data: {
        start: false,
        action: false,
        player: {
            hp: 100,
        },
        monster: {
            hp: 100,
        },
    },
    methods: {
        giveUp: function(){
            this.player.hp = 100;
            this.monster.hp = 100;
            this.start = false;
            this. action = false;
        }
    }
});