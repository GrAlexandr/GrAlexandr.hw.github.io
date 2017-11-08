/*
 2. Тамагочі
 Створити об'єкт із властивостями: ім'я, здоров'я, ситість, сила, щастя.
 Об'єкт має створюватися через конструктор. В прототипі об'єкту мають
 бути методи для взаємодії з персонажем. (Годувати, Гратися, Гуляти,
 Спати, Лікуватися, <і ще, щось придумайте :)>)

 Кожні 3 секунди в персонажу мають зменшуватися показники.
 Відповідно викликаючи методи можна збілюшувати ці показники.
 Наприклад: тамагочі.гратися() - збільшує щастя на +5, і зменшує
 сили на -10 одиниць і ситість на -5 одиниць... Придумайти власні правила для персонажу.
 Інформацю про стан персонажу виводьте прямо на сторінку,
 після кожного оновлення стану. (вам домопоже document.getElementById('....'))
 У випадку смерті персонажу передбачити сумне повідомлення, і зупинити зміни інших показників.
*/
var elem = document;

function Personage(name) {
	var that = this;

	this.name = name;
	this.health = 'good';
	this.satiety = 50;
	this.energy = 50;
	this.happy = 50;
	this.feed = function () {
		that.satiety += 15;
		that.energy += 5;
	};
	this.play = function () {
		that.satiety -= 10;
		that.energy -= 10;
		that.happy += 15;
	};
	this.stroll = function() {
		that.satiety -= 5;
		that.energy -= 5;
		that.happy += 10;
	};
	this.sleep = function() {
		that.satiety -= 5;
		that.energy += 10;
		that.happy += 5;
	};
	this.cure = function() {
		that.energy += 10;
		that.happy += 10;
	};

	this.live();
}

Personage.prototype.live = function() {
	var that = this;

	 var timerId = setInterval(function tick() {
		 that.outputInformation();
		 that.outputStatus();

				 that.satiety--;
				 that.energy--;
				 that.happy--;

		 if(that.energy < 0) clearInterval(timerId);


  }, 1000);
};
Personage.prototype.outputInformation = function() {

	elem.getElementById('name').textContent = this.name;
	elem.getElementById('health').textContent = this.health;
	elem.getElementById('satiety').textContent = this.satiety;
	elem.getElementById('energy').textContent = this.energy;
	elem.getElementById('happy').textContent = this.happy;

};
Personage.prototype.outputStatus = function() {

	if(this.satiety < 10 || this.energy < 20 || this.happy < 10) this.health = 'bed';

	if(this.satiety > 40 && this.energy > 40 && this.happy > 40)
		elem.getElementById('status').textContent = "I'm OK!";

	if(this.satiety < 35) elem.getElementById('status').textContent = "I'm hungry";
	if(this.satiety > 40) elem.getElementById('status').textContent = "I'm full, I'm OK";

	if (this.energy < 40) elem.getElementById('status').textContent = "I'm tired I want to sleep";

	if (this.happy < 20) elem.getElementById('status').textContent = "I want to walk, I want to play!!!";

	if(this.satiety <= 5 || this.energy <= 30 || this.happy <= 10)
		elem.getElementById('status').textContent = 'Poor health, help!';

	if(this.satiety <= 0 && this.energy <= 0 || this.happy <= 0)
		elem.getElementById('status').textContent = "Tamagotchi died";

};

var tamagotchi = new Personage('tamagotchi');

feed.onclick = tamagotchi.feed;
play.onclick = tamagotchi.play;
stroll.onclick = tamagotchi.stroll;
sleep.onclick = tamagotchi.sleep;
cure.onclick = tamagotchi.cure;