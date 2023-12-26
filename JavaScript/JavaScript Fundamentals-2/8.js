const eventDate = '2023-08-31'

function calculateRemainingDays(eventDate){

    const oneDay = 24 * 60 * 60 * 1000;

    const currentdate = new Date();
    const eventdate= new Date(eventDate);

    const daysleft = Math.ceil((eventdate-currentdate)/oneDay)
    return daysleft;
}


console.log(calculateRemainingDays (eventDate));