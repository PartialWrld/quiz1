class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
this.question1= createElement('h2')


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.option1= createElement('h3')
    this.option2= createElement('h3')
    this.option3= createElement('h3')
    this.option4= createElement('h3')

    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
this.question1.html("question:what starts and ends with E and has only one letter.")
this.question1.position(150,80)

this.option1.html("1. everyone")
this.option1.position(150,110)

this.option2.html("2. estimate")
this.option2.position(150,130)

this.option3.html("3. envelope")
this.option3.position(150,160)

this.option4.html("4. example")
this.option4.position(150,180)




    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
this.message.html("Thank you for response!")
this.message.position(350,350)
    })


  }
}
