class User {
  constructor(name, username, passwword) {
    (this.name = name),
      (this.username = username),
      (this.passwword = passwword);
  }
  login(username, passwword) {
    if (username == this.username && passwword == this.passwword) {
      console.log("Login Successfully");
    } else {
      console.log("Authentication Failed!!");
    }
  }
  setPassword(newpassword) {
    this.passwword = newpassword;
  }

  validateUsernameOrPassword(text) {
    if (text.length > 6) {
      return true;
    }
    return false;
  }
}

class Author extends User {
    constructor(name, username, passwword, email, numOfPost){
        super(name, username, passwword);
        this.email = email;
        this.numOfPost = 0;
    }

    createPost() {
        this.numOfPost++;
    }

    getNumOfPost() {
        return this.numOfPost;
    }
}

console.log("---1---");
let user1 = new User("user1", "user1", "abcde2");
console.log(user1);
console.log(user1.validateUsernameOrPassword(user1.passwword));
