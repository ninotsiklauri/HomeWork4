function N1(txt="კეთილი იყოს თქვენი მობრძანება საიტზე!!!", class_name="fontSize"){
    alert ("გამარჯობა, მე ვარ დიალოგური ფანჯარა alert");
    document.write("<p class="+class_name+">"+"<b>"+txt+"</b>"+"</p>")
}

function N2(class_name="redone", other="whiteone", yellow="yellowone", green="greenone", shadow="shadow"){
    var c = confirm("გამარჯობა, გსურთ გაიგოთ ვებ გვერდის შესახებ უფრო მეტი???");
    if(c==true){
        document.write("<h1 class="+other+"><span class="+class_name+">გილოცავთ</span>, ქვენ სწორი არჩევანი გააკეთეთ!!!</h1>");
        "<br>"
        document.write("<h4 class="+yellow+">ამ ვებ გვერდზე მრავალი საინტერესო მაგალითი შეგხვდებათ ვებ გვერდის აწყობის შესახებ.</h4>");
        "<br>"
        document.write("<h3 class="+other+">ვებ გვერდის აწყობის ტექნოლოგიები:</h3>")
        "<br>"
        document.write("<h4 class="+other+"><ul><li>HTML-საფუძვლები</li><li>javascript-გაფორმება</li><li>CSS-სტილები</li><li>PHP-პროგრამირება</li></ul></h4>");
    }else{
        document.write("<h1 class="+green+">დაინტერესდით ვებ გვერდის აწყობის ტექნოლოგიით.</h1>")
        "<br>"
        document.write("<h4 class="+shadow+">დაეუფლეთ მსოფლიოში ერთ-ერთ ყველაზე მოთხოვნად პროფესიას.</h4>")
        "<br>"
        document.write("<h5 class="+yellow+">ისწავლე და დასაქმდი!!!</h5>")
    }
}

function N3(class_name="redone", cancel="cancel"){
    p = prompt("შემოიტანე კვირის დღე (1, 2, 3, 4, 5, 6, 7)")
    if(p==1){
        document.write("<h1 class="+class_name+">დღეს ორშაბათია...</h1>")
    }else if(p==2){
        document.write("<h1 class="+class_name+">დღეს სამშაბათია...</h1>")
    }else if(p==3){
        document.write("<h1 class="+class_name+">დღეს ოთხშაბათია...</h1>")
    }else if(p==4){
        document.write("<h1 class="+class_name+">დღეს ხუთშაბათია...</h1>")
    }else if(p==5){
        document.write("<h1 class="+class_name+">დღეს პარასკევია...</h1>")
    }else if(p==6){
        document.write("<h1 class="+class_name+">დღეს შაბათია...</h1>")
    }else if(p==7){
        document.write("<h1 class="+class_name+">დღეს კვირაა...</h1>")
    }else if(p==null){
        document.write("<h1 class="+cancel+"> თქვენ დააჭირეთ Cancel ღილაკს <br> გისურვებთ ბედნიერ დღეს!!!</h1>")
    }else{
        document.write("<h1 class="+class_name+">დღეს ასეთი დღე არ არსებობს...</h1>")
    }
}

function currentdate(){
    var d = new Date ()
    document.write(d)
}

function clock(){
    var date = new Date()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()

    if(h==0){
        h=12
    }
    if(h>12){
        h = h - 12
    }
    if(h<10){
        h = "0"+h
    }
    if(m<10){
        m = "0"+m
    }
    if(s<10){
        s = "0"+s
    }

    var time = h+":"+m+":"+s
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").innerContent = time;

    setTimeout(clock, 1000)
}