import Plant from '../../models/plants.js'
import User from '../../models/user.js'

// !This is for seeding your test database with data!
export default async function setup(done) {
  try {
    const user = await User.create([
      {
        "username": "spike",
        "password": "Spike12345!!",
        "passwordConfirmation": "Spike12345!!",
        "email": "spike@ibegyourgarden.com",
      }
    ])
    await Plant.create([
      {
        name: "",
        commonName: "Succulent",
        about: "Succulent is an umbrella term for a large group of plants that generally have thick, fleshy leaves that hold a lot of water (the name comes from the latin for 'juice'). They're found all over the world, almost exclusively in very warm places that have periods of drought.",
        likes: "Light watering, bright light, and warmth.",
        size: "Small",
        image: "https://res.cloudinary.com/dgicm5dgb/image/upload/v1655563570/succulent_zrxyef.jpg",
        price: 6,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "Snake Plant",
        about: "If you've never taken care of a plant before and want an easy start, the snake plant is the one for you. You'd have to try pretty hard to actually kill one. It thrives on neglect, responding best to the lightest of watering and then just being left alone. It will appreciate a feed with liquid fertiliser once per month in spring and summer, but that's about as much special attention as it needs.",
        likes: "Light watering, most light conditions, and dusting.",
        size: "Medium",
        image: "https://res.cloudinary.com/dgicm5dgb/image/upload/v1655563910/snakeplant_smmxw7.jpg",
        price: 10,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "Boston Fern",
        about: "You'll find Boston Ferns in the wild in humid, shady areas, like swamps and forests, in South and Central America, the West Indies and Africa. They love anywhere wet, hot and not too bright. As a houseplant, they really became popular with the Victorians - those guys absolutely loved an exotic houseplant - thriving in the poorly lit, likely damp homes of the 1800s.",
        likes: "Frequent watering, most light conditions, and humidity.",
        size: "Medium",
        image: "https://res.cloudinary.com/dgicm5dgb/image/upload/v1655563910/bostonfern_ku52tk.jpg",
        price: 10,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "Aspidistra Plant",
        about: "Aspidistra are sometimes known as the Cast Iron Plant because they're almost impossible to kill. They're practically bomb-proof (we have not tested this). If you forget to water yours, give it a dark spot and just generally forget it exists for a bit, it will merrily make do on its own.",
        likes: "Light watering, most light conditions, and humidity.",
        size: "Large",
        image: "https://res.cloudinary.com/dgicm5dgb/image/upload/v1655563907/Aspidistra_wq27jp.jpg",
        price: 24,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "Swiss Cheese Plant",
        about: "This plant's latin name, monstera deliciosa, translates as - you've probably worked this out - 'delicious monster'. And isn't it just. The monster part is likely because of its huge, glossy leaves. The delicious part is because in the wild it bears (apparently) very tasty fruit.",
        likes: "Light watering, medium light, and humidity.",
        size: "Medium",
        image: "https://res.cloudinary.com/dgicm5dgb/image/upload/v1655563991/SwissCheesePlant_jbxn99.jpg",
        price: 55,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "Zamioculcas zamiifolia",
        about: "Zamioculcas Zamiifolia or the ZZ Plant (say Zee Zee Plant) is a simple and straightforward houseplant that's ideal for both new and experienced plant parents alike. It's a cinch to keep alive so makes an ideal gift for those with brown thumbs or where an office plant that can put up with periods of drought and fluorescent lights is needed. Additionally it's currently fashionable and fits within a contemporary or traditional home perfectly.",
        likes: "Light watering, mostly sunny spots and fertilizer feeds every once in awhile",
        size: "Medium",
        image: "https://res.cloudinary.com/dlxbte5xh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1655821519/pexels-th%C3%A0nh-%C4%91%E1%BB%97-5188783_vy0sib.jpg",
        price: 17,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "Pygmy Pineapple",
        about: "The dwarf pineapple plant, or mini pineapple plant, often comes with a small pineapple on top of the plant, has been taking the houseplant world by storm. It’s easy to understand why: owning a pineapple plant is just fun. And these plants are nice to look at as well, with spiky leaves in colors like green and dark red. There are even variegated varieties to choose from!",
        likes: "Light watering, medium light and lots of humid vibes",
        size: "Medium",
        image: "https://res.cloudinary.com/dlxbte5xh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1655823001/pexels-madison-inouye-1382389_dtpoa0.jpg",
        price: 15,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "Fig Tree",
        about: "Once you've picked and eaten a fig straight off the tree, warm from the sun, you'll wonder why you haven't been growing them for years. Not only is the fruit delicious, the leaves have a soft fragrance that hangs in the air all through summer.",
        likes: "Sunny spot, moist soil",
        size: "Large",
        image: "",
        price: 20,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "Peace Lily",
        about: "As you may have guessed from its love of steamy conditions, the peace lily is native to tropical rainforests, specifically those of South and Central America. It's thought it was brought to Europe some time in the late 1800s and it's adapted well to the UK's less than tropical conditions.",
        likes: "Light watering, most light conditions, humidity",
        size: "Medium",
        image: "",
        price: 20,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "Bay Tree",
        about: "The bay tree, or bay laurel, has been a beloved plant for centuries. The ancient Greeks and the ancient Romans considered it quite the status symbol. Wreaths of bay laurel were worn on the heads of the most important members of society and given as prizes in sporting competitions. Bay was a plant for champions.",
        likes: "Light watering",
        size: "Large",
        image: "",
        price: 100,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "Watermelon Peperomia",
        about: "There are many types of peperomia available as houseplants, which allows you to have a variety of visually different plants that all share the same care instructions. In fact, there are over 1,000 different varieties, and they all belong to the pepper plant family. Peperomias prefer low to moderate light and moist, well-drained soil.",
        likes: "Medium light, occasional watering and all the humidity",
        size: "Small",
        image: "https://res.cloudinary.com/dlxbte5xh/image/upload/v1655563345/pexels-ekaterina-bolovtsova-9130870_ksqdzw.jpg",
        price: 8,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "English Ivy",
        about: "English ivy (Hedera helix) is an easy-to-grow plant that does not like direct sunlight but does prefer bright light. It needs moist soil and cooler temperatures than most other house plants at about 50°F to 65°F (10°C to 18°C). Ivy likes humidity, so make sure you mist it or place it in a tray of pebbles and water. Regular fertilizing, except during the winter, is important to English ivy.",
        likes: "Mostly light, consistent watering and the occasional misting",
        size: "Small",
        image: "https://res.cloudinary.com/dlxbte5xh/image/upload/v1655563100/pexels-kulbir-7365049_ze1urb.jpg",
        price: 6,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "Cactus",
        about: "There is an enormous variety of cacti around the world, most of them cheerfully living in hot, dry conditions where most other plants would perish. They're succulents, which means they can store large amounts of water to keep them alive through long droughts.",
        likes: "Light watering, bright light",
        size: "Small",
        image: "",
        price: 8,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "Chinese Money Plant",
        about: "Native to the Yunnan and Sichuan provinces of southern China, the Chinese money plant was first brought to the UK in 1906 by Scottish botanist George Forrest (yes, we know the exact man who found it). It became a popular houseplant later in the 20th century because it is simple to grow and really easy to propagate, meaning friends could pass cuttings around amongst themselves. That earned it the nickname 'pass it on plant'. ",
        likes: "Light watering, medium light",
        size: "Small",
        image: "",
        price: 15,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "French lavender",
        about: "If your aesthetic leans more towards Provencal countryside than English garden, Laurens is the guy for you. Like his English cousin, Vanda, he's got fragrant purple blooms, but Laurens' flowers grow upwards from the top of his stalks, in little bursts resembling rabbit's ears. His blood runs warmer than Vanda's too, and he can't get enough sun. He'll be at his most beautiful and flowery during summer months.",
        likes: "A sunny spot, well drained soil",
        size: "Small",
        image: "",
        price: 10,
        user: user[0]._id,
      },
      {
        name: "",
        commonName: "Curly Spider Plant",
        about: "A classic of the houseplant world, the curly spider plant has been grown indoors for decades because it's incredibly easy to take care of. In the wild, it's most commonly found in tropical parts of Africa and Australia.",
        likes: "light watering, most light conditions",
        size: "Small",
        image: "",
        price: 8,
        user: user[0]._id,
    
      },
      {
        name: "",
        commonName: "Pachira Aquatica",
        about: "There's real charm to this houseplant, with its umbrella-like growth and beautiful plaited trunk. It's pretty easy to care for, too. All it asks is a fairly bright spot in your home and an occasional drink. \n The money tree is known by many lovely names: French peanut, Guiana nut, Malabar chestnut, provision tree, monguba, pumpo. Or to botanists, pachira aquatica. It's usually found growing in swamps in Central and South America. It's plaited trunk doesn't occur naturally, but it's become traditional to plait it when grown as a houseplant. For reasons that aren't entirely clear, this plant is believed to bring good fortune and prosperity. In Asia, it's become very popular as an office plant, as it's thought it will help a business thrive. Got to be worth a try, right? \n This plant does well in both home or office. It just likes to live somewhere light, though out of direct sun, and to be watered when the top two inches of soil feel dry. It also likes to be misted occasionally. Look after it and in return it might make you rich, hopefully.",
        likes: "light watering, most light conditions",
        size: "Medium",
        image: "https://res.cloudinary.com/dlxbte5xh/image/upload/v1655563048/pexels-lachlan-ross-7084309_hxhet2.jpg",
        price: 60,
        user: user[0]._id,
      }
    ])
  } catch (e) {
    console.log("hi")
  }
  done()

}
