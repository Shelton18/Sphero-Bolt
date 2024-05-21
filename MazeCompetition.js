
// Programmer: Preston Simmons
// Team Member: LaDanien Shelton
//Bolt ID: 6B78
//Date: 4.30.2024
//Program: Maze Competition
//Program URL:https://edu.sphero.com/program/16788335/edit

async function startProgram() {
	// Programmer: Preston Simmons - Start Text & Audio Checkpoint Commit - Date:04/30/24
	   await scrollMatrixText('Start!', {R: 66, G: 56, b: 255}, 90, true)
	   await delay(1)
	   await speak("Start", true);



	// Programmer:LaDanien Shelton- Blue LED Cheackpoint Commit - Date: 05/01/24
	
	setMainLed({ r: 0, g: 0, b: 255});
	await roll((getHeading() + 0), 60, 2.7);


	 //Programmer:Preston Simmons - Sound One Checkpoint Commit - Date: 05/05/24
	await roll((getHeading() + 90), 60, 1.7);
	await delay(1);
	await Sound.Menu.Accept.play(true);


	// Programmer:LaDanien Shelton -Checkpoint Commit - Date: 05/01/24
	
	 await roll((getHeading() + 90), 60, 1.3);
	 await delay(1);
	 await roll((getHeading() + 45), 57, 1.1);
	 await delay(1);



    //Programmer: laDanien Shelton - Sound Two Checkpoint Commit - Date: 05/20/2024
	 setMainLed({ r: 225, g: 0, b: 0});
	 await delay(3);
	 setMainLed({ r:  0, g: 0, b: 0});
	 await roll((getHeading() - 90), 50, 1.3);
	 await delay(3);
	 await Sound.EightBit.PowerDown.play(true);
	 await delay(1)
	 await roll((getHeading() - 90), 60, 1.2);
	 await delay(1)
	 await roll((getHeading() + 90), 60, 0.9);

	 
	// Programmer LaDanien Shelton - Green LED Checkpoint Commit - Date: 05/20/2024

     await delay(1)
	 setMainLed({ r: 0, g: 225, b: 0});
	 await delay(3);
	 await roll((getHeading() + 35), 50, 0.7);

   
}




	// Programmer 			- Red LED Checkpoint Commit - Date:




	//Programmer:           - Sound Two Checkpoint Commit - Date:




	// Programmer 			- Green LED Checkpoint Commit - Date:




	// Programmer 			- Purple LED & Sound Three Checkpoint Commit - Date:




	// Programmer			- Finish Text & Audio Checkpoint Commit - Date

}
	



	
