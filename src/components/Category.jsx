import { categories } from '../data/data'

function Category() {
  return (
    <div className="max-w-[1640px] px-4 py-12 mx-auto">
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-8">
        Top Rated Menu Items
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((category, i) => {
          return (
            <div
              key={i}
              className="bg-gray-100 rounded-lg flex justify-between items-center p-3"
            >
              <h2 className="font-bold sm:text-xl">{category.name}</h2>
              <img className="w-20" src={category.image} alt={category.name} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Category
