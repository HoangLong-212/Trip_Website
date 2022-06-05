import InnerLayout from '@/components/Layout/InnerLayout';
import Home from '@/pages/Home';
import Attraction from "@/pages/Attraction";
import FoodAndDrink from '@/pages/FoodAndDrink';
import Hotel from '@/pages/Hotel';
import SignIn from '@/pages/Authencation/SignIn';
import SignUp from '@/pages/Authencation/SignUp';


//Public Routes
const publishRoutes = [
    {path: "/", component: Home},
    {path: "/Attraction-:name", component: Attraction, layout: InnerLayout },
    {path: "/FoodAndDrink-:name", component: FoodAndDrink, layout: InnerLayout },
    {path: "/Hotel-:name", component: Hotel, layout: InnerLayout },
    {path: "/SignIn", component: SignIn, layout: null },
    {path: "/SignUp", component: SignUp, layout: null },


];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
