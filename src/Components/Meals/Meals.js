import MealsSummary from "./MealsSummary";

import Availablemeals from "./AvailableMeals";
import { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <Availablemeals />
    </Fragment>
  );
};

export default Meals;
