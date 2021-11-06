const fs = require('fs')
const chalk=require('chalk')


const addMovie = function (moviename, director,music,cast,rating) {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note)=> note.moviename === moviename)
    
    if (!duplicateNotes) {
        notes.push({
            moviename: moviename,
            director:director,
            music:music,
            cast:cast,
            rating:rating 
        })
        saveNotes(notes)
        console.log(chalk.blue.inverse.bold('New Movie Info Added!'));
    } else {
        console.log(chalk.yellow.inverse.bold('Movie Title was already Taken!.please try new...'))
    }
}

const removeNote = function (moviename) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.moviename !== moviename
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Moie removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No Movie found!'))
    }    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('movies.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('movies.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listMovies=function()
{
    const notes=loadNotes();
    console.log(chalk.green.inverse.bold('List Available Movie Titles:'));
    notes.forEach((x) => {
        console.log(x.moviename);
    });
}
const listbydirectors=function(director)
{
    const notes=loadNotes();
    const no=notes.find(x=>x.director===director)
    const note=notes.filter(x=>x.director===director)
    if(note)
    {
        console.log(chalk.inverse.blue(director+":Directed movies :"));
        note.forEach(e => {
            console.log(e.moviename);
        });
        //console.log(note);
    }
    if(!no){
        console.log('Not Directed from available movies ');
    }
}
const listbycasts=function(cast)
{
    const notes=loadNotes();
    const no=notes.find(x=>x.cast===cast)
    const note=notes.filter((x)=>x.cast.includes(cast))
    console.log(chalk.inverse.blue(cast+":acted movies :"));
    if(note)
    {  
       
        note.forEach(e => {
             console.log(e.moviename);
         });
       // console.log(note);
    }
    if(!no)
    {
        console.log(' Not acted available movies');
    }
    
    
   
    
}
     
   
    

// const listbycasts=function(cast)
// {
//     const notes=loadNotes();
//     const note=notes.filter((x)=>x.cast===cast)
//     if(note)
//     {
//         console.log(note);
//     }else
//     {
//         console.log(chalk.inverse.red('Not found notes'));
//     }
// }   
   
 

module.exports = {
    listbydirectors:listbydirectors,
    addMovie: addMovie,
    removeNote:removeNote,
    listMovies:listMovies,
    listbycasts:listbycasts
}
//node index.js   listbycast  --cast="[f,g]"
//node index.js   listbycast  --cast="f,r"

    