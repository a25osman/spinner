console.clear()
let arr = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]
for(let i in arr) {
  setTimeout(() => {
    process.stdout.write(`\r${arr[i]}    `);
    if (i == arr.length - 1) {
      console.log("\n");
    }
  }, 100 + 200 * i);
}