import Home from '../pages/Home';
import MovieGrid from '../pages/MovieGrid';
import MovieDetails from '../pages/MovieDetails';
import MovieTicketPlan from '../pages/MovieTicketPlan';
import MovieSeatPlan from '../pages/MovieSeatPlan';
import MovieCheckout from '../pages/MovieCheckout';
import Popcorn from '../pages/Popcorn';
import MovieDetails2 from '../pages/MovieDetails2';


const allPublicRoutes = [
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/movie-grid",
            element:<MovieGrid />
        },
        {
            path:"/movie-details",
            element:<MovieDetails />
        },
        {
            path:"/movie-details-2",
            element:<MovieDetails2 />
        },
        {
            path:"/movie-ticket-plan",
            element:<MovieTicketPlan />
        },
        {
            path:"/movie-seat-plan",
            element:<MovieSeatPlan />
        },
        {
            path:"/movie-checkout",
            element:<MovieCheckout />
        },
        {
            path:"/popcorn",
            element:<Popcorn />
        },
    ]
const allPrivateRoutes = [{},{}]

//DRY 

// Named Export
export {allPublicRoutes,allPrivateRoutes}