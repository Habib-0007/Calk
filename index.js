/* To get Hypotenuse */

document.getElementById("getHypotenuse").onclick = function () {
    let a;
    let b;
    let c;
    
    a = document.getElementById("firstOpposite").value;
    a = Number(a);
    
    b = document.getElementById("firstAdjacent").value;
    b = Number(b);
    
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    
    document.getElementById("firstHypotenuse").innerHTML="The hypotenuse is: " + c;
}

/* To get Opposite */

document.getElementById("getOpposite").onclick = function () {
    let u;
    let v;
    let w;
    
    u = document.getElementById("secondHypotenuse").value;
    u = Number(u);
    
    v = document.getElementById("secondAdjacent").value;
    v = Number(v);
    
    w = Math.sqrt(Math.pow(u,2) - Math.pow(v,2));
    
    document.getElementById("secondOpposite").innerHTML="The opposite is: " + w;
}


/* To get Adjacent */

document.getElementById("getAdjacent").onclick = function () {
    let m;
    let n;
    let o;
    
    m = document.getElementById("thirdHypotenuse").value;
    m = Number(m);
    
    n = document.getElementById("thirdOpposite").value;
    n = Number(n);
    
    o = Math.sqrt(Math.pow(m,2) - Math.pow(n,2));
    
    document.getElementById("thirdAdjacent").innerHTML= "The adjacent is: " + o;
}
