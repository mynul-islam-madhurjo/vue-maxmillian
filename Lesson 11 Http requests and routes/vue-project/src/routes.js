import TheForm from './components/TheForm.vue'; // Replace with the actual path to your Home component
import RatingControl from './components/RatingControl.vue'; 

const routes = [
  {
    path: '/form',
    component: TheForm,
  },
  {
    path: '/rating',
    component: RatingControl,
  },
];

export default routes;