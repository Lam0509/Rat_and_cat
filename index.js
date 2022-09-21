function Rat(name, weight, speed, status) {
    this.name = name
    this.weight = weight;
    this.speed = speed;
    this.status = status;
    this.getStatus = function () {
        if (this.status) {
            alert('Alive')
        } else {
            alert('Die')
        }
    }
    this.setStatus = function (status) {
        return this.status = status;
    }
    this.ratSound = function (sound) {
        alert(sound);
    }
}

function Cat(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.catSound = function (sound) {
        alert(sound);
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.catchRat = function (Rat) {
        if (Rat.status) {
            if (this.speed > Rat.speed) {
                alert('Đã bắt được chuột');
            } else {
                alert('Không bắt được chuột')
            }
        } else {
            alert('Không có chuột để bắt');
        }
    }
    this.eatRat = function (Rat) {
        if (Rat.status && this.speed > Rat.speed) {
            this.weight += Rat.weight;
            Rat.status = false;
            alert('Chuột đã bị mèo ăn')
        }
    }
}

let rat = new Rat('Jerry', 30, 20, true);
let cat = new Cat('Tom', 50, 30);

console.log(rat.name);
console.log(cat.name);

cat.catchRat(rat);
cat.eatRat(rat);

console.log(cat.getWeight());


