body {
    padding: 100 px 50 px;
    font - family: "Quicksand",
    sans - serif;
    font - size: 30 px;
    line - height: 1.3;
    color: #fff;
    background - color: #7eb4e2;
}

ul {
  margin: 100px auto 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 0;
  min-width: 200px;
  margin: 40px;
  padding: 0 40px;
  background-color: # 32557 f;
}

@media screen and(min - width: 400 px) {
    ul {
        flex - direction: row;
        min - width: 600 px;
    }
}

a {
    display: inline - block;
    text - decoration: none;
    color: #fff;
    font - size: 18 px;
    letter - spacing: 2 px;
    text - transform: uppercase;
    position: relative;
    transition: all 0.4 s ease;
    padding: 30 px;
}

a::after {
    content: "";
    position: absolute;
    height: 2 px;
    background - color: #f69ec4;
    width: 0;
    left: 50 % ;
    bottom: 0;
    transform: translateX(-50 % );
    transition: 0.5 s cubic - bezier(0.68, -0.55, 0.265, 1.55) all;
}

a: hover { color: #f69ec4; }
a: hover::after { width: 100 % ; }