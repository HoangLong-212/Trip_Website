import Home from '@/pages/Home';
import Test from "@/pages/Test";


//Public Routes
const publishRoutes = [
    {path: "/", component: Home},
    {path: "/test", component: Test},

];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
