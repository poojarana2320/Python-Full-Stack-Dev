(() => {
    //Storing the data
    localStorage.setItem('user', JSON.stringify({name: 'John Doe', age: 35, city: 'Collingwood'}))

    //Retrieving the data
    let userObj = JSON.parse(localStorage.getItem('user'));

    //diplay the data
    console.log(userObj);

})()
