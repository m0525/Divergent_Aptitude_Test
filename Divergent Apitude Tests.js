//LOL you can't see this!! :)
//EASTEREGG();

//Version 1.5.0_Release
var Divergent = false;
var name;
var books = false;
var game = true;
var damage = 100.0;
var repeat1 = false;
var Clothes = "Night";
var Knife = false;
var Cheese = false;
var No = false;
var Abnegation = 0;
var Dauntless = 0;
var Candor = 0;
var Eridite = 0;
var Amity = 0;
var Know_The_Man = false;


// Get the users name
var name = prompt("What do you wish to be called?");
alert("Wake up " + name + "!");
alert("You are going to be late for school if you don't wake up!!"); 

// Loop through questions until Game is set to False
while (game === true)
{
// Ask what they want to do    
    do
        {
        var prompt1 = prompt ("What do you want to do while you are in your room? (Type ‘What can I do?’ for more info)");
	if (prompt1 === "What can I do?") 
            {
            alert("You can ‘Change clothes’, ‘Look in your drawer’, or ‘Walk downstairs’");
            }
        }
    while (prompt1 === "What can I do?");
        
    
    if ((prompt1 === "Change clothes") || (prompt1 === "Change Clothes") || (prompt1 === "CHANGE CLOTHES"))
        {
        Clothes = Abnegation;
        alert("You changed into Abnegation clothes, you are now ready to go to school.");
        }
    if (prompt1 === "Look in your drawer") 
        {
        alert("You find a few books that you were missing. So that's where they were...");
        books = true;
        Eridite = Eridite + 1;
        }
    if (prompt1 === "Quit")
        {
        game = false;
        }
    if (prompt1 === "Walk downstairs")  
        {
        if (Clothes === "Night") 
            {
            alert("You should get some of your better clothes on.");
            }
            
        if (Clothes !== "Night") 
            {
            alert("Downstairs there is a mirror and a kitchen. You fix your hair and decide you should eat something. You quickly eat a granola bar, and run to school.");
            alert("You now are at school, everybody is anxious for the tests. Even the dauntless, who have to jump off a moving train to get to school."); 
            alert("One by one everyone goes into the testing room.");
            alert("You hear your name called, “" + name + "”!");
            alert("You walk into the testing room nervously.");
            alert("”The test will now begin. You will be hooked into the computer, and you must complete it to the best of your abilities.” says the tester.");
            alert("You feel a surge and then you enter a room that mimics your cafeteria. You remind yourself that it is just a dream, and nothing can hurt you.");


// Ask if they will choose the cheese or the knife.       
            do
                {
                var prompt2 = prompt("You walk forward and see two baskets sitting on one of the tables. One has some cheese in it, the other has an arm long knife. Will you take the knife or the cheese?");
                if ((prompt2 !== "Knife") && (prompt2 !== "Cheese") && (prompt2 !== "No"))
                    {
                    alert("Please choose something.");
                    }
                }
            while ((prompt2 !== "Knife") && (prompt2 !== "Cheese") && (prompt2 !== "No"));
                    
// If Knife is chosen, Dauntless level increases by 2                    
            if (prompt2 === "Knife") 
                {
                repeat2 = false;
                alert("You take the knife and the cheese disappears.");
                Knife = true;
                Dauntless = Dauntless + 2;
                }
// If Cheese is chosen, Amity level increases by 2, Eridite level increases by 2
            if (prompt2 === "Cheese") 
                {
                repeat2 = false;
                alert("You take the cheese and the knife disappears.");
                Cheese = true;
                Amity = Amity + 2;
                Eridite =  Eridite + 2;
                }
 
//  If neither is chosen, then they are Divergent
            if (prompt2 === "No") 
                {
                prompt("'Are you sure you want to do this?' says the tester.");
                alert("'That was not a good choice' the tester says");
                alert("Both the knife and the cheese disappear, and you are left with nothing.");
                No = true;
                Divergent = true;
                }
                        
// Quit Game if chosen                       
            if (prompt2 === "Quit") 
                {
                game = false;
                }
                
            alert("A dog walks through the door, and you immediately feel a pang of fear.");
            alert("The dog starts growling and you know you must either tame it, or kill it.");
            
            do
                {
                prompt3 = prompt("How will you handle this? (Once again, you can type 'What can I do?')");
                if (prompt3 === "What can I do?") 
                    {
// If they have the knife, they can attack, Run or Defend
                    if (Knife === true) 
                        {
                        alert("You can 'Attack', 'Run', or 'Defend'");
                        }
                            
// If they have the cheese,they can Rame, Run or Defend                    
                    if (Cheese === true) 
                        {
                        alert("You can 'Tame', 'Run', or 'Defend'");
                        }
                            
// If they did not previously choose the Knife or Cheese                            
                    if (No === true) 
                        {
                        alert("You can 'Run' or 'Defend'");
                        }
                    }
                }
            while (prompt3 === "What can I do?");
                                
            if (prompt3 ===  "Run") 
                {
                alert("You lunge at one of the doors, expecting it to open. It is locked. You must come up with another idea, and quickly too, the dog is advancing on you every second you waste.");
                }
				
            if (prompt3 === "Tame") 
                {
                if (Cheese === true) 
                    {
                    Amity = Amity + 1;
                    alert("The dog is going crazy for the wedge of cheese in your hand. You throw the cheese to the dog, and the dog immediately calms down. A little girls runs up to you, thanks you for finding her dog, and runs away with her dog. You decide to take bus back to your home.");
                    }
				else
					{
					Amity = Amity + 1;
					alert("You lay on the ground and face the dog.");
					alert("The dog backs off.");
					alert("A little girl walks over and pets the dog. 'Thanks for finding my dog for me! I have to go now, but I hope to see you soon!' she says, then runs away with her dog. You decide to take bus back to your home.");
					}
                }
                        
            if (prompt3 === "Defend") 
                {
                Eridite = Eridite + 1;
                alert("You kick over one of the tables, and use it as a giant shield.");
                alert("The dog easily jumps over it. You lay on the ground as you remember it shows your submission to wolfs.");
                alert("The dog looks at you and licks your ear. A little girl walks over and pets the dog. 'Thanks for finding my dog for me! I have to go now, but I hope to see you soon!' she says, then runs away with her dog. You decide to take bus back to your home.");
                }
				
            if (prompt3 === "Quit") 
                {
                game = false;
                }
				
            if (prompt3 === "Attack") 
                {
                if (Knife === false) 
                    {
                    alert("You don't have anything to attack with! Look around. There may be something...");
                    }
                if (Knife === true) 
                    {
                    Dauntless = Dauntless + 1;
                    alert("You manage to get the dog right between the eyes. You see a little girl run over to you.");
                    alert("'Did you do this to my dog?' She says sobbing");
                    alert("You have to remind yourself that you are still in the test, and you walk out of the room and board the bus home.");
                    }
                }
            alert("'Well done' says the tester, 'you are now moving on to the next part of the test.'");
            alert("You are now on a bus, no one is on it except you and one other person. The other person is reading a newspaper. The cover of the newspaper has a person on it, that you seem to remember, but you don't exactly know their name.");
            alert("The man on the bus asks you 'Do you know this person?' He sounds desperate.");
      
            var prompt4 = prompt("How do you respond? 'Yes' or 'No'?");


            if (prompt4 === "Yes") 
                {
                Candor = Candor + 2;
                alert("'Are you sure you know him? This friend of yours has committed some terrible acts of crime against our world!'");
                alert("'The test is now over. Your results will be given to you once the effects of the test serum wear off.'");
                }
            if (prompt4 === "No") 
                {
                Amity = Amity + 1;
                alert("He looks at you as if he knows you are lying, then looks away, sadly. 'The test is now over. Your results will be given to you once the effects of the test serum wear off.'");
                }
                            
// This determines if you are Divergent                        
            if (Divergent === true)
                {
                alert("'We have some grave news for you... You are divergent'");
                game = false;
            }
                else 
                        {
                        game = false;
// Setup an Array that will hold the value for each Level Type
                        var YourLevelNum = new Array(Abnegation, Amity, Eridite, Dauntless, Candor);
                        var YourLevelName = new Array("Abnegation", "Amity", "Eridite", "Dauntless", "Candor");
                        var GreatestLevel = 0;
                        var i = 1;

// Loop through the  array of Levels to find the largest level
                        for (i; i < YourLevelNum.length; i++)
                                {
                                if (YourLevelNum[i] > YourLevelNum[GreatestLevel])
                                    {
                                    GreatestLevel = i;
                                    }
                                }                    
                                alert("'You are " + YourLevelName[GreatestLevel] + "' says the tester");
                                alert("Thank you very much for playing this game!! This game is made by: Red$hadow, BMT01, and help from some others. :)");
                        }
               }
        }
}