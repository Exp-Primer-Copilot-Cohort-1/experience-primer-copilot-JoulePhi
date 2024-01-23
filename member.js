function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 2000,
        bonus: 100,
        getSalary: function () {
            return this.salary + this.bonus;
        }
    };

    var member2 = {
        name: 'John',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 2000,
        bonus: 100,
        getSalary: function () {
            return this.salary + this.bonus;
        }
    };

    console.log(member.getSalary());
    console.log(member2.getSalary());
}