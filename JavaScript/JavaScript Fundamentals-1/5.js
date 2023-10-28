let packagetype = "express";

switch (packagetype) {
    case "standard":
        console.log("Might take 3-5 days");
        break;

    case "express":
        console.log("Might take 1-2 days");
        break;
    
    case "overnight":
        console.log("Delivered the next day");
        break;

    default:
        console.log("Invalid Package Type");
        break;
}