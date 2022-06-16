import Home from '@/pages/Home';
import Attraction from "@/pages/Attraction";
import FoodAndDrink from '@/pages/FoodAndDrink';
import Hotel from '@/pages/Hotel';
<<<<<<< HEAD
import SignIn from '@/pages/Authencation/SignIn';
import SignUp from '@/pages/Authencation/SignUp';

=======
import ProvinceAndPlace from '@/pages/ProvinceAndPlace';
import Filter from '@/pages/Filter';
import { AuthenticationLayout, FilterLayout, InnerLayout } from '@/components/Layout';
import SignIn from '@/pages/Authentication/SignIn';
import SignUp from '@/pages/Authentication/SignUp';
>>>>>>> 789706a49daef8418f2756b81e8f93661e7b2c10

//Public Routes
const publishRoutes = [
    {path: "/", component: Home},
<<<<<<< HEAD
    {path: "/Attraction-:name", component: Attraction, layout: InnerLayout },
    {path: "/FoodAndDrink-:name", component: FoodAndDrink, layout: InnerLayout },
    {path: "/Hotel-:name", component: Hotel, layout: InnerLayout },
    {path: "/SignIn", component: SignIn, layout: null },
    {path: "/SignUp", component: SignUp, layout: null },


=======
    {path: "/SignIn", component: SignIn, layout: AuthenticationLayout },
    {path: "/SignUp", component: SignUp, layout: AuthenticationLayout },
    {path: "/Info_Attraction_:name", component: Attraction, layout: InnerLayout },
    {path: "/Info_FoodAndDrink_:name", component: FoodAndDrink, layout: InnerLayout },
    {path: "/Info_Hotel_:name", component: Hotel, layout: InnerLayout },
    {path: "/Info_Province_:name", component: ProvinceAndPlace, layout: InnerLayout },
    {path: "/Info_Place_:name", component: ProvinceAndPlace, layout: InnerLayout },
    {path: "/Filter_Province_Attraction_:name", component: Filter, layout: FilterLayout },
    {path: "/Filter_Place_Attraction_:name", component: Filter, layout: FilterLayout },
    {path: "/Filter_Province_Hotel_:name", component: Filter, layout: FilterLayout },
    {path: "/Filter_Place_Hotel_:name", component: Filter, layout: FilterLayout },
    {path: "/Filter_Province_FoodAndDrink_:name", component: Filter, layout: FilterLayout },
    {path: "/Filter_Place_FoodAndDrink_:name", component: Filter, layout: FilterLayout },
>>>>>>> 789706a49daef8418f2756b81e8f93661e7b2c10
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
