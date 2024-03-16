import { feedbacksType } from "../components/comments"

export const pets = {
    dogs: 4,
    cats: 7,
    rabbits: 12,
    birds: 20
}

export const breeds = {
    dogs: {
        "Labrador Retriever": 3,
        "German Shepherd": 6,
        "Golden Retriever": 2,
        "Pomeranian": 5,
        "Havanese": 7
    },
    cats: {
        "Persian": 6,
        "Siamese": 9,
        "Maine Coon": 10,
        "Bengal": 3,
        "Himalayan": 0
    },
    rabbits: {
        "Holland Lop": 3,
        "Mini Rex": 7,
        "Lionhead": 4,
        "Netherland Dwarf": 3,
        "Polish": 3
    },
    birds: {
        "Amazon Parrots": 8,
        "Bluebirds": 10,
        "Sparrows": 3,
        "Ducks": 20,
        "Geese": 90
    }
}
export const availableOptions = {
    "Dogs": {
        image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3N8ZW58MHx8MHx8fDA%3D',
        about: "Dogs do speak, but only to those who know how to listen.",
    },
    "Cats": {
        image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHN8ZW58MHx8MHx8fDA%3D',
        about: "There are two means of refuge from the miseries of life: music and cats",
    },
    "Rabbits": {
        image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fHww',
        about: "Rabbits are playful and very loyal to their masters."
    },
    "Squirrels": {
        image: 'https://images.unsplash.com/photo-1507666405895-422eee7d517f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3F1aXJyZWx8ZW58MHx8MHx8fDA%3D',
        about: "Squirrels only make good pets if they really need your care and choose to see you as their caregiver."
    },

    "Birds": {
        image: 'https://images.unsplash.com/photo-1480044965905-02098d419e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJpcmRzfGVufDB8fDB8fHww',
        about: "Birds are lovely creatures that can fly high in the sky."
    }
}

export const abouts = {
}
export const customerCount = {
    2018: 80,
    2019: 55,
    2020: 35,
    2021: 60,
    2022: 40,
    2023: 70,
}

export const backgroundColor = [
    "rgba(106, 90, 205,0.6)",
    "rgba(238, 130, 238,0.6)",
    "rgba(185, 177, 238,0.6)",
    // "rgba(150, 86, 150,0.6)",
    "rgba(76, 67, 131,0.6)",
    "rgba(196, 147, 196,0.6)",
]
export const borderColor = [
    "rgb(106, 90, 205)",
    "rgb(238, 130, 238)",
    "rgb(185, 177, 238)",
    "rgb(150, 86, 150)",
    "rgb(76, 67, 131)",
    "rgb(196, 147, 196)",
]

export const feedbacksData: feedbacksType[] = [
    {
        mail: "shree@gmail.com",
        comment: "Great work this app is amazing!",
        type: "good"
    },
    {
        mail: "pabi@gmail.com",
        comment: 'This app helped in finding the best pet',
        type: 'good'
    },
    {
        mail: "pooja@gmail.com",
        comment: 'I love the pet i got from this app',
        type: 'good'
    },
    {
        mail: 'aditya@gmail.com',
        comment: "I love this app",
        type: 'good'
    },
    {
        mail: 'prabha@gmail.com',
        comment: 'This app is good but I need enhancements',
        type: "bad"
    },
    {
        mail: "sullan@gmail.com",
        comment: "Need improvements!",
        type: "bad"
    }
]