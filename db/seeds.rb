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

@user = User.create!(username: 'Dan', email: 'dan@theman.com', password: '123456')

puts "#{User.count} users created"

@layla = Book.create!(
  title:'Layla', 
  author:'Colleen Hoover', 
  genre:'thriller', 
  release_date:'12/08/2020', 
  img_url:'https://i.imgur.com/0ORCy3D.jpg', synopsis:'When Leeds meets Layla, he’s convinced he’ll spend the rest of his life with her—until an unexpected attack leaves Layla fighting for her life. After weeks in the hospital, Layla recovers physically, but the emotional and mental scarring has altered the woman Leeds fell in love with. In order to put their relationship back on track, Leeds whisks Layla away to the bed-and-breakfast where they first met. Once they arrive, Layla’s behavior takes a bizarre turn. And that’s just one of many inexplicable occurrences.'
)

@camp = Book.create!(
  title:'Camp', 
  author:'Kayla Miller', 
  genre:'childrens', 
  release_date: DateTime.parse('04/23/2019'), 
  img_url:'https://i.imgur.com/IOokcc6.jpg', synopsis:'Olive is sure she’ll have the best time at summer camp with her friend Willow – but while Olive makes quick friends with the other campers, Willow struggles to form connections and latches on to the only person she knows – Olive. It’s s’more than Olive can handle! The stress of being Willows living security blanket begins to wear on Olive and before long…the girls aren’t just fighting, they may not even be friends by the time camp is over. Will the two be able to patch things up before the final lights out?')

  @verity = Book.create!(
    title:'Camp', 
    author:'Kayla Miller', 
    genre:'childrens', 
    release_date: DateTime.parse('04/23/2019'), 
    img_url:'https://i.imgur.com/IOokcc6.jpg', synopsis:'Olive is sure she’ll have the best time at summer camp with her friend Willow – but while Olive makes quick friends with the other campers, Willow struggles to form connections and latches on to the only person she knows – Olive. It’s s’more than Olive can handle! The stress of being Willows living security blanket begins to wear on Olive and before long…the girls aren’t just fighting, they may not even be friends by the time camp is over. Will the two be able to patch things up before the final lights out?')

    @sadie = Book.create!(
      title:'Sadie', 
      author:'Courtney Summers', 
      genre:'Young Adult', 
      release_date: DateTime.parse('09/04/2018'), 
      img_url:'https://i.imgur.com/HK5bMDi.jpg', synopsis:'A missing girl on a journey of revenge. A Serial―like podcast following the clues shes left behind. And an ending you wont be able to stop talking about.

      Sadie hasnt had an easy life. Growing up on her own, shes been raising her sister Mattie in an isolated small town, trying her best to provide a normal life and keep their heads above water.
      
      But when Mattie is found dead, Sadies entire world crumbles. After a somewhat botched police investigation, Sadie is determined to bring her sisters killer to justice and hits the road following a few meager clues to find him.')