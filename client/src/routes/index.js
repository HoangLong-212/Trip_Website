import InnerLayout from '@/components/Layout/InnerLayout';
import Home from '@/pages/Home';
import Attraction from "@/pages/Attraction";
import FoodAndDrink from '@/pages/FoodAndDrink';
import Hotel from '@/pages/Hotel';


//Public Routes
const publishRoutes = [
    {path: "/", component: Home},
    {path: "/Attraction-:name", component: Attraction, layout: InnerLayout },
    {path: "/FoodAndDrink-:name", component: FoodAndDrink, layout: InnerLayout },
    {path: "/Hotel-:name", component: Hotel, layout: InnerLayout },


];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
