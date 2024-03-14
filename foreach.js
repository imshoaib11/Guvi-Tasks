var resume = `[
    { 
        "name": "Mohamed Shoaib Ibrahim"},
    {
        "Education": "Bachelor of Science in Information Technology"},
    {
        "Skills": "HTML, CSS, JavaScript, PHP, MySQL, Node.js, Express.js, React.js, Bootstrap"},
    {
        "Experience": "2021 - 2024"},
    {
        "Website": "http://mohamedshoaibibrahim.com"},
    {
        "LinkedIn": "https://www.linkedin.com/in/mohamed-shoaib-ibrahim/"},
    {
        "Github": "https://github.com/mohamedshoaibibrahim"},
    {
        "DOB": "15/02/2000"},
    {
        "Fathername": "Mohamed Arif"},
    {
        "Languagesknown": "English, Tamil, Hindi"},
    {
        "Mobileno": "+91-8124778823"},

    {
        "Email": "shoaib7337rko@gmail.com"},
    {           
        "Address": "A6/15, New Veena Apartment, Annanagar, Madurai - 625020"
    }
]`

    
    
    let parsed = JSON.parse(resume);

    /*for (let data of parsed){
        console.log(data);
    }*/

    /*for (var data in parsed) {
        console.log(parsed[data]);
    }*/

    parsed.forEach((data) => {

        console.log(data);
        
    });

    