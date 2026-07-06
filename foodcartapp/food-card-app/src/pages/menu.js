import { useQuery } from "@apollo/client";

import { GET_USERS } from "../graphql/queries";

import Navbar from "../components/Navbar";

import Loader from "../components/Loader";

import ErrorBanner from "../components/ErrorBanner";

import FoodItemCard from "../components/FoodItemCard";

import Cart from "../components/Cart";

<Cart />

export default function Menu() {

  const { loading, error, data } =
    useQuery(GET_USERS);

  if (loading) {

    return <Loader />;

  }

  if (error) {

    return <ErrorBanner message={error.message} />;

  }

  return (

    <>

      <Navbar />

      <div className="container">

        <h1>Restaurant Menu</h1>

        {data.users.data.map((food) => (

          <FoodItemCard

            key={food.id}

            food={food}

          />

        ))}

      </div>

    </>

  );

}

export async function getStaticProps(){

return{

props:{},

revalidate:86400

};

}