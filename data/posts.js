import { USERS } from './users'

export const POSTS = [
    {
        imageUrl: 'https://d.newsweek.com/en/full/1151055/reshiram-zekrom-distribution-pokemon.jpg?w=1600&h=1600&q=88&f=aa83d550fd026741a14c714d0a08b80e',
        user: USERS[0].user,
        likes: 56852,
        caption: 'Whats your favorite one growing up?',
        profilePicture: USERS[0].image,
        comments: [
            {
                user: 'dylan452',
                comment: 'zekrom>>',
            },
            {
                user: 'henry1112',
                comment: 'i am a bot',
            },
        ],
    },
    {
        imageUrl: 'https://static.wikia.nocookie.net/inreallife/images/a/a1/Post_Malone_-_Beerbongs_%26_Bentleys.jpeg/revision/latest?cb=20180915054313',
        user: USERS[1].user,
        likes: 1829183,
        caption: 'b&b out now',
        profilePicture: USERS[1].image,
        comments: [
            {
                user: 'dougp09',
                comment: 'LETS GOOOOOO'
            },
            {
                user: 'pault21',
                comment: 'so good',
            },
        ],
    },
    {
        imageUrl: 'https://thumbs.dreamstime.com/z/saint-petersburg-russia-may-logo-all-national-football-league-teams-nfl-team-icons-set-all-new-football-teams-logos-vector-217811703.jpg',
        user: USERS[2].user,
        likes: 291823,
        caption: 'Superbowl Picks?',
        profilePicture: USERS[2].image,
        comments: [
            {
                user: 'dougp09',
                comment: 'this is the lions year'
            },
            {
                user: 'pault21',
                comment: 'panthers season',
            },
            {
                user: 'trollgod12',
                comment: 'jags',
            },
            {
                user: 'nah321',
                comment: 'none',
            },
        ],
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/61i8Vjb17SL.jpg',
        user: USERS[3].user,
        likes: 1291823,
        caption: 'iPhone.',
        profilePicture: USERS[3].image,
        comments: [
            {
                user: 'bobbyh',
                comment: 'This is sick!'
            },
            {
                user: '21lmao42',
                comment: 'android better',
            },
        ],
    },
    {
        imageUrl: '',
        user: USERS[4].user,
        likes: 1291823,
        caption: 'North Campus on a Wednesday ☀️',
        profilePicture: USERS[4].image,
        comments: [
            {
                user: 'bobbyh',
                comment: 'Beautiful view'
            },
        ],
    },
]