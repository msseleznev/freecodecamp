// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
   if (prop !==  "tracks" && value !== "" ) {  // выполянет проверлу, если prop не "tracks" и value не пустая строка
       records[id][prop] = value; // присваевает prop значение value
   } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false ) { //если prop = "tracks" и объект id имеет свойство "tracks"
       records[id][prop] = [value];  // присваевате prop значение в виде массива содержащий value
   } else if(prop === "tracks" && value !== "") { // если prop это "tracks" и value не пустая строка
       records[id][prop].push(value); // добавляет значение value в массив prop
   } else if (value === "") {  // если value является пустой строкой
       delete records[id][prop]; // удаляет свойство prop из альбома
    }

    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');