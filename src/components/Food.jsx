import { useState } from 'react'
import { data } from '../data/data'

function Food() {
  const [foods, setFoods] = useState(data)

  //Filter Type Categories
  const filterCategoryHandler = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category
      })
    )
  }

  const FilterPriceHandler = (min, max) => {
    setFoods(
      data.filter((item) => {
        return item.price >= min && item.price <= max
      })
    )
  }

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-4">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col  gap-y-6 lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex gap-3 mt-4 flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="border-orange-600  hover:bg-orange-600 hover:text-black"
            >
              All
            </button>
            <button
              onClick={(e) =>
                filterCategoryHandler(e.target.innerText.toLowerCase())
              }
              className="border-orange-600  hover:bg-orange-600 hover:text-black"
            >
              Burger
            </button>
            <button
              onClick={(e) =>
                filterCategoryHandler(e.target.innerText.toLowerCase())
              }
              className="border-orange-600 hover:bg-orange-600 hover:text-black"
            >
              Pizza
            </button>
            <button
              onClick={(e) =>
                filterCategoryHandler(e.target.innerText.toLowerCase())
              }
              className="border-orange-600 hover:bg-orange-600 hover:text-black"
            >
              Salad
            </button>
            <button
              onClick={(e) =>
                filterCategoryHandler(e.target.innerText.toLowerCase())
              }
              className="border-orange-600 hover:bg-orange-600 hover:text-black"
            >
              Chicken
            </button>
          </div>
        </div>
        <div>
          <p className="text-gray-700 font-bold">Filter Price</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={() => FilterPriceHandler(0, 10)}
              className="border-orange-600 hover:bg-orange-600 hover:text-black"
            >
              0-10$
            </button>
            <button
              onClick={() => FilterPriceHandler(10, 20)}
              className="border-orange-600 hover:bg-orange-600 hover:text-black"
            >
              10-20$
            </button>
            <button
              onClick={() => FilterPriceHandler(20, 40)}
              className="border-orange-600 hover:bg-orange-600 hover:text-black"
            >
              20-40$
            </button>
            <button
              onClick={() => FilterPriceHandler(40, 100)}
              className="border-orange-600 hover:bg-orange-600 hover:text-black"
            >
              40-100$
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
        {foods.map((food, i) => {
          return (
            <div
              key={i}
              className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{food.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-full font-bold">
                    {food.price}$
                  </span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Food
