# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.destroy_all
Book.destroy_all
User.destroy_all

@user = User.create!(username: 'Dan', email: 'dan@theman.com', password: '123456', img_url: 'picture')
@user_2 = User.create!(username: 'Jovi', email: 'jovi@thechick.com', password: '123456', img_url: 'picture')
puts "#{User.count} users created"

@layla = Book.create!(
  title:'Layla', 
  author:'Colleen Hoover', 
  genre:'thriller', 
  release_date: DateTime.parse("12/08/2020 10:00"), 
  img_url:'https://i.imgur.com/0ORCy3D.jpg', 
  synopsis:'When Leeds meets Layla, he’s convinced he’ll spend the rest of his life with her—until an unexpected attack leaves Layla fighting for her life. After weeks in the hospital, Layla recovers physically, but the emotional and mental scarring has altered the woman Leeds fell in love with. In order to put their relationship back on track, Leeds whisks Layla away to the bed-and-breakfast where they first met. Once they arrive, Layla’s behavior takes a bizarre turn. And that’s just one of many inexplicable occurrences.',
  user: @user
)

@camp = Book.create!(
  title:'Camp', 
  author:'Kayla Miller', 
  genre:'childrens', 
  release_date: DateTime.parse("12/09/2020 10:00"), 
  img_url:'https://i.imgur.com/IOokcc6.jpg', 
  synopsis:'Olive is sure she’ll have the best time at summer camp with her friend Willow – but while Olive makes quick friends with the other campers, Willow struggles to form connections and latches on to the only person she knows – Olive. It’s s’more than Olive can handle! The stress of being Willows living security blanket begins to wear on Olive and before long…the girls aren’t just fighting, they may not even be friends by the time camp is over. Will the two be able to patch things up before the final lights out?',
  user: @user_2
)

@verity = Book.create!(
  title:'Verity', 
  author:'Colleen Hoover', 
  genre:'thriller', 
  release_date: DateTime.parse("12/07/2018 11:00"), 
  img_url:'https://i.imgur.com/vrCvGYT.jpg', 
  synopsis:'OLowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish. Lowen arrives at the Crawford home, ready to sort through years of Veritys notes and outlines, hoping to find enough material to get her started. What Lowen doesnt expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read. Page after page of bone-chilling admissions, including Veritys recollection of what really happened the day her daughter died.',
  user: @user
)

@sadie = Book.create!(
  title:'Sadie', 
  author:'Courtney Summers', 
  genre:'Young Adult', 
  release_date: DateTime.parse("09/04/2018 1:00"), 
  img_url:'https://i.imgur.com/HK5bMDi.jpg', 
  synopsis:'A missing girl on a journey of revenge. A Serial―like podcast following the clues shes left behind. And an ending you wont be able to stop talking about.Sadie hasnt had an easy life. Growing up on her own, shes been raising her sister Mattie in an isolated small town, trying her best to provide a normal life and keep their heads above water.But when Mattie is found dead, Sadies entire world crumbles. After a somewhat botched police investigation, Sadie is determined to bring her sisters killer to justice and hits the road following a few meager clues to find him.',
  user: @user_2
)

@thunderhead = Book.create!(
  title:'Thunderhead', 
  author:'Neal Shusterman', 
  genre:'Young Adult', 
  release_date: DateTime.parse("01/09/2018 11:30"), 
  img_url:'https://i.imgur.com/RXnxcuX.jpg', 
  synopsis:'Rowan has gone rogue, and has taken it upon himself to put the Scythedom through a trial by fire. Literally. In the year since Winter Conclave, he has gone off-grid, and has been striking out against corrupt scythes—not only in MidMerica, but across the entire continent. He is a dark folk hero now—“Scythe Lucifer”—a vigilante taking down corrupt scythes in flames.Citra, now a junior scythe under Scythe Curie, sees the corruption and wants to help change it from the inside out, but is thwarted at every turn, and threatened by the “new order” scythes. Realizing she cannot do this alone—or even with the help of Scythe Curie and Faraday, she does the unthinkable, and risks being “deadish” so she can communicate with the Thunderhead—the only being on earth wise enough to solve the dire problems of a perfect world. But will it help solve those problems, or simply watch as perfection goes into decline?',
  user: @user
)

  puts "#{Book.count} books created"

  Review.create!(rating: 4, content:'This book was great!', book:@thunderhead, user:@user)

  Review.create!(rating: 3, content:'What a rollercoaster!',  book:@sadie, user:@user_2)

  Review.create!(rating: 3, content:'very suspensful, did not see the ending coming.',  book:@verity, user:@user)

  Review.create!(rating: 5, content:'Fun for the kiddos', book:@camp, user:@user_2)

  Review.create!(rating: 4, content:'You will enjoy if you want to try scary but not too scary', book:@layla, user:@user )

  Review.create!(rating: 4, content:'Loved it!',  book:@layla, user:@user_2)
  
  puts "#{Review.count} reviews created"

