function validateLinkedInProfile(url) {
    const linkedinProfileUrlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    if (linkedinProfileUrlRegex.test(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
}

validateLinkedInProfile("https://www.linkedin.com/in/example123"); 
validateLinkedInProfile("https://www.linkedin.com/in/invalid!@#$");
validateLinkedInProfile("https://www.linkedin.com/profile");
