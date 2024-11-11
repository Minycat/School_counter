count = 0;
saveNum = []

function increment()
{
    count++;
    document.getElementById("count-el").innerText = count;
}

function save()
{
    saveNum.push(count)
    document.getElementById("prev-el").innerText = "Previous Elements: " + saveNum;

}
document.getElementById("count-el").innerText = 0;