/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_Name, _Age, _Course, _YearLevel) {
    const NFT = {
        "Name": _Name,
        "Age": _Age,
        "Course": _Course,
        "YearLevel": _YearLevel
    }
    NFTs.push(NFT);
    console.log("Minted: " + _Name)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFTs.length; i++) {
        console.log("\nName: \t\t" + NFTs[i].Name);
        console.log("Age: \t\t" + NFTs[i].Age);
        console.log("Course: \t" + NFTs[i].Course);
        console.log("YearLevel: \t" + NFTs[i].YearLevel);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT ("John", "20", "BSIT", "2nd year")
mintNFT ("Carlo", "21", "BSIT", "4th year")
mintNFT ("Mark", "19", "BSIT", "2nd year")
mintNFT ("Rae", "21", "BSIT", "3nd year")
mintNFT ("Mer", "22", "BSIT", "2nd year")

listNFTs();
getTotalSupply();
