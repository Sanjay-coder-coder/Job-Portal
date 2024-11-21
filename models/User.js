let users = []; // In-memory storage for users

class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static addUser (name, email, password) {
        const id = users.length + 1;
        const newUser  = new User(id, name, email, password);
        users.push(newUser );
        return newUser ;
    }

    static findUser ByEmail(email) {
    return users.find(user => user.email === email);
  }
}

module.exports = User;