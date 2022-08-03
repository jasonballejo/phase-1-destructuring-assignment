const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

const moo = farmAnimals.split(' ')[0]      
const neigh = farmAnimals.split(' ')[1]
const baa = farmAnimals.split(' ')[2]
const oink = farmAnimals.split(' ')[3]
const cluck = farmAnimals.split(' ')[4]
  
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

  let bessie = moo.split(' ')[0]
  let dolly = baa.split(' ')[0]
  let babe = oink.split(' ')[0]
  let little = cluck.split(' ')[0]

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

  let blackAndWhite = bessie.split(' ')[0]
  let black = dolly.split(' ')[0]
  let pink = babe.split(' ')[0]

// 4. Use destructuring to assign appropriate variables using the color names.

  let red = colors.splice(0, 1)[0]
  let orange = colors.splice(0, 1)[0]
  let yellow = colors.splice(0, 1)[0]
  let green = colors.splice(0, 1)[0]
  let blue = colors.splice(0, 1)[0]
  let indigo = colors.splice(0, 1)[0]
  let violet = colors.splice(0, 1)[0]

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

  let r = red.split(0, 1)[0]
  let o = orange.split(0, 1)[0]
  let y = yellow.split(0, 1)[0]
  let g = green.split(0, 1)[0]
  let b = blue.split(0, 1)[0]
  let v = violet.split(0, 1)[0]

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

  let indg = indigo.split(0, 1)[0]

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

  let { muppetName } = muppet 
  let { color } = muppet
  let { song } = muppet
  let { job } = muppet
  let { partner } = muppet

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

  const song2 = nestedMuppet.album.theMuppetMovie.song2
  const song4 = nestedMuppet.album.theMuppetMovie.song4
  const nestedJob = nestedMuppet.nestedJob
  const nestedPartner = nestedMuppet.nestedPartner


  // const obj = { 
  //   a: 1, 
  //     b: { 
  //       c: 2 
  //   } }
  //   ;
  // const { a } = obj; // a is constant
  // let { b: { c: d } } = obj; // d is re-assignable