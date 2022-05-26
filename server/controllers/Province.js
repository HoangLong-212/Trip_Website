import { ProvinceModel } from "../models/ProvinceModel.js";

export const getProvinces = async (req, res) => {
  try {
 

    const provinces = await ProvinceModel.find();

    res.status(200).json(provinces);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};


   // const province = new ProvinceModel(
    //   // {
    //   //   name: "Bà Rịa – Vũng Tàu",
    //   //   location: "Việt Nam",
    //   //   title:
    //   //     "Ba Ria - Vung Tau is a coastal province in the Southeast region of Vietnam.",
    //   //   description:
    //   //     "Located in the Southern Key Economic Zone, at the gateway to the East Sea of the provinces in the Southeast region, Ba Ria - Vung Tau connects with Ho Chi Minh City and other localities by road, by air and by water.",
    //   //   image: [
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/2b/4e/66/christ-of-vung-tau.jpg?w=700&h=-1&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/fb/52/c3/ba-ria-vung-tau-province.jpg?w=500&h=300&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/22/48/61/nha-trang-bay.jpg?w=500&h=300&s=1",
    //   //   ],
    //   // },
    //   // {
    //   //   name: "Bình Thuận",
    //   //   location: "Việt Nam",
    //   //   title:
    //   //     "Binh Thuan is a province in the South Central Coast region of Vietnam.",
    //   //   description:
    //   //     "Binh Thuan has a long history and culture, especially Champa culture with the group of relics of Po Sha Nu Tower, Po Klong Mohnai temple and more than 100 original rare and precious Cham royal treasures owned by Mrs. , the descendants of the Cham king keep, including the crown, robes, harem, and bracelets of the king and queen.",
    //   //   image: [
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/19/8d/ba/caption.jpg?w=700&h=500&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/5e/67/fb/cu-lao-cau-island-very.jpg?w=500&h=300&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/8c/89/17/best-places-to-go-in.jpg?w=500&h=300&s=1",
    //   //   ],
    //   // },
    //   // {
    //   //   name: "Đà Nẵng City",
    //   //   location: "Việt Nam",
    //   //   title:
    //   //     "Amid majestic mountains and azure blue waters, a new Vietnam emerges",
    //   //   description:
    //   //     "No other city represents Vietnam's boom better than Da Nang. It's become a gleaming, modern tourist magnet, complete with condos, theme parks, and brand-new resorts. But the city's earlier charm is still present, including laid-back, friendly locals and incredible street eats. After you’ve stuffed yourself with a bowl of Mi Quang and Banh Mi Ba Lan, walk it off by exploring the limestone caves and Buddhist grottos of the Marble Mountains. Make an escape to the surreal mountain resort of Ba Na Hills, where the majestic Golden Bridge welcomes you with open palms.",
    //   //   image: [
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f3/cf/caption.jpg?w=700&h=-1&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/ea/ba/32/da-nang.jpg?w=500&h=300&s=1&cx=322&cy=214&chk=v1_d59e14d4212837f656a7",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/3b/19/12/lady-buddha.jpg?w=500&h=300&s=1&cx=497&cy=320&chk=v1_b09950642ea0083604e6",
    //   //   ],
    //   // },
    //   // {
    //   //   name: "Hà Nội City",
    //   //   location: "Việt Nam",
    //   //   title:
    //   //     "Layered with French and Chinese influence, Hanoi has emerged as a cultural capital that's 100 percent Vietnamese",
    //   //   description:
    //   //     "Hanoi, the country's charming capital has aged well, preserving the Old Quarter, monuments and colonial architecture, while making room for modern developments alongside. The city may have shrugged off several former names, including Thang Long, or ascending dragon but it hasn't forgotten its past, as sites such as Ho Chi Minh's Mausoleum and Hoa Lo Prison attest. Lakes, parks, shady boulevards, and more than 600 temples and pagodas add to the appeal of this city, which is easily explored by taxi.",
    //   //   image: [
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg?w=700&h=-1&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/e5/a9/8f/patrimoine-mondial.jpg?w=500&h=300&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/fb/cc/a6/preciosas-las-fuentes.jpg?w=500&h=300&s=1",
    //   //   ],
    //   // },
    //   // {
    //   //   name: "Khánh Hòa",
    //   //   location: "Việt Nam",
    //   //   title:
    //   //     "Khanh Hoa is a coastal province in the South Central Coast of Central Vietnam.",
    //   //   description:
    //   //     "Khanh Hoa is one of the provinces with a beautiful coastline of Vietnam. The coastline extends from Dai Lanh commune to the end of Cam Ranh Bay, with a length of about 385 km from the water's edge with many estuaries, lagoons, bays, and about 200 large and small islands along the coast.",
    //   //   image: [
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/13/92/a6/2016-01-18-09-largejpg.jpg?w=700&h=500&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/79/c3/82/ninhvanbay-mirtur-mirturnhatra.jpg?w=500&h=300&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/79/c3/7f/ninhvanbay-mirtur-mirturnhatra.jpg?w=500&h=300&s=1",
    //   //   ],
    //   // },
    //   // {
    //   //   name: "Kiên Giang",
    //   //   location: "Việt Nam",
    //   //   title:
    //   //     "Kien Giang is a coastal province in the Mekong Delta region of the South.",
    //   //   description:
    //   //     "Kien Giang is located at the extreme southwest of Vietnam, where the cultural interference of many regions of the country, the cultural identity of the province is also very rich and diverse, reflected in the fields of literature. , art, cuisine, festivals, traditional craft villages... The culinary culture here is also very rich and diverse with hundreds of dishes of all kinds with specialties such as Barracuda, Phu Quoc Fish Sauce, Mon porridge, Ha Tien blood cockle, Kien Giang fish noodle...",
    //   //   image: [
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/ef/2e/3f/vietnam-kien-giang-phu.jpg?w=700&h=-1&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/57/39/d8/hon-son-is-a-small-island.jpg?w=500&h=300&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/57/3e/0f/prepare-yourself-a-or.jpg?w=500&h=-1&s=1",
    //   //   ],
    //   // },
    //   // {
    //   //   name: "Quảng Nam",
    //   //   location: "Việt Nam",
    //   //   title:
    //   //     "Quang Nam is a province in the South Central Coast region of Vietnam.",
    //   //   description:
    //   //     "Quang Nam province is located in the central region of Vietnam, 820 km from Hanoi capital to the north, 126 km from Hue city to the south, bordering Da Nang city in the north and 900 km from Ho Chi Minh City. km to the South along National Highway 1",
    //   //   image: [
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/e0/89/99/da-nang-beach.jpg?w=700&h=-1&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/97/56/82/caption.jpg?w=500&h=300&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/f9/23/2e/vinpearl-resort-golf.jpg?w=500&h=300&s=1",
    //   //   ],
    //   // },
    //   // {
    //   //   name: "Hồ Chí Minh City",
    //   //   location: "Việt Nam",
    //   //   title:
    //   //     "The Pearl of the Far East; a dynamic city that dazzles and delights",
    //   //   description:
    //   //     "As Vietnam’s largest economic center and cultural capital, Ho Chi Minh City boasts soaring skyscrapers that tower over charming French colonial structures and traditional pagodas from Saigon’s yesteryear. Past the bustling streets and dizzying traffic, uncover the delicious street food, booming nightlife and historical landmarks that give this city its distinct appeal. Visit The War Remnants Museum for a glimpse into the Vietnam War, wander down Bui Vien Street for cheap beer or cruise through the Mekong Delta for sprawling views of paddy fields and houseboats.",
    //   //   image: [
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/de/9a/17/ben-thanh-market-before.jpg?w=500&h=300&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/e9/74/9f/caption.jpg?w=500&h=-1&s=1",
    //   //     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f1/0b/caption.jpg?w=500&h=400&s=1",
    //   //   ],
    //   // }
    // );

    // province.save();