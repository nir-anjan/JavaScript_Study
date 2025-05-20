function f() {
  alert(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f();
// answer is jhon
