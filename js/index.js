// js of panel-show and hide
function panelhide() {
    var e1 = document.getElementById("top-actions-show");
    if (e1.style.display == "none") {
        e1.style.display = "block";
        // e1.style.transform = "rotate(0deg)"
    } else {
        e1.style.display = "none";
    }
}
// js of left - show - panel and left - hide - panel

function leftpanelhide() {
    var e2 = document.getElementById("left-panel-show");
    if (e2.style.display == "none") {
        e2.style.display = "block";
    } else {
        e2.style.display = "none";
    }
}

// js of panel2 show and hide

function leftpanelhide2() {
    var e3 = document.getElementById("left-panel2-show");
    if (e3.style.display == "none") {
        e3.style.display = "block";
    } else {
        e3.style.display = "none";
    }
}

// starting make random arrays
const container = document.querySelector(".array-container");

// function to generate bars
const numofbars = Math.floor(Math.random() * 25) + 1;

function randombars() {

    //for loop to generate random bars
    for (let i = 0; i < numofbars; i += 1) {

        // To generate random values from 1 to 100
        const value = Math.floor(Math.random() * 100) + 1;

        // To create element "div"
        const bar = document.createElement("div");

        // To add class "bar" to "div"
        bar.classList.add("bar");

        // Provide height to the bar
        bar.style.height = `${value * 2.5}px`;

        // Translate the bar towards positive X axis
        bar.style.transform = `translateX(${i * 30}px)`;

        // To create element "label"
        const barLabel = document.createElement("label");

        // To add class "bar_id" to "label"
        barLabel.classList.add("bar_id");

        // Assign value to "label"
        barLabel.innerHTML = value;

        // Append "Label" to "div"
        bar.appendChild(barLabel);

        // Append "div" to "data-container div"
        container.appendChild(bar);
    }
}

// Call "generatebars" function
randombars();

// function to generate new random array
function generate() {
    window.location.reload();
}

//-->Selection Sort<--//
async function SelectionSort() {
    let bars = document.querySelectorAll(".bar");
    // Assign 0 to min_idx
    var min_idx = 0;
    for (var i = 0; i < bars.length; i += 1) {

        // Assign i to min_idx
        min_idx = i;

        // Provide dark-blue color to the ith bar
        bars[i].style.backgroundColor = "rgb(0%, 0%, 100%)";
        for (var j = i + 1; j < bars.length; j += 1) {

            // Provide red color to the jth bar
            bars[j].style.backgroundColor = "green";

            // To pause the execution of code for 500 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 350)
            );

            // To store the integer value of jth bar to var1
            var val1 = parseInt(bars[j].childNodes[0].innerHTML);

            // To store the integer value of (min_idx)th bar to var2
            var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

            // Compare val1 & val2
            if (val1 < val2) {
                if (min_idx != i) {

                    // Provide skyblue color to the (min-idx)th bar
                    bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
                }
                min_idx = j;
                bars[min_idx].style.backgroundColor = "red";
            } else {

                // Provide skyblue color to the jth bar
                bars[j].style.backgroundColor = " rgb(24, 190, 255)";
            }
        }

        // To swap ith and (min_idx)th bar
        var temp1 = bars[min_idx].style.height;
        var temp2 = bars[min_idx].childNodes[0].innerText;
        // await swap(temp1, temp2);
        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;

        // To pause the execution of code
        // for 500 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 350)
        );

        // Provide skyblue color to the (min-idx)th bar
        bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

        // Provide orange color to the ith bar
        bars[i].style.backgroundColor = "rgb(100%, 33%, 20%)";
    }


}
//-->Bubble sort<--//

// Promise to swap two blocks
function swap(el1, el2) {
    return new Promise((resolve) => {

        // For exchanging styles of two blocks
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;

        window.requestAnimationFrame(function() {

            // For waiting for .25 sec
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 350);
        });
    });
}

// Asynchronous BubbleSort function
async function BubbleSort(delay = 350) {
    var blocks = document.querySelectorAll(".bar");

    // BubbleSort Algorithm
    for (var i = 0; i < blocks.length; i += 1) {
        for (var j = 0; j < blocks.length - i - 1; j += 1) {

            // To change background-color of the
            // blocks to be compared
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";

            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

            console.log("run");
            var value1 = Number(blocks[j].childNodes[0].innerHTML);
            var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

            // To compare value of two blocks
            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".bar");
            }

            // Changing the color to the previous one
            blocks[j].style.backgroundColor = "#6b5b95";
            blocks[j + 1].style.backgroundColor = "#6b5b95";
        }

        //changing the color of greatest element 
        //found in the above traversal
        blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
    }
}


//-->Bubble sort<--//
async function InsertionSort(delay = 350) {
    let bars = document.querySelectorAll(".bar");

    // Provide lightgreen colour to 0th bar
    bars[0].style.backgroundColor = " rgb(49, 226, 13)";
    for (var i = 1; i < bars.length; i += 1) {

        // Assign i-1 to j
        var j = i - 1;

        // To store the integer value of ith bar to key 
        var key = parseInt(bars[i].childNodes[0].innerHTML);

        // To store the ith bar height to height
        var height = bars[i].style.height;

        //Provide darkblue color to the ith bar 
        bars[i].style.backgroundColor = "darkblue";

        // To pause the execution of code for 600 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 350)
        );

        while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {

            // Provide darkblue color to the jth bar
            bars[j].style.backgroundColor = "darkblue";

            // For placing jth element over (j+1)th element
            bars[j + 1].style.height = bars[j].style.height;
            bars[j + 1].childNodes[0].innerText =
                bars[j].childNodes[0].innerText;

            // Assign j-1 to j
            j = j - 1;

            // To pause the execution of code for 600 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 350)
            );

            // Provide lightgreen color to the sorted part
            for (var k = i; k >= 0; k--) {
                bars[k].style.backgroundColor = " rgb(49, 226, 13)";
            }
        }

        // Placing the selected element to its correct position
        bars[j + 1].style.height = height;
        bars[j + 1].childNodes[0].innerHTML = key;

        // To pause the execution of code for 600 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 350)
        );
        // Provide light green color to the ith bar
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }

}