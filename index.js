const { demandOption} = require('yargs');
const yargs=require('yargs');
const data=require('./data.js')
yargs.command({
    command:'add',
    desc:'add something',
    builder:{
      moviename:{
          desc:'moviename name',
          demandOption:'true',
          type:'String'
      },
      director:{
         desc:'body something',
         demandOption:'true',
         type:'String'
      },
      music:{
        desc:'body something',
        demandOption:'true',
        type:'String'
     },
     cast:{
        desc:'co actors',
        demandOption:'true',
        type:'Array'
     },
     rating:{
        desc:'rating based on reviewers',
        demandOption:'true',
        type:'Number'
     }
    },
    handler(argv){
        data.addMovie(argv.moviename, argv.director,argv.music,argv.cast,argv.rating);
    }
})
yargs.command({
    command:'listavailablemovies',
    desc:'list something',
    handler(){
        data.listMovies();
    }
})
yargs.command({
    command:'listbydirector',
    desc:'list something',
    builder: {
        director: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        data.listbydirectors(argv.director);
    }
})
yargs.command({
    command:'listbycast',
    desc:'list something',
    builder: {
        cast: {
            describe: 'casts',
            demandOption: true,
            type: 'Array'
        }
    },
    handler(argv){
        data.listbycasts(argv.cast);
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        moviename: {
            describe: 'Movie title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        data.removeNote(argv.moviename)
    }
})
console.log(yargs.argv);
