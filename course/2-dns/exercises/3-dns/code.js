function getDomainNameFromURL(url) {
  const address = new URL(url);
  return address.host;
}

// don't touch below this line

const bootdevURL = "https://boot.dev/learn/learn-python";
const domainName = getDomainNameFromURL(bootdevURL);
console.log(`The domain name for ${bootdevURL} is ${domainName}`);
