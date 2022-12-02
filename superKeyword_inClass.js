class parentClass{

    hello1(){
        console.log("hello i am from parent class and my child can use me")
    }

    hello2(){
        console.log("hello i am from parent class and my child can use me")
    }



}


class childClass extends parentClass{

    demo(){
        super.hello1()//super keyword can be used in calling for parent classes methods & it's a special power
        super.hello2()
    }

}


var obj=new childClass();
obj.demo();