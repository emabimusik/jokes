export class Joke{

    public setup: string;
    public punchline: string;
    public hide: boolean;
 constructor(setup:string,punchLine:string) {
     this.setup = setup;
     this.punchline = punchLine;
     this.hide = true;

 }
 toggle(){
    this.hide= !this.hide;
   }

}