const UrlPattern = /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/igm

let input = "https://pwskills.com";

console.log(UrlPattern.test(input))