//calculate tip

function CalculateTip() {
    var bilamt = document.getElementById("bilamount").value;
    var serqual = document.getElementById("serviceQual").value;
    var numpeople = document.getElementById("peopleamt").value;


    //   validate the Input

    if (bilamt === "" || serqual == 0 ) {
        alert("please input vlaue");
        return;
    }

    // check this input is empty or less hte 1

    if(numpeople === "" ||  numpeople <= 0 ){
        alert("wrong value to he numv=ber of people");
        document.getElementById("totaltip").style.display = "none";
        document.getElementById("each").style.display = "none";

        // numpeople = 1;
        // document.getElementById("each").style.display = "none";
    }
    else{
        document.getElementById("each").style.display = "block";
    }

    // calculte Tip
    var total = (bilamt *  serqual) / numpeople;

    // round the toatal amount
    total = Math.round(total);

    // display the tip

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

        // hide the tip amount on load

        document.getElementById("totaltip").style.display = "none";
        document.getElementById("each").style.display = "none";

}

//calling the function calculate the tip amount
document.getElementById("calculate").onclick = function () {
    CalculateTip();
}