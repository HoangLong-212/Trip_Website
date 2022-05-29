import InnerLayout from '@/components/Layout/InnerLayout';
import Home from '@/pages/Home';
import Attraction from "@/pages/Attraction";
import FoodAndDrink from '@/pages/FoodAndDrink';
import Hotel from '@/pages/Hotel';
import Province from '@/pages/Province';

//Public Routes
const publishRoutes = [
    {path: "/", component: Home},
    {path: "/Attraction_:name", component: Attraction, layout: InnerLayout },
    {path: "/FoodAndDrink_:name", component: FoodAndDrink, layout: InnerLayout },
    {path: "/Hotel_:name", component: Hotel, layout: InnerLayout },
    {path: "/Province_:name", component: Province, layout: InnerLayout },

];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
