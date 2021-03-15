export default class Character {
  constructor(name, type) {
    const playerType = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Ошибка имени');
    }
    if (playerType.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Ошибка типа игрока');
    }
    this.health = 100;
    this.level = 1;
    this.attack = Number();
    this.defence = Number();
  }
}
