User.delete_all

user1 = User.create!(
    email: 'bulbasaur@pokemon.com',
    password: 'razorleaf',
    fname: 'Bulba',
    lname: 'Saur',
    birthday: 'June 3, 1997',
    gender: 'M'
)

user2 = User.create!(
    email: 'pikachu@pokemon.com',
    password: 'thunderbolt',
    fname: 'Pika',
    lname: 'Chu',
    birthday: 'April 1, 1997',
    gender: 'F'
)