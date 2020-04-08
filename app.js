new Vue({
    el: "#app",
    data: {
        start: false,
        player: {
            hp: 100,
            lastDamage: [],
        },
        monster: {
            hp: 100,
            lastDamage: [],
        },
    },
    methods: {
        playerAttack: function() {
            playerDamage = Math.floor(Math.random() * (10 - 1 + 1)) + 1; //Danno che può infliggere il giocatore (da 1 a 10)
            
            return playerDamage;
        },
        monsterAttack: function() {
            monsterDamage = Math.floor(Math.random() * (10 - 1 + 1)) + 1; //Danno che può infliggere il mostro (da 1 a 10)
            
            return monsterDamage;
        },
        doAttack: function() {
            this.monster.hp -= this.playerAttack(); //Diminuisco vita del mostro
            this.player.hp -= this.monsterAttack(); //Diminuisco vita del player
            console.log(this.playerAttack());
            console.log(this.monsterAttack());
            
            this.monster.lastDamage.push(this.playerAttack());
            this.player.lastDamage.push(this.monsterAttack());
        },
        doSpecialAttack: function() {
            this.monster.hp -= 10; //Diminuisco vita del mostro di 10
            this.player.hp -= this.monsterAttack(); //Diminuisco vita del player

            this.monster.lastDamage.push(10);
            this.player.lastDamage.push(this.monsterAttack());
        },
        doHeal: function() {
            if(this.player.hp < 100 && this.player.hp > 90) {
                flag = 0 //Flag per verificare se il player è arrivato a 100 di vita
                i = 0; //Contatore per while
                do {
                    i++; //Incremento contatore
                    if(this.player.hp + i == 100) { //Se il contatore incrementato porta la salute a 100
                        this.player.hp += i; //Aumento vita con il contatore
                        flag = 1; //Salute aumentata!
                    }
                } while(flag == 0); 
            } else if(this.player.hp <= 90) {
                this.player.hp += 10; //Aumento vita del player di 10
            } 
            else {
                alert("You have 100HP!")
            }

            this.player.hp -= this.monsterAttack(); //Diminuisco vita del player
            this.monster.lastDamage.push(monsterDamage);
        },
        giveUp: function(){
            this.player.hp = 100;
            this.monster.hp = 100;
            this.start = false;
            this. action = false;
        }
    },
});