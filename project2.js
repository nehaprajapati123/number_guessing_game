let a=require("readline-sync")
name=a.question("please enter your name:  ")
console.log(name.toLocaleUpperCase(),"WELCOME TO THE GUESSING GAME.........",);
secrete_num=Math.floor(Math.random() * 11);
// console.log(secrete_num);
chances=a.questionInt("      how many chances do you want for guessing your secret number :  ")
let i=1;
while(i<=chances){
    num=a.questionInt("enter your number>>>  ")
    if (num===secrete_num){
        console.log(num,"you win",name);
        var list = ["you are awesome", "mst khela re baba","i knew it you can do it","great"];
        console.log(list[Math.floor(Math.random()*list.length)]);
        break}
    else{
        if (i==chances){console.log("you loss");console.log(secrete_num,"was the secrete num");}
        else if(secrete_num==num-1 || secrete_num==num+1 ||secrete_num==num+2 ||secrete_num==num-2)
            {console.log(("you are very close..."));}
        else{console.log(("you are very far..."));}
    }   
    i++
}

