new Vue({
    el: "#app",
    data: {
        start: false,
        player: {
            hp: 100,
        },
        monster: {
            hp: 100,
        },
        damages: {
            playerLastDamage: [],
            monsterLastDamage: [] 
        }
    },
    methods: {
        doAttack: function() {
            var playerDamage = this.calcAttack(3,10); //Genero danno player
            var monsterDamage = this.calcAttack(5,12); //Genero danno monster

            this.monster.hp -= playerDamage; //Diminuisco vita del mostro
            this.player.hp -= monsterDamage; //Diminuisco vita del player
            
            this.damages.monsterLastDamage.push(monsterDamage); //Inserisco i danni in un array
            this.damages.playerLastDamage.push(playerDamage); //Inserisco i danni in un array

            this.winCheck(); //Richiamo funzione per verificare Vittoria/sconfitta
        },
        doSpecialAttack: function() {
            var playerDamage = this.calcAttack(12,18); //Genero danno player
            var monsterDamage = this.calcAttack(5,12); //Genero danno monster
            
            this.monster.hp -= playerDamage; //Diminuisco vita del mostro
            this.player.hp -= monsterDamage; //Diminuisco vita del player

            this.damages.monsterLastDamage.push(monsterDamage); //Inserisco i danni in un array
            this.damages.playerLastDamage.push(playerDamage); //Inserisco i danni in un array

            this.winCheck(); //Richiamo funzione per verificare Vittoria/sconfitta
        },
        doHeal: function() {
            if(this.player.hp <= 90) { //Se il player ha -= 90hp
                this.player.hp += 10; //Aumento vita del player di 10
            } else { //Se il player ha più di 90hp
                this.player.hp = 100; //Aumento vita del player fino a 100
            } 

            var monsterDamage = this.calcAttack(5,12);
            this.player.hp -= monsterDamage; //Diminuisco vita del player
            this.damages.monsterLastDamage.push(monsterDamage); //Inserisco i danni in un array
        },
        calcAttack: function(min, max) {
            damage = Math.floor(Math.random() * (max - min + 1)) + min; //Danno inflitto
            
            return damage;
        },
        winCheck: function() {
            if(this.player.hp <= 0) {
                alert("You're Dead!");
                this.giveUp();
            } else if(this.monster.hp <= 0) {
                alert("You Won!");
                this.giveUp();
            }
        },
        giveUp: function(){
            this.player.hp = 100;
            this.monster.hp = 100;
            this.damages.playerLastDamage = [];
            this.damages.monsterLastDamage = [];
            this.start = false;
        }
    },
});