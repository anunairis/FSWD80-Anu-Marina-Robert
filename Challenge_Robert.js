var viennalove =[["Vienna", " ", " ", " ", "<br>"],
				[" ", "is", " ", " ", "<br>"],
				[" ", " ", "a", " ", "<br>"],
				[" ", " ", " ", "nice", "<br>"],
				[" ", " ", " ", " ", "city"]];



document.write(viennalove[0][0] + " " + viennalove[1][1] + " " + viennalove[2][2]+" "+viennalove[3][3] +" "+viennalove[4][4] + "<br>")




var sentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\"."
var rep = sentence.replace(/[^a-zA-Z 0-9 , ' " . ; ]+/g, ' ')// replace(/\$/g," ")
var test2 = sentence.split("$").join(" ");
document.write(rep)
