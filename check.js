var examController = 0;

// User answer boxes

var answer1 = document.getElementById("a1").value;
var answer2 = document.getElementById("a2").value;
var answer3 = document.getElementById("a3").value;
var answer4 = document.getElementById("a4").value;
var answer5 = document.getElementById("a5").value;

// Check

function check() 
{
        // Question 1

    if (answer1 == q1[1]) 
    {
        examController += 1;
    }

    else 
    {
        // --NIL--
    }

        // Question 2

    if (answer2 == q2[1]) 
    {
        examController += 1;
    }

    else 
    {
        // --NIL--
    }

        // Question 3

    if (answer3 == q3[1]) 
    {
        examController += 1;
    }

    else 
    {
        // --NIL--
    }

        // Question 4

    if (answer4 == q4[1]) 
    {
        examController += 1;
    }

    else 
    {
        // --NIL--
    }

        // Question 5

    if (answer5 == q5[1]) 
    {
        examController += 1;
    }

    else 
    {
        // --NIL--
    }

    // Test

    alert(examController)

    var userPer = 0;

    // Percent of --NIL--

    if (examController == 0)
    {
        userPer = 0 + "%";
    }

    else
    {
        // --NIL--
    }

    // Percent of 1

    if (examController == 1)
    {
        userPer = 20 + "%";
    }

    else
    {
        // --NIL--
    }

    // Percent of 2

    if  (examController == 2)
    {
        userPer = 40 + "%";
    }

    else
    {
        // --NIL--
    }

    // Percent of 3

    if (examController == 3)
    {
        userPer = 60 + "%";
    }

    else
    {
        // --NIL--
    }

    // Percent of 4

    if (examController == 4)
    {
        userPer = 80 + "%";
    }

    else
    {
        // --NIL--
    }

    // Percent of 5

    if (examController == 5)
    {
        userPer = 100 + "%";
    }

    else 
    {
        // --NIL--
    }

    document.getElementById("exam").style.display = "none";

    document.getElementById("result").style.display = "block";

    document.getElementById("result").innerHTML = userPer;
}