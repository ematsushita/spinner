const spinner = "|/-\|";
delay = 950;

for (const spin of spinner) {
  delay += 100;
  setTimeout(() => {
    process.stdout.write('\r' + spin)
  }, delay)
};

setTimeout(() => {
  console.log("");
}, delay + 100);